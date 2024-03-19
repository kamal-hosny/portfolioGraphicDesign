// CSS Style
import "./header.css"
// import React
import React, { createContext, useEffect, useState } from 'react'
// import Component
import Nav from './Nav'
import Icon from './Icon'
import Menu from './Menu'
import DarkMode from './DarkMode'
import Nav2 from "./Nav2"
// import context
import { MenuContext } from "../../context/MenuContext"

export default function Header() {
  const [nav ,setNav] = useState(false)

  const handleNav = (check) => {
    setNav(!check)
  }


  useEffect(() => {
    if(nav === true ){
      document.body.classList.add("open");
    }else{
      document.body.classList.remove("open");
    }
  }, [nav])



  return (
    <MenuContext.Provider value={{nav ,setNav}}>
    <div className='header'>
      <span className="rectangle"></span>
        <div className="container">
            <Icon />
            <Nav />
            <Nav2 />
            <div className={nav === true ? "menu-darkmode changing" : "menu-darkmode"}>
                <Menu action={handleNav} />
                <DarkMode />
            </div>
        </div>
    </div>
    </MenuContext.Provider>
  )
}
