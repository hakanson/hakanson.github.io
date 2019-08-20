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
              <span>
                {` `}
                <Link
                style={{
                  boxShadow: `inset 0 -1px 0 rgba(27,31,35,.12)`,
                  borderRadius: `2px`,
                  padding: `.15em 4px`,
                  textDecoration: `none`,
                  fontWeight: `600`,
                  fontSize: `12px`,
                  height: `20px`,
                  lineHeight: `15px`,
                  color: `inherit`,
                  marginLeft: rhythm(1/4),
                  background: `#ededed`,
                }}
                to={`/tags/${tag}`}
                key={tag}
              >
                #{tag}
              </Link>
              </span>
            )
          })}
        </span>
      )
  }
}

export default Hashtags
