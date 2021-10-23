import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import './index.scss'

const Home = ({ data }) => {
  return (
    <main>
      <PageHeader />
      <h1>Welcome</h1>
      <Link to="/404">404 page</Link>
      <StaticImage src="https://picsum.photos/1600/1000" alt="image" />

      <ul>
        {data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))}
      </ul>
    </main>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default Home
