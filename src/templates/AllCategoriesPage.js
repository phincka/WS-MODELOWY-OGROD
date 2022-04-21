import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageHeader from "../components/pageHeader"
import CategriesSection from "../components/CategriesSection"

export default function AllCategoriesPage({ data }) {
  data = data.allDatoCmsAllCategoriesPage.edges[0].node

  const pageHeader = {
    banerImg: data.banerImg,
    title: data.title,
    text: data.text,
  }


  return (
    <Layout {...data.metadata}>
      <PageHeader data={pageHeader} />
      <CategriesSection hideTitle={true} />
    </Layout>
  )
}


export const query = graphql`
  query ($id: String) {
    allDatoCmsAllCategoriesPage (filter: {id: {eq: $id}}){
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
        }
      }
    }
  }
`