const dato = require("datocms-structured-text-to-html-string")

// exports.createSchemaCustomization = async ({ actions }) => {
//   actions.createFieldExtension({
//     name: "blocktype",
//     extend(options) {
//       return {
//         resolve(source) {
//           return source.internal.type
//             .replace("DatoCms", "")
//             .replace(/list$/, "List")
//         },
//       }
//     },
//   })

//   actions.createFieldExtension({
//     name: "metalinks",
//     extend(options) {
//       return {
//         async resolve(source, args, context, info) {
//           const type = info.schema.getType(source.internal.type)
//           const resolver = type.getFields().metalinks?.resolve
//           const result = await resolver(source, args, context, {
//             fieldName: "metalinks",
//           })
//           return result
//         },
//       }
//     },
//   })

//   actions.createFieldExtension({
//     name: "ctalink",
//     extend(options) {
//       return {
//         async resolve(source, args, context, info) {
//           const type = info.schema.getType(source.internal.type)
//           const resolver = type.getFields().originalCta?.resolve
//           const result = await resolver(source, args, context, info)
//           return result
//         },
//       }
//     },
//   })

//   // support DatoCMS logos as images
//   actions.createFieldExtension({
//     name: "recursiveImage",
//     extend(options) {
//       return {
//         async resolve(source, args, context, info) {
//           return source
//         },
//       }
//     },
//   })

//   actions.createFieldExtension({
//     name: "navItemType",
//     args: {
//       name: {
//         type: "String!",
//         defaultValue: "Link",
//       },
//     },
//     extend(options) {
//       return {
//         resolve() {
//           switch (options.name) {
//             case "Group":
//               return "Group"
//             default:
//               return "Link"
//           }
//         },
//       }
//     },
//   })

//   actions.createFieldExtension({
//     name: "richText",
//     extend(options) {
//       return {
//         resolve(source, args, context, info) {
//           const body = source.entityPayload.attributes.body
//           const html = dato.render(body)
//           return html
//         },
//       }
//     },
//   })

//   // abstract interfaces
//   actions.createTypes(/* GraphQL */ `
//     interface HomepageBlock implements Node {
//       id: ID!
//       blocktype: String
//       ## DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }

//     interface HomepageLink implements Node {
//       id: ID!
//       href: String
//       text: String
//       ## DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }

//     interface MyLink implements Node {
//       id: ID!
//       name: String
//       slug: String
//     }

//     interface HeaderNavItem implements Node {
//       id: ID!
//       navItemType: String
//     }

//     interface NavItem implements Node & HeaderNavItem {
//       id: ID!
//       navItemType: String
//       href: String
//       text: String
//       icon: HomepageImage
//       description: String
//       ## DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }

//     interface NavItemGroup implements Node & HeaderNavItem {
//       id: ID!
//       navItemType: String
//       name: String
//       navItems: [NavItem]
//       ## DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }

//     interface HomepageImage implements Node {
//       id: ID!
//       alt: String
//       gatsbyImageData: JSON
//       url: String
//       ## DatoCMS specific
//       originalId: String
//       entityPayload: JSON
//       image: HomepageImage @recursiveImage
//     }

//     interface HomepageHero implements Node & HomepageBlock {
//       id: ID!
//       blocktype: String
//       heading: String
//       text: String
//       image: HomepageImage
//       # DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }

//     interface HomepageAbout implements Node & HomepageBlock {
//       id: ID!
//       blocktype: String
//       heading: String
//       text: String
//       text2: String
//       image: HomepageImage
//       # DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }

//     interface ServicesBlock implements Node & HomepageBlock {
//       id: ID!
//       blocktype: String
//       heading: String
//       subheading: String
//       text: String
//       image: HomepageImage
      
//       # DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }

//     interface GallerySectionBlock implements Node & HomepageBlock {
//       id: ID!
//       blocktype: String
//       heading: String
//       text: String
//       images: [HomepageImage]
//       # DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }

//     interface PartnersSectionBlock implements Node & HomepageBlock {
//       id: ID!
//       blocktype: String
//       heading: String
//       text: String
//       images: [HomepageImage]
//       # DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }

