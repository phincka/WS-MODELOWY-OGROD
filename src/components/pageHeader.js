import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { mobile, centerCol, tit48, txt18, colors } from '../style/index'

const parse = require('html-react-parser');


export default function PageHeader({data}) {
  const { banerImg, title, text } = data

  return (
    <header css={style}>
      {banerImg && (
        <GatsbyImage
          alt={banerImg.alt ? banerImg.alt : 'alt'}
          image={getImage(banerImg)}
          css={style.image}
        />
      )}

      <h1>{title}</h1>

      <p>{text && parse(text)}</p>
    </header>
  )
}


const style = {
  ...centerCol,

  position: 'relative',
  padding: '3rem 0 4.4rem',

  [mobile]: {
    marginTop: '7.9rem',
  },
  '&:before': {
    content: '""',
    width: '100%',
    height: '100%',
    backgroundColor: colors.purple,
    opacity: .5,

    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1
  },

  h1: {
    ...tit48,
    color: colors.white,

    textAlign: 'center',
    position: 'relative',
    zIndex: 2,
  },
  
  p: {
    ...txt18,
    color: colors.white,
    textAlign: 'center',

    position: 'relative',
    zIndex: 2,

    marginBottom: '1.1rem',
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',

    position: 'absolute',
    top: 0,
    left: 0,
  }
}
