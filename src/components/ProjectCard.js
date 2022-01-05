import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './ProjectCard.scss'

const ProjectCard = props => {
  return (
    <Link to={`${props.node.slug}`} className='component-link'>
      <article className='project-card'>
        <GatsbyImage
          image={getImage(props.node.frontmatter.thumbnail)}
          alt={props.node.frontmatter.title}
        />
        <h2>{props.node.frontmatter.title}</h2>
        <p>{props.node.frontmatter.summary}</p>
        <Link to={`${props.node.slug}`}>
          <button>Read more</button>
        </Link>
      </article>
    </Link>
  )
}

export default ProjectCard
