import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const PageHeader = props => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header>
      <title>{data.site.siteMetadata.title}</title>
    </header>
  )
}

export default PageHeader
