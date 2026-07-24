import React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hashtags from "../components/hashtags"
import Bio from "../components/bio"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

// TODO: look at https://dev.to/tags tag names and colors

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
    <Layout location="/tags" title={title}>
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
          </ul>
        </nav>
        <div>
        <h1>All Tags</h1>
        <ul>
            {group.map(tag => (
            <li key={tag.fieldValue}>
                <Hashtags tags={[tag.fieldValue]} />
                &nbsp;× {tag.totalCount}
            </li>
            ))}
        </ul>
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

export default TagsPage

export const Head = ({ data, location }) => (
  <Seo
    title="All Tags"
    pathname={location.pathname}
    siteMetadata={data.site.siteMetadata}
  />
)

export const pageQuery = graphql`
  query {
    site {
      ...SeoSiteMetadata
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: {frontmatter: {tags: SELECT}}) {
        fieldValue
        totalCount
      }
    }
  }
`