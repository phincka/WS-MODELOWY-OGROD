import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { centerCol, tit40, txt18, colors } from '../style/index'


export default function SingleService(props) {
  const { image, title, url } = props

  if (url) {
    return (
      <a href={url} css={style}>
        {image && (
          <GatsbyImage
            alt={image.alt ? image.alt : 'alt'}
            image={getImage(image)}
            css={style.image}
          />
        )}

        <h2>{title}</h2>

        <button css={style.btn}>Dowiedz się więcej &gt;</button>
      </a>
    )
  }else{
    return (
      <div css={style}>
        {image && (
          <GatsbyImage
            alt={image.alt ? image.alt : 'alt'}
            image={getImage(image)}
            css={style.image}
          />
        )}

        <h2>{title}</h2>
      </div>
    )
  }
  
}


const style = {
  ...centerCol,
  justifyContent: 'flex-start',

    image: {
      width: '100%',
      height: '28rem',
      objectFit: 'cover',

      boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.5)',
    },
    
    h2: {
      ...tit40,
      textAlign: 'center',

      marginTop: '1rem',
    },

    btn: {
      ...txt18,
      lineHeight: 'unset',
      color: colors.pcolor,
      textDecoration: 'underline',
      backgroundColor: '#eee',

      marginTop: '1rem',
      transition: '.2s',
      '&:hover': {
        color: '#eee',
        backgroundColor: colors.pcolor,
      }
    },
}
