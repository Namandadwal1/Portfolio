import React from 'react'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Prjects from '../components/Prjects'
import Contact from '../components/Contact'
import About from '../components/About'
import Footer from '../components/Footer'

function Home() {
 
  return (
    <div className=''>
      
      <Hero/>
      <Skills/>
      <Prjects/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
