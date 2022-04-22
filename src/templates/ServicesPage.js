import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageHeader from "../components/pageHeader"
import SingleService from "../components/singleService"
import { mobile, grid } from "../style"


export default function ServicesPage({data}) {
  data = data.allDatoCmsServicesPage.edges[0].node

  const pageHeader = {
    banerImg: data.banerImg,
    title: data.title,
    text: data.text,
  }

  return (
    <Layout {...data.metadata}>
      <PageHeader data={pageHeader} />

      <section css={style}>
        {data.content.map((single) => {
          return <SingleService key={single.id} {...single} />
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    allDatoCmsServicesPage (filter: {id: {eq: $id}}){
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
          content {
            id
            title
            url
            image {
              alt
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`


const style = {
  ...grid(2, '3.2rem 20rem'),
  width: '122rem',
  margin: '6rem auto 8.4rem',

  [mobile]: {
    width: '100%',
    margin: '4rem auto 6rem',
    padding: '0 1.4rem',

    gridTemplateColumns: '1fr',
  }
}