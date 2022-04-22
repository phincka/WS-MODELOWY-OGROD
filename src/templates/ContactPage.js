import React, { useRef, useState } from "react"
import { graphql } from "gatsby"
import emailjs from '@emailjs/browser';

import { mobile, center, txt24, txt18, txt16, colors, tit40, btn1, colStart, verticalCenter, txt14 } from '../style/index'
import Layout from "../components/layout"
import PageHeader from "../components/pageHeader"
import SocialMedia from "../components/socialMedia";
import telIcon from "../assets/telIcon";


const parse = require('html-react-parser');



export default function ServicesPage({ data }) {
  data = data.allDatoCmsContactPage.edges[0].node

  const pageHeader = {
    banerImg: data.banerImg,
    title: data.title,
    text: data.text,
  }

  const [formResult, setFormResult] = useState()

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.GATSBY_SERVICE_ID, process.env.GATSBY_TEMPLATE_ID, form.current, process.env.GATSBY_USER_ID)
      .then(() => {
        setFormResult('Dziękujemy za kontakt. Postaramy się odpowiedzieć w najbliższym czasie.')
      }, error => {
        setFormResult(error.text)
      });

    e.target.reset()
  };

  return (
    <Layout {...data.metadata}>
      <PageHeader data={pageHeader} />

      <section css={style}>
        <a css={style.tel} href={`tel:${data.tel}`}>{telIcon}<span>{parse(data.tel)}</span></a>

        <h2>{data.heading}</h2>
        <p css={style.txt}>{parse(data.text2)}</p>

        <form css={formStyle} ref={form} onSubmit={sendEmail}>
          <p css={formStyle.info}>{formResult}</p>

          <div css={formStyle.row}>
            <label css={formStyle.labelStyle} htmlFor="user_name">Imię <span>*</span></label>
            <input css={formStyle.inputStyle} required id="user_name" type="text" name="user_name" />
          </div>

          <div css={formStyle.row}>
            <label css={formStyle.labelStyle} htmlFor="user_email">Adres e-mail <span>*</span></label>
            <input css={formStyle.inputStyle} required id="user_email" type="text" name="user_email" />
          </div>

          <div css={formStyle.row}>
            <label css={formStyle.labelStyle} htmlFor="user_tel">Numer telefonu <span>*</span></label>
            <input css={formStyle.inputStyle} required id="user_tel" type="text" name="user_tel" />
          </div>

          <div css={formStyle.row}>
            <label css={formStyle.labelStyle} htmlFor="user_subject">Tematyka zapytania</label>

            <fieldset css={formStyle.group}>     
              <label>
                <input css={formStyle.checkbox} id="user_subject" type="checkbox" name="user_subject" value="Palmy Mrozoodporne" /> 
                <span>Palmy Mrozoodporne</span>
              </label>
              <label>
                <input css={formStyle.checkbox} id="user_subject" type="checkbox" name="user_subject" value="Drzewa Oliwne" />
                <span>Drzewa Oliwne</span>
              </label>
              <label>
                <input css={formStyle.checkbox} id="user_subject" type="checkbox" name="user_subject" value="Jukki" />
                <span>Jukki</span>
              </label>
              <label>
                <input css={formStyle.checkbox} id="user_subject" type="checkbox" name="user_subject" value="Pozostałe Rośliny" />
                <span>Pozostałe Rośliny</span>
              </label>
              <label>
                <input css={formStyle.checkbox} id="user_subject" type="checkbox" name="user_subject" value="Usługi" />
                <span>Usługi</span>
              </label>
              <label>
                <input css={formStyle.checkbox} id="user_subject" type="checkbox" name="user_subject" value="Inne" />
                <span>Inne</span>
              </label>
            </fieldset>  
          </div>

          <div css={formStyle.row}>
            <label css={formStyle.labelStyle} htmlFor="message">Wiadomość <span>*</span></label>
            <textarea css={formStyle.textarea} required id="message" name="message" />
          </div>


          <button css={formStyle.btn} type="submit" >
            <span>Wyślij wiadomość</span>
          </button>
        </form>

        <h3>{data.socialmediaTitle}</h3>
        <SocialMedia data={data.socialLinks} />
      </section>
    </Layout>
  )
}


