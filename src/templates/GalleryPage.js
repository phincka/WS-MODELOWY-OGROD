import React, { useEffect } from 'react';
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

import Layout from "../components/layout"
import PageHeader from "../components/pageHeader"
import { mobile } from "../style"


export default function Gallery({ data }) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  data = data.allDatoCmsGalleryPage.edges[0].node

  const pageHeader = {
    banerImg: data.banerImg,
    title: data.title,
    text: data.text,
  }

  return (
    <Layout {...data.metadata}>
      <PageHeader data={pageHeader} />

      <section css={style} id="gallery">
        {
          data.gallery.map(image => {
            return (
              <a
                href={getImage(image).images.fallback.src}
                data-pswp-width={image.width}
                data-pswp-height={image.height}
                target="_blank"
                key={image.path}
                rel="noreferrer"
                css={style.image}
              >
                <GatsbyImage
                  alt={image.alt ? image.alt : 'alt'}
                  image={getImage(image)}
                />
              </a>
            )
          })
        }
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    allDatoCmsGalleryPage (filter: {id: {eq: $id}}) {
      edges {
        node {
          id
          text
          title
          banerImg {
            alt
            gatsbyImageData
          }

          metadata {
            title
            description
            image {
              url
            }
          }

          gallery {
            path
            width
            height
            alt
            gatsbyImageData
          }
        }
      }
    }
  }
`

const grid = (col, gap) => {
  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${col}, 1fr)`,
    gap: gap,
  }
}

const style = {
  ...grid(2, '2rem'),
  width: '142rem',
  margin: '10.9rem auto 5rem',

  [mobile]: {
    width: '100%',
    margin: '4rem auto 6rem',
    padding: '0 1.4rem',

    gridTemplateColumns: '1fr',
  },

    image: {
      width: '100%',
      height: '52.4rem',
      objectFit: 'cover',

      [mobile]: {
        height: '28rem',
      }
    },
}