import * as React from "react"

export default function Button({ style, button }) {
  const { title, url } = button
  
  if(button){
    return (
      <a css={style} href={url}>
        <span>{title}</span>
      </a>
    )
  }else{
    return <></>
  }

  
}