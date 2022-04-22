import * as React from "react"
import SectionHeader from "../components/sectionHeader";
import Image from "../components/image";

import { mobile, colCenter, verticalCenter, txt18 } from '../style/index'

const parse = require('html-react-parser');

export default function HomepageAbout({ heading, text, text2, image}) {
  return (
    <section css={style}>
      <SectionHeader title={heading} text={text} />

      <div css={style.content}>
        <Image style={style.image} img={image} />

        <p>{parse(text2)}</p>
      </div>
    </section>
  )
}


const style = {
  ...colCenter,

  width: '118rem',
  margin: '6rem auto 0',
  position: 'relative',

  [mobile]: {
    width: '100%',
    padding: '0 1.4rem',
    marginTop: '4rem',
  },

    content: {
      ...verticalCenter,

      [mobile]: {
        flexDirection: 'column',
      },
        image: {
          width: '50rem',
          height: '42rem',
          objectFit: 'cover',
          filter: 'drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5))',

          [mobile]: {
            width: '100%',
            height: '24rem',
          },
        },

        p: {
          ...txt18,
          textAlign: 'center',

          width: 'calc(100% - 50rem)',
          paddingLeft: '6.5rem',

          [mobile]: {
            width: '100%',
            paddingLeft: 0,
            marginTop: '1.4rem',
          },
        }
    },
}