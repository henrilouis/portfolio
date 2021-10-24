import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Project = ({ data }) => {

  const heroImage = getImage(data.mdx.frontmatter.hero_image)

  return (
    <main>
      <title>{data.mdx.frontmatter.title} - Henri Schröter</title>
      <Link to="/">Back</Link>
      <GatsbyImage 
        image={heroImage}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </main>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default Project