//     interface NumbersLoadingBlock implements Node & HomepageBlock {
//       id: ID!
//       blocktype: String
//       heading: String
//       text: String
//       rep: JSON
//       image: HomepageImage
//       # DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }
    

//     interface HomepageFeature implements Node & HomepageBlock {
//       id: ID!
//       blocktype: String
//       heading: String
//       kicker: String
//       text: String
//       image: HomepageImage
//       links: [HomepageLink]
//       ## DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }

//     interface HomepageFeatureList implements Node & HomepageBlock {
//       id: ID!
//       blocktype: String
//       kicker: String
//       heading: String
//       text: String
//       content: [HomepageFeature]
//       ## DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }

//     interface HomepageCta implements Node & HomepageBlock {
//       id: ID!
//       blocktype: String
//       kicker: String
//       heading: String
//       text: String
//       image: HomepageImage
//       links: [HomepageLink]
//       ## DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }

//     interface HomepageLogoList implements Node & HomepageBlock {
//       id: ID!
//       blocktype: String
//       text: String
//       logos: [HomepageImage]
//       ## DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }

//     interface HomepageTestimonial implements Node {
//       id: ID!
//       quote: String
//       source: String
//       avatar: HomepageImage
//     }

//     interface HomepageTestimonialList implements Node & HomepageBlock {
//       id: ID!
//       blocktype: String
//       kicker: String
//       heading: String
//       content: [HomepageTestimonial]
//       ## DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }

//     interface HomepageBenefit implements Node {
//       id: ID!
//       heading: String
//       text: String
//       image: HomepageImage
//     }

//     interface HomepageBenefitList implements Node & HomepageBlock {
//       id: ID!
//       blocktype: String
//       heading: String
//       text: String
//       content: [HomepageBenefit]
//       ## DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }

//     interface HomepageStat implements Node {
//       id: ID!
//       value: String
//       label: String
//       heading: String
//     }

//     interface HomepageStatList implements Node & HomepageBlock {
//       id: ID!
//       blocktype: String
//       kicker: String
//       heading: String
//       text: String
//       image: HomepageImage
//       icon: HomepageImage
//       content: [HomepageStat]
//       links: [HomepageLink]
//       ## DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }

//     interface HomepageProduct implements Node {
//       id: ID!
//       heading: String
//       text: String
//       image: HomepageImage
//       links: [HomepageLink]
//     }

//     interface HomepageProductList implements Node & HomepageBlock {
//       id: ID!
//       blocktype: String
//       heading: String
//       kicker: String
//       text: String
//       content: [HomepageProduct]
//       ## DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }

//     interface Homepage implements Node {
//       id: ID!
//       title: String
//       description: String
//       image: HomepageImage
//       content: [HomepageBlock]
//       entityPayload: JSON
//     }

//     interface LayoutHeader implements Node {
//       id: ID!
//       navItems: [HeaderNavItem]
//       cta: HomepageLink
//       entityPayload: JSON
//     }

//     enum SocialService {
//       TWITTER
//       FACEBOOK
//       INSTAGRAM
//       YOUTUBE
//       LINKEDIN
//       GITHUB
//       DISCORD
//       TWITCH
//     }

//     interface SocialLink implements Node {
//       id: ID!
//       url: String!
//       service: SocialService!
//     }

//     interface LayoutFooter implements Node {
//       id: ID!
//       heading: String
//       text: String
//       text2: String
//       tel: String
//       socialLinks: [SocialLink]
//       privacy_url: HomepageLink
//       image: HomepageImage
//       copyright: String

//       originalId: String
//       entityPayload: JSON
//     }

//     interface Layout implements Node {
//       id: ID!
//       header: LayoutHeader
//       footer: LayoutFooter
//     }

//     interface AboutPage implements Node {
//       id: ID!
//       title: String
//       description: String
//       image: HomepageImage
//       content: [HomepageBlock]
//       # DatoCMS
//       entityPayload: JSON
//     }

//     interface BlogPage implements Node {
//       id: ID!
//       title: String
//       description: String
//       image: HomepageImage
//       content: [HomepageBlock]
//       # DatoCMS
//       entityPayload: JSON
//     }

//     interface AboutHero implements Node & HomepageBlock {
//       id: ID!
//       blocktype: String
//       heading: String
//       text: String
//       image: HomepageImage
//       # DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }

