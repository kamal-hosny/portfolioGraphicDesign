// CSS Style
import './App.css'
// import React
import React ,{ useState } from 'react'
// import Component
import Header from './component/header/Header'
import LandingPage from './component/landing page/LandingPage'
import Footer from './component/footer/Footer'
import OurBestWork from './component/Our best work/OurBestWork'
import Skills from './component/skills/Skills'
import CustomerReviews from './component/customer reviews/CustomerReviews'
import WhatsApp from './component/WhatsApp'

function App() {

  return (
    <>
      <Header/>
      <LandingPage/>
      <OurBestWork/>
      <Skills/>
      <CustomerReviews/>
      <Footer/>
      <WhatsApp/>
    </>
  )
}

export default App
