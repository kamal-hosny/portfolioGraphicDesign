// CSS Style
import "./footer.css";
// import React
import React from "react";
import Social from "../Social";

// import external library
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';


export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <ul className="links">
          <li><Link
            to="Home"
            spy={true}
            smooth={true}
            offset={-1000}
            duration={500} >Home</Link></li>
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
        </ul>
        <Social />
        <p>© 2024 IXON, All rights reserved.</p>
      </div>
    </div>

  )
}
