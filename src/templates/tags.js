import React from "react"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hashtags from "../components/hashtags"
import Bio from "../components/bio"
import { rhythm } from "../utils/typography"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const { title } = data.site.siteMetadata
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged #${tag}`

  return (
    <Layout location={`/tags/${tag}`} title={title}>
    <nav>
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
          marginBottom: 0,
        }}
      >
        <li>
        <Link to="/">← All Posts</Link>
        </li>
        <li>
        <Link to="/tags">All Tags →</Link>
        </li>
      </ul>
    </nav>
    <div>
      <h1>{tagHeader}</h1>
      <ol>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title, date, tags } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
              <br></br>
              {date}
              <Hashtags tags={tags} />
            </li>
          )
        })}
      </ol>
    </div>
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <footer>
        <Bio />
      </footer>


    </Layout>
  )
}

export default Tags

export const Head = ({ pageContext, data, location }) => (
  <Seo
    title={`#${pageContext.tag}`}
    pathname={location.pathname}
    siteMetadata={data.site.siteMetadata}
  />
)

export const pageQuery = graphql`
  query($tag: String) {
    site {
        ...SeoSiteMetadata
        siteMetadata {
          title
        }
      }
    allMarkdownRemark(
      limit: 2000
      sort: {frontmatter: {date: DESC}}
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            tags
          }
        }
      }
    }
  }
`