import React from 'react'
import { BsArrowRightShort, BsArrowDownShort } from 'react-icons/bs';

import videoBg from '../../assets/bg2-vid.mp4'
import './Home.scss'
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="home">
      <video className="vid" src={videoBg} autoPlay loop muted/>
      <div className="intro">
        <p className="text">Hello, I'm <span className="intro-name">John Njoroge</span>.</p>
        <p className="text">I'm a full-stack/Blockchain developer.</p>
        
        <Link 
          to="/view"
          className="intro-btn"
        >
          View my work
          <BsArrowRightShort className="arrow-icon"/>
        </Link>

      </div>
    </div>
  )
}

export default Home