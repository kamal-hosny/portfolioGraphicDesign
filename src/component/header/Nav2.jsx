import React, {useContext} from 'react'

// import context
import { MenuContext } from "../../context/MenuContext"
// import external library
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default function Nav2() {
  const { nav, setNav } = useContext(MenuContext)

  const close = () =>{
    setNav(false)
  }
  return (
    <div className={nav === false ? "nav-2 " : "nav-2 nav-2-out" }>
    <ul>
    <li ><Link 
          to="Home"
          spy={true}
          smooth={true}
          offset={-1000}
          duration={500} onClick={close}>Home</Link></li>
        <li><Link 
          to="ourBestWork"
          spy={true}
          smooth={true}
          offset={0}
          duration={500} onClick={close}>Our Best Work</Link></li>
        <li><Link 
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={500} onClick={close}>Skills</Link></li>
        <li><Link 
          to="customerReviews"
          spy={true}
          smooth={true}
          offset={0}
          duration={500} onClick={close}>Reviews</Link></li>
    </ul>
</div>
  )
}
