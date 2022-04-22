import * as React from "react"
import Image from "./image"

import { mobile, centerCol, tit40, colors } from '../style/index'


export default function BigCategory({ slug, title, thumbnail}) {

  return (
    <a css={style} href={`/${slug}`}>
      <Image style={style.thumbnail} img={thumbnail} />

      <h3>{title}</h3>

      <button css={style.btn}>
        <span>Dowiedz się więcej</span>
      </button>
    </a>
  )
}


const style = {
  ...centerCol,
  justifyContent: 'flex-end',
  
  width: '100%',
  height: '28rem',

  position: 'relative',

  padding: '3.5rem 4.5rem',
  overflow: 'hidden',

  [mobile]: {
    height: '32rem',
  },
    '&:hover': {
      img: {
        transform: 'scale(1.14)',
      }
    },
    thumbnail: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',

      boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.5)',
      filter: 'brightness(0.6)',

      position: 'absolute',
      top: 0,
      left: 0,
        img: {
          transition: 'all 0.5s !important',
        }
    },

    h3: {
      ...tit40,
      textAlign: 'center',
      color: colors.white,

      marginBottom: '1.5rem',
      position: 'relative',
      zIndex: 1,
    },

    btn: {
      width: '100%',

      position: 'relative',
      zIndex: 1,

      padding: '1rem 1.8rem',
      backgroundColor: colors.pcolor,

      transition: '.2s',
        '&:hover': {
          backgroundColor: '#533D5E',
        },
        span: {
          textAlign: 'center',
          fontSize: '1.5rem',
          fontWeight: 500,
          color: colors.white,
        }
    }
}
