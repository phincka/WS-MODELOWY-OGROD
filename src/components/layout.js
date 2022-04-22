import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Head from "./head"
import '../style/layout.css'


export default function Layout(props) {
  const [preload, setPreload] = useState('preload');

  useEffect(() => {
    setPreload('');
  }, []);


  const data = useStaticQuery(graphql`
    query pageMetaQuery {
      datoCmsSite {
        faviconMetaTags {
          tags
        }

        globalSeo {
          siteName
          fallbackSeo {
            title
            description
          }
          titleSuffix
        }
      }
    }
  `)
  const globalSeo = data.datoCmsSite.globalSeo

  let title = ''
  props.title ? title = props.title : title = globalSeo.fallbackSeo.title

  let description = ''
  props.description ? description = props.description : description = globalSeo.fallbackSeo.description

  const headMeta = {
    favicon: data.datoCmsSite.faviconMetaTags.tags[2].attributes.href,
    siteName: globalSeo.siteName,
    title: title,
    description: description,
    image: props.image,
    titleSuffix: globalSeo.titleSuffix,
    fallbackSeo: {
      title: globalSeo.fallbackSeo.title,
      description: globalSeo.fallbackSeo.description,
    }
  }

  return (
    <div className={`layout ${preload}`}>
      <Head {...headMeta} />
      <Header />

      <main className="main">
        {props.children}
      </main>
      
      <Footer />
    </div>
  )
}
