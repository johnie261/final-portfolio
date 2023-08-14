import React from 'react'
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/njorogejohnie"> 
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/muturijohn/">
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a href="https://github.com/johnie261">
          <BsGithub />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia