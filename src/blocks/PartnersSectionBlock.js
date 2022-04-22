import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { mobile, colCenter, txt20 } from '../style/index'
import SectionHeader from "../components/sectionHeader";


export default function PartnersSectionBlock({ heading, text, images }) {
  return (
    <section css={style}>
      <SectionHeader title={heading} text={text} />

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


const style = {
  ...colCenter,

  width: '100%',
  margin: '4.8rem 0 12.5rem',

  position: 'relative',


  [mobile]: {
    marginBottom: '6rem'
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
