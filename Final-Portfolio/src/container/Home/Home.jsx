import React from 'react'
import { BsArrowRightShort, BsArrowDownShort } from 'react-icons/bs';

import videoBg from '../../assets/bg2-vid.mp4'
import './Home.scss'

const Home = () => {

  return (
    <div className="home" id="home">
      <video className="vid" src={videoBg} autoPlay loop muted/>
      <div className="intro">
        <p className="text">Hello, I'm <span className="intro-name">John Njoroge</span>.</p>
        <p className="text">I'm a full-stack developer.</p>
        <a
          href="#about"
          className="intro-btn"
        >
          View my work
          <BsArrowRightShort className="arrow-icon"/>
        </a>
      </div>
    </div>
  )
}

export default Home