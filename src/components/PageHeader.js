import React from 'react'
import { Link } from 'gatsby'
import './PageHeader.scss'

const PageHeader = () => {
  return (
    <header>
      <div className='back'>
        <Link to='/'>
          <span className='font-weight-bold'>HENRI</span>{' '}
          <span className='font-weight-light'>SCHRÖTER</span>
        </Link>
      </div>
    </header>
  )
}

export default PageHeader
