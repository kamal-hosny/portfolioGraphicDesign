// import React
import React from 'react'
// import Component
import DarkMode from './DarkMode'
// import external library
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
export default function Nav() {
  return (
    <div className='nav'>
      <ul>
        <div>
        <li><Link 
          to="Home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}>Home</Link></li>
        <li><Link 
          to="ourBestWork"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}>Our Best Work</Link></li>
        <li><Link 
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}>Skills</Link></li>
        <li><Link 
          to="customerReviews"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}>Reviews</Link></li>
          </div>
        <DarkMode />
      </ul>
    </div>
  )
}

