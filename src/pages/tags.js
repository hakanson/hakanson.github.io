import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
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
        <SEO title="All Tags" />
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
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
                </Link>
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

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`