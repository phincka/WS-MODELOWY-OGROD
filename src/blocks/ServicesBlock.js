import * as React from "react"
import { mobile, colCenter, tit40, btn1 } from '../style/index'
import SectionHeader from "../components/sectionHeader";
import Button from "../components/button"
import Image from "../components/image";


export default function ServicesBlock({ heading, image, buttons}) {
  const button = buttons[0]

  return (
    <section css={style}>
      <SectionHeader title={heading} />

      <div css={style.content}>
        <Image style={style.content.image} img={image} />

        <h3>Zakładanie i pielęgnacja ogrodów</h3>
        <Button style={btn1} button={button} />
      </div>
    </section>
  )
}


const style = {
  ...colCenter,

  width: '118rem',
  margin: '6rem auto 6rem',
  position: 'relative',

  [mobile]: {
    width: '100%',
    padding: '0 1.4rem',
    marginTop: '4rem',
  },

    content: {
      ...colCenter,

        image: {
          width: '51rem',
          height: '28rem',
          objectFit: 'cover',
          filter: 'drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5))',

          [mobile]: {
            width: '100%',
          },
        },

        h3: {
          ...tit40,
          textAlign: 'center',

          marginTop: '1rem',
          marginBottom: '2.1rem',
        }
    },

    
}
