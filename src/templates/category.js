import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageHeader from "../components/pageHeader"
import BigProduct from "../components/bigProduct"
import { mobile } from "../style"
import CategriesSection from "../components/CategriesSection"

export default function Product(props) {
  const products = props.data.allDatoCmsProduct.edges

  return (
    <Layout {...props.pageContext.metadata}>
      <PageHeader data={props.pageContext} />

      <section css={style}>
        {products.map((single) => {
          return <BigProduct key={single.node.id} data={single.node} categorySlug={props.pageContext.slug} />
        })}
      </section>

      <CategriesSection />
    </Layout>
  )
}


export const query = graphql`
  query ($slug: String) {
    allDatoCmsProduct(filter: {urlcategory: {slug: {eq: $slug}}}) {
      edges {
        node {
          id
          slug
          productType
          title
          text
          thumbnail{
            alt
            gatsbyImageData
            url 
          }
        }
      }
    }
  }
`

const grid = (col, gap) => {
  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${col}, 1fr)`,
    gap: gap,
  }
}

const style = {
  ...grid(3, '6.9rem 10rem'),

  width: '110rem',
  margin: '5rem auto 3rem',

  [mobile]: {
    width: '100%',
    margin: '4rem auto 6rem',
    padding: '0 1.4rem',

    gridTemplateColumns: '1fr',
    gap: '3.2rem',
  }
}