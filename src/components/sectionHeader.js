import * as React from "react"
import { tit50, txt18 } from '../style/index'
const parse = require('html-react-parser');

export default function SectionHeader({ title, text }) {
    return (
      <header css={style}>
        <h2>{title}</h2>
        {
          text && (
            <p>{parse(text)}</p>
          )
        }
      </header>
    )
}


const style = {
    marginBottom: '3.4rem',
    h2: {
      ...tit50,

      marginBottom: '1rem',
      textAlign: 'center',
    },
    p: {
      ...txt18,
      textAlign: 'center',
    }
}