import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { mobile, colCenter, tit50, tit40, txt18, btn1 } from '../style/index'


export default function ServicesBlock({ heading, image, buttons}) {
  const button = buttons[0]

  return (
    <section css={style}>
      <header>
        <h2>{heading}</h2>
      </header>

      <div css={style.content}>
        {image && (
          <GatsbyImage
            alt={image.alt ? image.alt : 'alt'}
            image={getImage(image)}
            css={style.content.image}
          />
        )}

        <h3>Zakładanie i pielęgnacja ogrodów</h3>

        {
          button && (
            <a css={btn1} href={button.url}>
              <span>{button.title}</span>
            </a>
          )
        }
      </div>
    </section>
  )
}



// export const query = graphql`
//   fragment ServicesBlockContent on ServicesBlock {
//     id
//     heading
//     text
//     image {
//       id
//       gatsbyImageData
//       alt
//     }
//   }
// `



const style = {
  ...colCenter,

  width: '118rem',
  margin: '6rem auto 6rem',
  position: 'relative',

  [mobile]: {
    width: '100%',
    padding: '0 1.4rem',
    marginTop: '4rem',
  },

    header: {
      marginBottom: '3.5rem',
        h2: {
          ...tit50,

          marginBottom: '1rem',
          textAlign: 'center',
        },
        p: {
          ...txt18,
          textAlign: 'center',
        }
    },

    content: {
      ...colCenter,

        image: {
          width: '51rem',
          height: '28rem',
          objectFit: 'cover',
          filter: 'drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5))',

          [mobile]: {
            width: '100%',
          },
        },

        h3: {
          ...tit40,
          textAlign: 'center',

          marginTop: '1rem',
          marginBottom: '2.1rem',
        }
    },

    
}
