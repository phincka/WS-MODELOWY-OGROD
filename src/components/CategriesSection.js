import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { grid, mobile, colCenter, tit50, colors } from '../style/index'
import BigCategory from "./bigCategory";


export default function CategriesSection({hideTitle}) {
  const data = useStaticQuery(graphql`
    query categriesSectionQuery {
      allDatoCmsCategory{
        edges {
          node {
            slug 
            title
            thumbnail{
              alt
              gatsbyImageData
              url 
            }
          }
        }
      }
    }
  `)

  const categories = data.allDatoCmsCategory.edges

  return (
    <section css={style}>
      {
        !hideTitle && (
          <header>
            <h2>Katalog Roślin</h2>
          </header>
        )
      }

      <div css={style.grid}>
        {
          categories.reverse().map(category => {
            return (
              <BigCategory key={category.node.id} {...category.node}/>
            )
          })
        }
      </div>
    </section>
  )
}


const style = {
  ...colCenter,

  width: '100%',
  marginTop: '6.7rem',
  marginBottom: '5.7rem',
  position: 'relative',

  [mobile]: {
    width: '100%',
    padding: '4rem 1.4rem',
    marginTop: '4rem',
  },

    header: {
      marginBottom: '4rem',

      [mobile]: {
        marginBottom: '2.4rem',
      },
        h2: {
          ...tit50,
          color: colors.pcolor,
          textAlign: 'center',
        },
    },

    grid: {
      ...grid(4, '2rem'),

      width: '118rem',

      [mobile]: {
        width: '100%',

        gridTemplateColumns: '1fr',
        gap: '2rem',
      },
    },
}
