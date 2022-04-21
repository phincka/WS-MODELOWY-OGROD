import * as React from "react"
import { mobile, centerCol, tit65, txt16 } from '../style/index'

const parse = require('html-react-parser');

export default function LoadingNumber({data}) {
  return (
    <div css={style}>
      <p>{parse(data.number)}</p>
      <h3>{data.text}</h3>
    </div>
  )
}


const style = {
  ...centerCol,
  padding: '1.1rem 2rem',

    '&:nth-child(2), &:nth-child(5)': {
      borderLeft: '.1rem solid #000',
      borderRight: '.1rem solid #000',

      [mobile]: {
        border: 'none',
      },
    },

    p: {
      ...tit65,
    },
    h3: {
      ...txt16,
    }
}
