import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hashtags from "../components/hashtags"
import { rhythm, scale } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    let year = "9999"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All Posts" />
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
              &nbsp;
            </li>
            <li>
            <Link to="/presentations">Presentations →</Link>
            </li>
          </ul>
        </nav>
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const tags = node.frontmatter.tags || []
          let yearheader = false
          const len = node.frontmatter.date.length
          if (node.frontmatter.date.substring(len-4, len) !== year) {
            year = node.frontmatter.date.substring(len-4, len)
            yearheader = true
          }
          return (
            <article key={node.fields.slug}>
              {yearheader && <h2>{year}</h2>}

              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <p
                  style={{
                    ...scale(-1 / 5),
                    display: `block`,
                  }}
                >
                  {node.frontmatter.date}
                  <Hashtags tags={tags} />
                </p>

              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: /* node.frontmatter.description || */ node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
         />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fields: {sourceName: {eq: "blog"}}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 240)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
