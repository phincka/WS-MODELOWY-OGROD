import * as React from "react"
import { grid, mobile, colCenter, tit50, txt18, colors } from '../style/index'
import BigCategory from "../components/bigCategory";
import SectionHeader from "../components/sectionHeader";


export default function CategriesSectionBlock({ heading, text, categories }) {

  return (
    <section css={style}>
      <SectionHeader title={heading} text={text} />

      <div css={style.grid}>
        {
          categories.map(category => {
            return (
              <BigCategory key={category.id} {...category}/>
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
  marginTop: '5rem',
  padding: '6rem 0 6rem',

  backgroundColor: colors.pcolor,
  position: 'relative',

  [mobile]: {
    width: '100%',
    padding: '4rem 1.4rem',
    marginTop: '4rem',
  },

    header: {
      marginBottom: '4.5rem',

      [mobile]: {
        marginBottom: '2.4rem',
      },
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