export const query = graphql`
  query ($id: String) {
    allDatoCmsContactPage (filter: {id: {eq: $id}}) {
      edges {
        node {
          id
          text
          title
          banerImg {
            alt
            gatsbyImageData
          }
          metadata {
            title
            description
            image {
              url
            }
          }

          tel
          heading
          text2
          socialmediaTitle
          socialLinks {
            id
            service
            url
          }
        }
      }
    }
  }
`


const style = {
  width: '78rem',
  margin: '4rem auto 3rem',

  [mobile]: {
    width: '100%',
    margin: '4rem auto 6rem',
    padding: '0 1.4rem',
  },
    tel: {
      ...center,
      gap: '1.5rem',
      
      ...tit40,
      color: colors.white,

      width: '100%',
      boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.5)',

      padding: '2rem 5rem',

      position: 'relative',
        [mobile]: {
          ...txt24,
          color: colors.white,
        },
        '&::before': {
          content: "''",
          width: '100%',
          height: '100%',

          backgroundColor: colors.pcolor,

          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
        },

        span: {
          position: 'relative',
          zIndex: 1,
        },

        svg: {
          width: '4rem',
          height: '4rem',
          position: 'relative',
        }
    },

    h2: {
      ...tit40,
      textAlign: 'center',
      color: colors.pcolor,


      margin: '2.9rem 0 2rem'
    },
    
    h3: {
      textAlign: 'center',
      color: colors.pcolor,
      fontSize: '2.8rem',

      margin: '3rem 0 2.1rem',
    },

    txt: {
      ...txt18,
      textAlign: 'center',
    },
}

const formStyle = {
  width: '68rem ',
  padding: '2rem 5rem',
  margin: '3rem auto 0',
  boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.5)',

  [mobile]: {
    width: '100%',
    padding: '4rem 2.4rem',
  },
    info: {
      ...txt14,
      color: 'red',
      fontWeight: 700,

      paddingBottom: '1rem',
    },

    row: {
      ...colStart,
      marginBottom: '1rem',
    },
    
    group: {
      ...colStart,

        label: {
          ...verticalCenter,
          ...txt16,
        }
    },

    checkbox: {
      width: '1.4rem',
      height: '1.4rem',
      marginRight: '1rem',
      backgroundColor: colors.grey2,
      border: `.1rem solid ${colors.grey3}`,
        '&:checked': {
          backgroundColor: colors.pcolor,
        },
    },

    labelStyle: {
      ...txt18,
      fontWeight: '700',

      marginBottom: '1rem',
        span:{
          fontWeight: '400',
          color: 'red',
        }
    },

    inputStyle: {
      width: '100%',
      padding: '1.2rem 1rem',
      backgroundColor: colors.grey2,
      border: `.1rem solid ${colors.grey3}`,

        '&:valid, &:invalid, &::placeholder': {
          ...txt16,
        },
        '&:focus': {
          borderColor: colors.pcolor,
        },
        '&::selection': {
          color: colors.pcolor,
        }
    },

    textarea: {
      width: '100%',
      height: '22rem',
      padding: '1.2rem 1rem',
      backgroundColor: colors.grey2,
      border: `.1rem solid ${colors.grey3}`,
      resize: 'none',
      
        '&:valid, &:invalid, &::placeholder': {
          ...txt16,
        },
        '&:focus': {
          borderColor: colors.pcolor,
        },
        '&::selection': {
          color: colors.pcolor,
        }
    },

    btn: {
      ...btn1,

      width: '100%',
      marginTop: '1rem',
      marginBottom: '2.6rem',

      textDecoration: 'underline',
      color: colors.white,
    },
}