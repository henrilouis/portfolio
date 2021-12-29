import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './project.scss'

const Project = ({ data }) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image)

  return (
    <>
      <header>
        <div className='back'>
          <Link to='/'>
            <span className='font-weight-bold'>HENRI</span>{' '}
            <span className='font-weight-light'>SCHRÖTER</span>
          </Link>
        </div>
      </header>
      <main>
        <article className='project'>
          <header className='wrap'>
            <title>{data.mdx.frontmatter.title} - Henri Schröter</title>
            <h1>{data.mdx.frontmatter.title}</h1>
            <p>{data.mdx.frontmatter.summary}</p>
          </header>
          <figure className='hero'>
            <GatsbyImage
              image={heroImage}
              alt={data.mdx.frontmatter.hero_image_alt}
            />
          </figure>
          <section className='wrap'>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </section>
        </article>
      </main>
    </>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        summary
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      body
    }
  }
`

export default Project
