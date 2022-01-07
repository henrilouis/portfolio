import React from 'react'
// import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import SiteTitle from '../components/SiteTitle'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import './index.scss'

const Home = ({ data }) => {
  return (
    <>
      <main>
        <SiteTitle />
        <section className='wrap'>
          <header className='intro'>
            <h1>
              <span className='font-weight-bold font-type-sans'>I'm HENRI</span>{' '}
              <span className='font-weight-light font-type-sans'>
                SCHRÖTER,
              </span>
              <br />
              <span className='font-type-serif font-weight-light'>
                product designer and developer
              </span>
            </h1>
            <p>
              Creating awesome products makes me happy. I work with
              multidisciplinary teams to create simple and usable products that
              meet user and business goals.
            </p>
            <p>
              Currently I'm employed at Philips Experience Design where I lead a
              team creating digital products and services to make the life of
              healthcare providers a little easier.
            </p>
          </header>
        </section>
        <section id='projects'>
          {data.allMdx.nodes.map(node => (
            <ProjectCard key={node.id} node={node} />
          ))}
        </section>

        {/* <StaticImage src="https://picsum.photos/1600/1000" alt="image" /> */}
      </main>
      <Footer />
    </>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: ASC }) {
      nodes {
        frontmatter {
          title
          summary
          thumbnail {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1.25)
            }
          }
        }
        id
        slug
      }
    }
  }
`

export default Home