//     interface AboutStat implements Node {
//       id: ID!
//       value: String
//       label: String
//     }

//     interface AboutStatList implements Node & HomepageBlock {
//       id: ID!
//       blocktype: String
//       content: [AboutStat]
//       # DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }

//     interface AboutProfile implements Node {
//       id: ID!
//       image: HomepageImage
//       name: String
//       jobTitle: String
//     }

//     interface AboutLeadership implements Node & HomepageBlock {
//       id: ID!
//       blocktype: String
//       kicker: String
//       heading: String
//       subhead: String
//       content: [AboutProfile]
//       # DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }

//     interface AboutLogoList implements Node & HomepageBlock {
//       id: ID!
//       blocktype: String
//       heading: String
//       links: [HomepageLink]
//       logos: [HomepageImage]
//       # DatoCMS
//       originalId: String
//       entityPayload: JSON
//     }

//     interface Page implements Node {
//       id: ID!
//       slug: String!
//       title: String
//       description: String
//       image: HomepageImage
//       html: String!
//       body: DatoCmsDatoCmsPageBodyStructuredText
//     }
//   `)

//   // CMS-specific types for Homepage
//   actions.createTypes(/* GraphQL */ `
//     type DatoCmsHomepageLink implements Node & HomepageLink {
//       id: ID!
//       originalId: String
//       entityPayload: JSON
//       href: String
//       text: String
//     }

//     type DatoCmsNavItem implements Node & NavItem & HeaderNavItem {
//       id: ID!
//       navItemType: String @navItemType(name: "Link")
//       originalId: String
//       entityPayload: JSON
//       href: String
//       text: String
//       icon: HomepageImage
//       description: String
//     }

//     type DatoCmsNavItemGroup implements Node & NavItemGroup & HeaderNavItem
//       @dontInfer {
//       id: ID!
//       navItemType: String @navItemType(name: "Group")
//       name: String
//       navItems: [NavItem]
//       originalId: String
//       entityPayload: JSON
//     }

//     type DatoCmsAsset implements Node & HomepageImage {
//       id: ID!
//       alt: String
//       gatsbyImageData: JSON
//       originalId: String
//       entityPayload: JSON
//       image: HomepageImage @recursiveImage
//       url: String
//     }

//     type DatoCmsHomepageHero implements Node & HomepageHero & HomepageBlock
//       @dontInfer {
//       id: ID!
//       originalId: String
//       entityPayload: JSON
//       blocktype: String @blocktype
//       heading: String!
//       kicker: String
//       subhead: String
//       image: HomepageImage
//       text: String
//       links: [HomepageLink]
//     }

//     type DatoCmsHomepageAbout implements Node & HomepageAbout & HomepageBlock
//       @dontInfer {
//       id: ID!
//       originalId: String
//       entityPayload: JSON
//       blocktype: String @blocktype
//       heading: String!
//       kicker: String
//       subhead: String
//       image: HomepageImage
//       text: String
//       text2: String
//       links: [HomepageLink]
//     }

//     type DatoCmsGallerySectionBlock implements Node & GallerySectionBlock & HomepageBlock
//       @dontInfer {
//       id: ID!
//       originalId: String
//       entityPayload: JSON
//       blocktype: String @blocktype
//       heading: String!
//       kicker: String
//       images: [HomepageImage]
//       text: String
//     }

//     type DatoCmsPartnersSectionBlock implements Node & PartnersSectionBlock & HomepageBlock
//       @dontInfer {
//       id: ID!
//       originalId: String
//       entityPayload: JSON
//       blocktype: String @blocktype
//       heading: String!
//       kicker: String
//       images: [HomepageImage]
//       text: String
//     }


//     type DatoCmsNumbersLoadingBlock implements Node & NumbersLoadingBlock & HomepageBlock
//       @dontInfer {
//       id: ID!
//       originalId: String
//       entityPayload: JSON
//       rep: JSON
//       blocktype: String @blocktype
//       heading: String!
//       kicker: String
//       subhead: String
//       image: HomepageImage
//       text: String
//       text2: String
//       links: [HomepageLink]
//     }

