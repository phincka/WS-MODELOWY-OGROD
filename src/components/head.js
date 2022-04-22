import * as React from 'react'
import { Helmet } from 'react-helmet'

export default function Head ({
  favicon,
  siteName,
  title,
  description,
  image,
  titleSuffix,
  fallbackSeo
}) {
  return (
    <Helmet
      htmlAttributes={{
        lang: 'pl',
      }}>
      
      <title>{title}{titleSuffix}</title>

      <link rel="icon" type="image/png" href={favicon} />

      <meta charSet='utf-8' />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#7D597F" />
      <meta property="og:url" content="https://modelowyogrod.pl" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fallbackSeo.title} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pl" /> 
    </Helmet>
  )
}