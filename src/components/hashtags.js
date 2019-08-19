import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

class Hashtags extends React.Component {
  render() {
    const { tags } = this.props

    return (
        <span>
          {tags.map((tag) => {
            return (
                <Link
                style={{
                  boxShadow: `inset 0 -1px 0 rgba(27,31,35,.12)`,
                  borderRadius: `.15em 4px`,
                  padding: `2px`,
                  textDecoration: `none`,
                  fontWeight: `600`,
                  color: `inherit`,
                  marginLeft: rhythm(1/2),
                  background: `lightgrey`,
                }}
                to={`/tags/${tag}`}
                key={tag}
              >
                #{tag}
              </Link>
            )
          })}
        </span>
      )
  }
}

export default Hashtags