//     type DatoCmsServicesBlock implements Node & ServicesBlock & HomepageBlock
//       @dontInfer {
//       id: ID!
//       originalId: String
//       entityPayload: JSON
//       blocktype: String @blocktype
//       heading: String!
//       subheading: String!
//       kicker: String
//       image: HomepageImage
//       text: String
//       links: [HomepageLink]
//     }

//     type DatoCmsHomepageFeature implements Node & HomepageBlock & HomepageFeature
//       @dontInfer {
//       originalId: String
//       blocktype: String @blocktype
//       heading: String
//       kicker: String
//       text: String
//       image: HomepageImage
//       links: [HomepageLink]
//       entityPayload: JSON
//     }

//     type DatoCmsHomepageFeatureList implements Node & HomepageBlock & HomepageFeatureList
//       @dontInfer {
//       originalId: String
//       blocktype: String @blocktype
//       kicker: String
//       heading: String
//       text: String
//       content: [HomepageFeature]
//       entityPayload: JSON
//     }

//     type DatoCmsHomepageCta implements Node & HomepageBlock & HomepageCta
//       @dontInfer {
//       originalId: String
//       entityPayload: JSON
//       blocktype: String @blocktype
//       kicker: String
//       heading: String
//       text: String
//       image: HomepageImage
//       links: [HomepageLink]
//     }

//     type DatoCmsHomepageLogoList implements Node & HomepageBlock & HomepageLogoList
//       @dontInfer {
//       originalId: String
//       entityPayload: JSON
//       blocktype: String @blocktype
//       text: String
//       logos: [HomepageImage]
//     }

//     type DatoCmsHomepageTestimonial implements Node & HomepageTestimonial
//       @dontInfer {
//       id: ID!
//       quote: String
//       source: String
//       avatar: HomepageImage
//     }

//     type DatoCmsHomepageTestimonialList implements Node & HomepageBlock & HomepageTestimonialList
//       @dontInfer {
//       id: ID!
//       originalId: String
//       entityPayload: JSON
//       blocktype: String @blocktype
//       kicker: String
//       heading: String
//       content: [HomepageTestimonial]
//     }

//     type DatoCmsHomepageBenefit implements Node & HomepageBenefit @dontInfer {
//       id: ID!
//       heading: String
//       text: String
//       image: HomepageImage
//     }

//     type DatoCmsHomepageBenefitList implements Node & HomepageBlock & HomepageBenefitList
//       @dontInfer {
//       id: ID!
//       originalId: String
//       entityPayload: JSON
//       blocktype: String @blocktype
//       heading: String
//       text: String
//       content: [HomepageBenefit]
//     }

//     type DatoCmsHomepageStat implements Node & HomepageStat @dontInfer {
//       id: ID!
//       value: String
//       label: String
//       heading: String
//     }

//     type DatoCmsHomepageStatList implements Node & HomepageBlock & HomepageStatList
//       @dontInfer {
//       id: ID!
//       originalId: String
//       entityPayload: JSON
//       blocktype: String @blocktype
//       kicker: String
//       heading: String
//       text: String
//       image: HomepageImage
//       icon: HomepageImage
//       content: [HomepageStat]
//       links: [HomepageLink]
//     }

//     type DatoCmsHomepageProduct implements Node & HomepageProduct @dontInfer {
//       id: ID!
//       originalId: String
//       entityPayload: JSON
//       heading: String
//       text: String
//       image: HomepageImage
//       links: [HomepageLink]
//     }

//     type DatoCmsHomepageProductList implements Node & HomepageBlock & HomepageProductList
//       @dontInfer {
//       id: ID!
//       blocktype: String @blocktype
//       originalId: String
//       entityPayload: JSON
//       heading: String
//       kicker: String
//       text: String
//       content: [HomepageProduct]
//     }

//     type DatoCmsHomepage implements Node & Homepage @dontInfer {
//       id: ID!
//       title: String @proxy(from: "entityPayload.attributes.metadata.title")
//       description: String
//         @proxy(from: "entityPayload.attributes.metadata.description")
//       image: HomepageImage
//         @link(by: "originalId", from: "entityPayload.attributes.metadata.image")
//       content: [HomepageBlock]
//       entityPayload: JSON
//     }
//   `)

