import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer id='footer'>
      <section className='wrap'>
        <div className='logo'>
          © <span className='font-weight-bold font-type-sans'>HENRI</span>{' '}
          <span className='font-weight-light font-type-sans'>SCHRÖTER</span>
        </div>

        <div className='social'>
          <a href='https://twitter.com/henrilouis'>
            <FontAwesomeIcon icon={faTwitter} size='lg' />
          </a>
          <a href='https://www.linkedin.com/in/henri-schr%C3%B6ter-41526619/'>
            <FontAwesomeIcon icon={faLinkedin} size='lg' />
          </a>
          <a href='https://github.com/henrilouis'>
            <FontAwesomeIcon icon={faGithub} size='lg' />
          </a>
        </div>
        <div className='connect'>
          <a href='mailto:info@henrilouis.com'>
            <button>
              <FontAwesomeIcon icon={faEnvelope} /> Get in touch
            </button>
          </a>
        </div>
        <div className='fork'>
          <a href='https://github.com/henrilouis/portfolio'>
            <FontAwesomeIcon icon={faCodeBranch} /> Fork website on GitHub
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer
