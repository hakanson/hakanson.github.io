/**
 * Seo component for use inside a page's `Head` export.
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 *
 * The Head API cannot use `useStaticQuery`, so site metadata has to arrive via
 * the page's own GraphQL query. Spread the `SeoSiteMetadata` fragment below
 * into each page query and hand `data.site.siteMetadata` to this component.
 */

import * as React from "react"
import { graphql } from "gatsby"

const Seo = ({ title, description, canonical, pathname, siteMetadata }) => {
  const metaDescription = description || siteMetadata.description
  const twitter = siteMetadata.social.twitter

  // Replaces gatsby-plugin-react-helmet-canonical-urls: default the canonical
  // URL to this page's own absolute URL, but let a page override it (used by
  // posts that were originally published elsewhere).
  const siteUrl = siteMetadata.siteUrl.replace(/\/$/, ``)
  const canonicalUrl = canonical || (pathname ? `${siteUrl}${pathname}` : null)

  return (
    <>
      <html lang="en" />
      <title>{`${title} | ${siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={`@${twitter}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </>
  )
}

export default Seo

export const query = graphql`
  fragment SeoSiteMetadata on Site {
    siteMetadata {
      title
      description
      siteUrl
      social {
        twitter
      }
    }
  }
`
