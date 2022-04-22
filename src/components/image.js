import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Image({ style, img }) {
  
  if (img){
    return (
      <GatsbyImage
        alt={img.alt ? img.alt : 'alt'}
        image={getImage(img)}
        css={style}
      />
    )
  }else{
    return <></>
  }
}