//   // CMS specific types for About page
//   actions.createTypes(/* GraphQL */ `
//     type DatoCmsAboutHero implements Node & AboutHero & HomepageBlock
//       @dontInfer {
//       id: ID!
//       blocktype: String @blocktype
//       originalId: String
//       entityPayload: JSON
//       heading: String
//       text: String
//       image: HomepageImage
//     }

//     type DatoCmsAboutStat implements Node & AboutStat @dontInfer {
//       id: ID!
//       value: String
//       label: String
//     }

//     type DatoCmsAboutStatList implements Node & AboutStatList & HomepageBlock
//       @dontInfer {
//       id: ID!
//       blocktype: String @blocktype
//       originalId: String
//       entityPayload: JSON
//       content: [AboutStat]
//     }

//     type DatoCmsAboutProfile implements Node & AboutProfile @dontInfer {
//       id: ID!
//       image: HomepageImage
//       name: String
//       jobTitle: String
//     }

//     type DatoCmsAboutLeadership implements Node & AboutLeadership & HomepageBlock
//       @dontInfer {
//       id: ID!
//       blocktype: String @blocktype
//       originalId: String
//       entityPayload: JSON
//       kicker: String
//       heading: String
//       subhead: String
//       content: [AboutProfile]
//     }

//     type DatoCmsAboutLogoList implements Node & AboutLogoList & HomepageBlock
//       @dontInfer {
//       id: ID!
//       blocktype: String @blocktype
//       originalId: String
//       entityPayload: JSON
//       heading: String
//       links: [HomepageLink]
//       logos: [HomepageImage]
//     }

//     type DatoCmsAboutpage implements Node & AboutPage @dontInfer {
//       id: ID!
//       title: String @proxy(from: "entityPayload.attributes.metadata.title")
//       description: String
//         @proxy(from: "entityPayload.attributes.metadata.description")
//       image: HomepageImage
//         @link(by: "originalId", from: "entityPayload.attributes.metadata.image")
//       content: [HomepageBlock]
//       entityPayload: JSON
//       originalId: String
//     }

//     type DatoCmsBlogpage implements Node & BlogPage @dontInfer {
//       id: ID!
//       title: String @proxy(from: "entityPayload.attributes.metadata.title")
//       description: String
//         @proxy(from: "entityPayload.attributes.metadata.description")
//       image: HomepageImage
//         @link(by: "originalId", from: "entityPayload.attributes.metadata.image")
//       content: [HomepageBlock]
//       entityPayload: JSON
//       originalId: String
//     }
//   `)

//   // Layout types
//   actions.createTypes(/* GraphQL */ `
//     type DatoCmsLayoutheader implements Node & LayoutHeader @dontInfer {
//       id: ID!
//       navItems: [HeaderNavItem]
//       originalCta: HomepageLink
//         @link(by: "originalId", from: "entityPayload.attributes.cta")
//       cta: HomepageLink @ctalink
//       originalId: String
//       entityPayload: JSON
//     }

//     type DatoCmsSocialLink implements Node & SocialLink @dontInfer {
//       id: ID!
//       url: String!
//       service: SocialService!
//     }

//     type DatoCmsLayoutfooter implements Node & LayoutFooter @dontInfer {
//       id: ID!
//       heading: String
//       text: String
//       text2: String
//       tel: String
//       image: HomepageImage
//       copyright: String
//       socialLinks: [SocialLink]
//       privacy_url: HomepageLink
//       originalId: String
//       entityPayload: JSON
//     }

//     type DatoCmsLayout implements Node & Layout @dontInfer {
//       id: ID!
//       header: LayoutHeader
//       footer: LayoutFooter
//     }
//   `)

//   actions.createTypes(/* GraphQL */ `
//     type DatoCmsPage implements Node & Page {
//       id: ID!
//       entityPayload: JSON!
//       slug: String!
//       title: String @proxy(from: "entityPayload.attributes.metadata.title")
//       description: String
//         @proxy(from: "entityPayload.attributes.metadata.description")
//       image: HomepageImage
//         @link(by: "originalId", from: "entityPayload.attributes.metadata.image")
//       html: String! @richText
//       body: DatoCmsDatoCmsPageBodyStructuredText
//     }
//   `)
// }



// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   const product = path.resolve(`./src/templates/product.js`)
//   return graphql(
//     `
//       {
//         allDatoCmsProduct{
//           edges {
//             node {
//               slug 
//               title
//               urlcategory {
//                 slug
//                 name
//               }
//             }
//           }
//         }
//       }
//     `
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     // Create blog posts pages.
//     const posts = result.data.allDatoCmsProduct.edges

//     posts.forEach((post, index) => {

//       createPage({
//         path: `${post.node.urlcategory.slug}/${post.node.slug}`,
//         component: product,
//         context: {
//           slug: post.node.slug,
//         },
//       })
//     })

//     return null
//   })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `DatoCmsProduct`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }


const path = require(`path`)



const { createFilePath } = require(`gatsby-source-filesystem`)


module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const ServicesPage = path.resolve(
    `./src/templates/ServicesPage.js`
  )
  const GalleryPage = path.resolve(
    `./src/templates/GalleryPage.js`
  )
  const ContactPage = path.resolve(
    `./src/templates/ContactPage.js`
  )
  const AllCategoriesPage = path.resolve(
    `./src/templates/AllCategoriesPage.js`
  )
  const PrivacyPage = path.resolve(
    `./src/templates/PrivacyPage.js`
  )
  

  const res = await graphql(`
    query {
      allDatoCmsServicesPage {
        edges {
          node {
            id
            slug
          }
        }
      }
      
      allDatoCmsContactPage {
        edges {
          node {
            id
            slug
          }
        }
      }

      allDatoCmsGalleryPage {
        edges {
          node {
            id
            slug
          }
        }
      }

      allDatoCmsAllCategoriesPage {
        edges {
          node {
            id
            slug
          }
        }
      }

      allDatoCmsPrivacyPage {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  
  res.data.allDatoCmsServicesPage.edges.forEach(edge => {
    createPage({
      component: ServicesPage,
      path: edge.node.slug,
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
      },
    })
  })

  res.data.allDatoCmsContactPage.edges.forEach(edge => {
    createPage({
      component: ContactPage,
      path: edge.node.slug,
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
      },
    })
  })

  res.data.allDatoCmsGalleryPage.edges.forEach(edge => {
    createPage({
      component: GalleryPage,
      path: edge.node.slug,
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
      },
    })
  })

  res.data.allDatoCmsAllCategoriesPage.edges.forEach(edge => {
    createPage({
      component: AllCategoriesPage,
      path: edge.node.slug,
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
      },
    })
  })

  res.data.allDatoCmsPrivacyPage.edges.forEach(edge => {
    createPage({
      component: PrivacyPage,
      path: edge.node.slug,
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
      },
    })
  })


  const product = graphql(`
    query {
      allDatoCmsProduct{
        edges {
          node {
            slug 
            title

            metadata {
              title
              description
              image {
                url
              }
            }
           
            thumbnail{
              alt
              gatsbyImageData
              url 
            }
            urlcategory {
              slug
              title
              text
              banerImg{
                alt
                gatsbyImageData
                url 
              }
            }

            content {
              title
              text
              text1
              text2
              text3
              text4
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allDatoCmsProduct.edges

    posts.forEach((post, index) => {
      createPage({
        path: `${post.node.urlcategory.slug}/${post.node.slug}`,
        component: path.resolve('./src/templates/product.js'),
        context: {
          slug: post.node.slug,
          title: post.node.title,
          metadata: post.node.metadata,
          text: post.node.text,
          thumbnail: post.node.thumbnail,
          content: post.node.content,
          category: post.node.urlcategory,
        },
      })
    });
  })

  const category = graphql(`
    query {
      allDatoCmsCategory{
        edges {
          node {
            slug 
            title
            text
            banerImg{
              alt
              gatsbyImageData
              url 
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
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allDatoCmsCategory.edges

    posts.forEach((post, index) => {

      createPage({
        path: post.node.slug,
        component: path.resolve('./src/templates/category.js'),
        context: {
          slug: post.node.slug,
          title: post.node.title,
          metadata: post.node.metadata,
          text: post.node.text,
          banerImg: post.node.banerImg,
        },
      })
    });
  })

  return Promise.all([product, category])
}
