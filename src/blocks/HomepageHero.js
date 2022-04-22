import * as React from "react"
import { centerCol, tit70, tit40, btn1, colors } from '../style/index'
import Button from '../components/button'
import Image from "../components/image";

const parse = require('html-react-parser');


export default function HomepageHero({ heading, text, image, buttons}) {
  const button = buttons[0]
  return (
    <section css={style}>
      <h1>{heading}</h1>
      <p>{ parse(text) }</p>

      <Button style={style.btn} button={button} />
      <Image style={style.image} img={image} />
    </section>
  )
}


const style = {
  ...centerCol,

  position: 'relative',
  padding: '21.9rem 0 16.7rem',

  '&:before': {
    content: '""',
    width: '100%',
    height: '100%',
    backgroundColor: colors.black,
    opacity: .25,

    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1
  },


  h1: {
    ...tit70,

    textAlign: 'center',
    position: 'relative',
    zIndex: 2,
  },
  p: {
    ...tit40,
    color: colors.grey,
    textAlign: 'center',

    position: 'relative',
    zIndex: 2,

    marginBottom: '1.1rem',
  },

  a: {
    position: 'relative',
    zIndex: 2,
  },

  btn: {
    ...btn1,
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