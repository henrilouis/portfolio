import React from 'react'
import { Link } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import './index.scss'

const Home = ({ data }) => {
  return (
    <main className="home">
      <PageHeader />
      <section>
        <header className="hero">
          <h1>
            <span className="font-weight-bold font-type-sans">I'm HENRI</span>{' '}
            <span className="font-weight-light font-type-sans">SCHRÖTER,</span>
            <br />
            <span className="font-type-serif font-weight-light">
              a product designer
            </span>
          </h1>
          <p>
            I work with multidisciplinary teams to create simple and usable
            products that meet user and business goals.
          </p>
          <p>
            Currently I'm employed at Philips Design where I lead a team
            creating digital products to make the life of healthcare providers a
            little bit easier.
          </p>
        </header>
      </section>

      <section id="projects">
        {data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Summary</p>
            <button>
              <Link to={`${node.slug}`}>Read more</Link>
            </button>
          </article>
        ))}
      </section>

      {/* <Link to="/404">404 page</Link> */}
      {/* <StaticImage src="https://picsum.photos/1600/1000" alt="image" /> */}
    </main>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
        }
        id
        slug
      }
    }
  }
`

export default Home
