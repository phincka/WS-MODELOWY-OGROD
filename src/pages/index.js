import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../blocks/sections"

const Fallback = (props) => {
  console.warn(`No component found for: ${props.blocktype}`)
  return false
}


export default function Homepage({data}) {
  const blocks = data.allDatoCmsHomepage.edges[0].node.content

  return (
    <Layout {...data.allDatoCmsHomepage.edges[0].node.metadata}>
      {blocks.map((block, i) => {
        const Component = sections[block.__typename.slice(7)] || Fallback
        return <Component key={block.id} index={i} {...block} />
      })}
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allDatoCmsHomepage {
      edges {
        node {
          id
          metadata {
            title
            description
            image {
              url
            }
          }
          content {
            __typename
            ... on DatoCmsHomepageHero {
              id
              heading
              text
              image {
                gatsbyImageData
                alt
              }
              buttons{
                title
                url
              }
            }

            ... on DatoCmsHomepageAbout {
              id
              heading
              text
              text2
              image {
                gatsbyImageData
                alt
              }
            }

            ... on DatoCmsGallerySectionBlock {
              id
              heading
              text
              images {
                gatsbyImageData
                alt
              }
              buttons{
                title
                url
              }
            }

            ... on DatoCmsNumbersLoadingBlock {
              id
              heading
              text
              rep
            }

            ... on DatoCmsPartnersSectionBlock {
              id
              heading
              text
              images {
                gatsbyImageData
                alt,
              }
            }

            ... on DatoCmsServicesBlock {
              id
              heading
              text
              image {
                gatsbyImageData
                alt
              }
              buttons{
                title
                url
              }
            }

            ... on DatoCmsCategriesSectionBlock {
              id
              heading
              text
              categories {
                id
                slug
                title
                thumbnail {
                  gatsbyImageData
                  alt
                }
              }
            }
          }
        }
      }
    }
  }
`