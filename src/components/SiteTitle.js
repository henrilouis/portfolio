import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const SiteTitle = props => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return <title>{data.site.siteMetadata.title}</title>
}

export default SiteTitle
