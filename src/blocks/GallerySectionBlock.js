import React, { useEffect } from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { mobile, colCenter, tit50, txt18, btn2, colors } from '../style/index'

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const parse = require('html-react-parser');


export default function GallerySectionBlock({ heading, text, images, buttons}) {
  const button = buttons[0]

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

  return (
    <section css={style}>
      <header>
        <h2>{heading}</h2>
        <p>{parse(text)}</p>
      </header>

      <div css={style.content}>
        <div css={style.content.grid} id="gallery">
          {
            images.map(image => {
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
                    css={style.content.grid.image}
                  />
                </a>
              )
            })
          }
        </div>

        {
          button && (
            <a css={style.content.btn} href={button.url}>
              <span>{button.title}</span>
            </a>
          )
        }
      </div>
    </section>
  )
}



const grid = (col, gap) => {
  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${col}, 1fr)`,
    gap: gap,
  }
}


const style = {
  ...colCenter,

  width: '100%',
  padding: '6rem 0 6rem',

  backgroundColor: colors.pcolor,
  position: 'relative',

  [mobile]: {
    width: '100%',
    padding: '4rem 1.4rem',
  },

    header: {
      marginBottom: '3.5rem',
        h2: {
          ...tit50,
          color: colors.white,
          textAlign: 'center',

          marginBottom: '1rem',
        },
        p: {
          ...txt18,
          color: colors.white,
          textAlign: 'center',
        }
    },

    content: {
      ...colCenter,
      gap: '3rem',

        grid: {
          ...grid(5, '2rem'),
          width: '142rem',

          [mobile]: {
            width: '100%',

            gridTemplateColumns: '1fr',
          },

            image: {
              width: '100%',
              height: '20rem',
              objectFit: 'cover',
            },
        },

        btn: {
          ...btn2,
        }
    },
}
