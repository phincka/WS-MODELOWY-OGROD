import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageHeader from "../components/pageHeader"
import { colors, tit40, txt18, txt28, txt24, mobile } from "../style";

const parse = require('html-react-parser');


export default function PrivacyPage({ data }) {
  data = data.allDatoCmsPrivacyPage.edges[0].node

  const pageHeader = {
    banerImg: data.banerImg,
    title: data.title,
    text: data.text,
  }

  return (
    <Layout>
      <PageHeader data={pageHeader} />
      
      <article css={style}>
        {parse(data.editor)}
      </article>
    </Layout>
  )
}


export const query = graphql`
  query ($id: String) {
    allDatoCmsPrivacyPage (filter: {id: {eq: $id}}){
      edges {
        node {
          id
          text
          title
          banerImg {
            alt
            gatsbyImageData
          }
          editor
          metadata {
            title
            description
            image {
              url
            }
          }
        }
      }
    }
  }
`

const style ={
  width: '118rem',
  margin: '3rem auto 6rem',

  [mobile]: {
    width: '100%',
    padding: '4rem 2.4rem',
    margin: '2rem auto 1rem',
  },

    h3: {
      ...tit40,
      color: colors.pcolor,
    },
    h4: {
      ...txt28,
      color: colors.pcolor,
    },
    h5: {
      ...txt24,
      color: colors.pcolor,
      fontWeight: 400,
    },

    p:{
      ...txt18,
      margin: '2rem 0',
    },
    ul:{
      marginLeft: '4rem',
      marginBottom: '1rem',
    },
    li: {
      ...txt18,
    },
    em: {
      fontStyle: 'italic',
    },
}