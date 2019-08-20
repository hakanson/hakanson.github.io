/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            linkedin
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        {` `}
        Software Architect. Web Platform. JavaScript. Cloud. Information Security. Speaker. 
        <br></br>
        <a href={`https://twitter.com/${social.twitter}`}>
          Twitter
        </a>
        {` | `}
        <a href={`https://www.linkedin.com/in/${social.linkedin}/`}>
          LinkedIn
        </a>
        {` | `}
        <a href={`https://github.com/${social.github}`}>
          GitHub
        </a>
        {` | `}
        <a href={`https://stackoverflow.com/users/22514/kevin-hakanson`}>
          Stack Overflow
        </a>
        
      </p>
    </div>
  )
}

export default Bio
