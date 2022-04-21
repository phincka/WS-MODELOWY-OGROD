import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { centerCol, tit36, txt18, btn1 } from '../style/index'
import ProductType from "./productType"


export default function BigProduct({ data, categorySlug }) {
  const { productType, thumbnail, slug, title, text } = data

  return (
    <a css={style} href={`/${categorySlug}/${slug}`}>
      <ProductType type={productType} />

      {thumbnail && (
        <GatsbyImage
          alt={thumbnail.alt ? thumbnail.alt : 'alt'}
          image={getImage(thumbnail)}
          css={style.thumbnail}
        />
      )}

      <h3>{text}</h3>
      <h2>{title}</h2>

      <button css={style.btn} href="#">
        <span>dowiedz się więcej</span>
      </button>
    </a>
  )
}


const style = {
  ...centerCol,
  justifyContent: 'flex-start',

    '&:hover': {
      img: {
        transform: 'scale(1.14)',
      }
    },
    thumbnail: {
      width: '30rem',
      height: '30rem',
      objectFit: 'cover',
      overflow: 'hidden',
      position: 'relative',

      boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.5)',
        img: {
          transition: 'all 0.5s !important',
        }
    },

    h3: {
      ...txt18,
      textAlign: 'center',

      margin: '1.4rem 0 -.6rem',
    },

    h2: {
      ...tit36,
      textAlign: 'center',

      marginBottom: '1rem',
    },

    p: {
      ...txt18,
      textAlign: 'center',
    },

    btn: {
      ...btn1,

      marginTop: 'auto',
    }
}
