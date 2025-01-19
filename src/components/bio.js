/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`query BioQuery {
  avatar: file(absolutePath: {regex: "/profile-pic.jpg/"}) {
    childImageSharp {
      gatsbyImageData(width: 50, height: 50, layout: FIXED)
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
      <GatsbyImage
        image={data.avatar.childImageSharp.gatsbyImageData}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }} />
      <p>
        {` `}
        Multi-Cloud Certified Architect | DevSecOps | AppSec | Web Platform | Speaker | Learner | Builder
        <br></br>
        <a href={`https://www.linkedin.com/in/${social.linkedin}/`}>
          LinkedIn
        </a>
        {` | `}
        <a href={`https://bsky.app/profile/hakanson.bsky.social`}>
          Bluesky
        </a>
        {` | `}
        <a href={`https://x.com/${social.twitter}`}>
          X
        </a>
        {` | `}
        <a href={`https://github.com/${social.github}`}>
          GitHub
        </a>
        {` | `}
        <a href={`https://stackoverflow.com/users/22514/kevin-hakanson`}>
          Stack Overflow
        </a>
        {` | `}
        <a href={`https://www.credly.com/users/kevin-hakanson`}>
          Credly
        </a>
        
      </p>
    </div>
  );
}

export default Bio
