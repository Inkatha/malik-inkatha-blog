/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {Github, Twitter} from '@styled-icons/entypo-social'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
    
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "png", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a target="_blank" href={`https://twitter.com/${social?.twitter || ``}`} rel="noreferrer">
            <Twitter size={25} />
          </a>
          <a target="_blank" href={`https://github.com/${social?.github || ``}`} rel="noreferrer">
            <Github size={25} />
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
