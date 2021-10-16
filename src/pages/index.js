import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './index.scss'

const Home = () => {

  return(
    <main>
      <title>Portfolio - Henri Schröter</title>
      <h1>Welcome</h1>
      <Link to ='/404'>404 page</Link>
      <StaticImage 
        src='https://picsum.photos/1600/1000'
        alt='image'
      />
      
    </main>
  )
}

export default Home;