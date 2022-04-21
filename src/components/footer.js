import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SocialMedia from "./socialMedia";

import { mobile, center, spaceBetweenCenter, colCenter, txt18, txt14, colors, centerCol, tit48, tit40, txt24 } from '../style/index'
import telIcon from "../assets/telIcon";



const parse = require('html-react-parser');


export default function Footer(props) {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsLayoutfooter {
        edges {
          node {
            id
            heading
            text
            text2
            tel
            socialLinks {
              id
              service
              url
            }
            image {
              gatsbyImageData
              alt
            }
            privacyUrl {
              slug
            }
          }
        }
      }
    }
  `)
  const { heading, text, text2, tel, socialLinks, image, privacyUrl } = data.allDatoCmsLayoutfooter.edges[0].node

  return (
    <footer css={style}>
      <div css={style.top}>
        {image && (
          <GatsbyImage
            alt={image.alt ? image.alt : 'alt'}
            image={getImage(image)}
            css={style.top.image}
          />
        )}

        <div css={style.top.content}>
          <h2>{heading}</h2>
          <p>{parse(text)}</p>

          <a css={style.top.content.tel} href={`tel:${tel}`}>{telIcon}<span>{parse(tel)}</span></a>

          <h3>{text2}</h3>

          <SocialMedia data={socialLinks} />
        </div>
      </div>

      <div css={style.bottom}>
        <div css={style.bottom.wrap}>
          <p>Copyright © 2021 Modelowy Ogród</p>
          <a href={privacyUrl.slug} style={{ textAlign: 'center' }}>Polityka Prywatności</a>
          <a rel="nofollow" href="https://www.websitestyle.pl" style={{ textAlign: 'right' }}>WebsiteStyle.pl - Strony WWW</a>
        </div>
      </div>
    </footer>
  )
}


const style = {
  marginTop: 'auto',

    top: {
      ...colCenter,

      padding: '6rem 0',
      position: 'relative',
      image: {
        width: '100%',
        height: '100%',

        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
      },
      '&::before': {
        content: "''",
        width: '100%',
        height: '100%',

        backgroundColor: colors.purple,
        opacity: .5,

        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
      },

      content: {
        ...centerCol,

        width: '78rem',

        position: 'relative',
        zIndex: 2,

        [mobile]: {
          width: '100%',
          padding: '0 1.4rem',
        },

        h2: {
          ...tit48,
          color: colors.white,
          textAlign: 'center',
        },

        p: {
          ...txt18,
          textAlign: 'center',
          color: colors.white,
          fontWeight: 600,

          margin: '1rem 0 2.5rem',
        },

        tel: {
          ...center,
          gap: '1.5rem',

          ...tit40,
          color: colors.white,

          width: '100%',
          boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.5)',

          padding: '2rem 5rem',

          position: 'relative',

          [mobile]:{
            ...txt24,
            color: colors.white,
          },

          '&::before': {
            content: "''",
            width: '100%',
            height: '100%',

            backgroundColor: colors.pcolor,
            opacity: .85,

            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
          },

          span: {
            position: 'relative',
            zIndex: 1,
          },

          svg: {
            width: '4rem',
            height: '4rem',
            position: 'relative',
          }
        },

        h3: {
          ...txt18,
          textAlign: 'center',
          color: colors.white,
          fontWeight: 600,

          margin: '1.7rem 0 1.5rem',
        }
      },
    },


    bottom: {

      backgroundColor: colors.pcolor,
      padding: '1rem 0',
      wrap: {
        ...spaceBetweenCenter,
        width: '142rem',
        margin: '0 auto',

        [mobile]: {
          width: '100%',
          flexDirection: 'column',
          gap: '1rem',
        }
      },

      p: {
        ...txt14,
        color: colors.white,
      },
      a: {
        ...txt14,
        color: colors.white,
      }
    }
}

