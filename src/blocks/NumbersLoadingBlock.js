import * as React from "react"
import LoadingNumber from "../components/loadingNumber";

import { mobile, colCenter, tit50, txt18 } from '../style/index'

const parse = require('html-react-parser');

export default function NumbersLoadingBlock({heading, text, rep}) {
  const repeat = JSON.parse(rep)

  return (
    <section css={style}>
      <header>
        <h2>{heading}</h2>
        <p>{parse(text)}</p>
      </header>

      <div css={style.grid}>
        {
          repeat.map(({ fields }) => (
            <LoadingNumber data={fields} />
          ))
        }
      </div>
    </section>
  )
}



// export const query = graphql`
//   fragment NumbersLoadingBlockContent on NumbersLoadingBlock {
//     id
//     heading
//     text
//     rep
//   }
// `

const grid = (col, gap) => {
  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${col}, 1fr)`,
    gap: gap,
  }
}


const style = {
  ...colCenter,

  width: '120rem',
  margin: '6rem auto 0',
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
      textAlign: 'center',

      marginBottom: '1rem',
    },
    p: {
      ...txt18,
      textAlign: 'center',
    }
  },

  grid: {
    ...grid(3, 0),
    width: '100%',

    [mobile]: {
      gridTemplateColumns: '1fr',
      gap: '1.4rem',
    },
  }
}
