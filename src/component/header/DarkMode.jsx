// import React
import React, { useEffect, useState } from 'react'

//  import Icons MUI
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export default function DarkMode() {
  const [darkTheme, setDarkTheme] = useState(localStorage.getItem("currentDarkMode") ?? "light")

  useEffect(() => {
    if(darkTheme === "light"){
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }else{
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [darkTheme])

  return (
    
    <button className='darkMode' onClick={()=> {
      // set value to localStorage 
      localStorage.setItem("currentDarkMode" , darkTheme === "dark" ? "light" : "dark")
      // get value from localStorage 
      setDarkTheme(localStorage.getItem("currentDarkMode"))
    }}>
      {darkTheme === "dark" ? <WbSunnyOutlinedIcon/> : <DarkModeOutlinedIcon/>}
    </button>
  )
}
