import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { mobile, colCenter, tit50, txt18, txt20, colors } from '../style/index'

const parse = require('html-react-parser');


export default function PartnersSectionBlock({ heading, text, images }) {
  return (
    <section css={style}>
      <header>
        <h2>{heading}</h2>

        {text && (
          <p>{parse(text)}</p>
        )}
        
      </header>

      <div css={style.content}>
        <div css={style.content.grid}>
          {
            images.map(image => {
              return (
                <div css={style.content.grid.single}>
                  <GatsbyImage
                    alt={image.alt ? image.alt : 'alt'}
                    image={getImage(image)}
                    css={style.content.grid.image}
                  />

                  <p>{image.alt}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}



// export const query = graphql`
//   fragment DatoCmsPartnersSectionBlock on PartnersSectionBlock {
//     id
//     heading
//     text
//     images {
//       id
//       gatsbyImageData
//       alt,
//     }
//   }
// `


const style = {
  ...colCenter,

  width: '100%',
  margin: '4.8rem 0 12.5rem',

  position: 'relative',


  [mobile]: {
    marginBottom: '6rem'
  },
  header: {
    marginBottom: '3.5rem',
    h2: {
      ...tit50,
      textAlign: 'center',

    },
    p: {
      ...txt18,
      color: colors.white,
      textAlign: 'center',
      marginTop: '1rem',
    }
  },

  content: {
    ...colCenter,
    gap: '3rem',

    grid: {
      display: 'flex',
      justifyContent: 'center',
      gap: '13.2rem',

      width: '142rem',

      [mobile]: {
        width: '100%',
        gap: '2rem',
        flexDirection: 'column',
      },
        single: {
          image: {
            width: '30rem',
            height: '20rem',
            objectFit: 'contain',
          },
          p: {
            ...txt20,
            textAlign: 'center',
            fontWeight: 600,
          }
        }
    },
  },
}
