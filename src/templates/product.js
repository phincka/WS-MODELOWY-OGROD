import * as React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/pageHeader"

import Image from "../components/image";
import { mobile, colStart, tit36, txt18, colors } from '../style/index'
import sun from "../assets/sun"
import snow from "../assets/snow"
import water from "../assets/water"
import location from "../assets/location"
import CategriesSection from "../components/CategriesSection"


const parse = require('html-react-parser');


export default function Product(props) {
  const { thumbnail } = props.pageContext
  const { title, text, text1, text2, text3, text4 } = props.pageContext.content[0]

  return (
    <Layout {...props.pageContext.metadata}>
      <PageHeader data={props.pageContext.category} />

      <section css={style}>
        <Image style={style.image} img={thumbnail} />

        <div css={style.content}>
          <h2>{title}</h2>
          <p>{text && parse(text)}</p>

          <ul css={style.content.list}>
            <li css={style.content.list.single}>
              {snow}
              <p>{text1 && parse(text1)}</p>
            </li>

            <li css={style.content.list.single}>
              {sun}
              <p>{text2 && parse(text2)}</p>
            </li>

            <li css={style.content.list.single}>
              {water}
              <p>{text3 && parse(text3)}</p>
            </li>

            <li css={style.content.list.single}>
              {location}
              <p>{text4 && parse(text4)}</p>
            </li>
          </ul>

          <a css={style.content.btn} href="/kontakt">Wyślij zapytanie &gt;</a>
        </div>
      </section>

      <CategriesSection />
    </Layout>
  )
}



const style = {
  display: 'flex',

  width: '116rem',
  margin: '7.8rem auto 0',

  [mobile]: {
    width: '100%',
    margin: '4rem auto 6rem',
    padding: '0 1.4rem',

    flexDirection: 'column',
  },

    image: {
      width: '40rem',
      height: '40rem',
      objectFit: 'cover',

      boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.5)',

      [mobile]: {
        width: '100%',
        height: '32rem',
      }
    },

    content: {
      ...colStart,
      width: 'calc(100% - 40rem)',
      paddingLeft: '6rem',

      [mobile]: {
        width: '100%',
        paddingLeft: 0,
        marginTop: '2rem',
      },
        h2: {
          ...tit36,
          marginBottom: '1.5rem',
        },

        p: {
          ...txt18,
        },

        btn: {
          ...txt18,
          lineHeight: 'unset',
          color: colors.pcolor,
          textDecoration: 'underline',
          backgroundColor: '#eee',

          marginTop: '3rem',
          transition: '.2s',
            '&:hover': {
              color: '#eee',
              backgroundColor: colors.pcolor,
            }
        },
        list: {
          ...colStart,
          gap: '.9rem',

          listStyle: 'none',
          marginTop: '5.2rem',

            single: {
              display: 'flex',
              gap: '.5rem',

                svg: {
                  width: '2rem',
                  height: '2rem',

                  position: 'relative',
                  top: '.7rem',
                }
            },
        }
    },
}