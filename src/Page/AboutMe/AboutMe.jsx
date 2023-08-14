import React from 'react'
import './AboutMe.scss'
import Navbar from '../../components/Navbar/Navbar'
import { About, Contact, Skills, Work } from '../../container'
import { AppWrap } from '../../wrapper'

const AboutMe = () => {
  return (
    <div className="view">
      <Navbar />
      <About />
      <Work />
      <Skills />
      <Contact />
    </div>
  )
}

export default AboutMe