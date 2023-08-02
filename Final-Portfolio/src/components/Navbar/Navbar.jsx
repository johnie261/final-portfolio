import React, { useState } from 'react'

import './Navbar.scss'
import logo from '../../assets/jlogos2.png'
import { navLinks } from '../../constants'

import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="nav-content">
      <div className="logo-container">
        <img src={logo} alt="logo"/>
      </div>
      <ul className="nav-container">
        {navLinks.map((link) => (
          <li className="nav-link" key={link.name}>
            <div />
            <a href={`#${link.name}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className="nav-menu">
        <FaBars 
          className="toggle-btn" 
          onClick={() => setToggle((prev) => !prev)}
        />

        {toggle && (
          <div className={`toggle-menu ${toggle ? 'open' : ''}`}>
            <ul className="nav-toggle">
              {navLinks.map((link) => (
              <li 
                className="nav-link"
                key={link.name}
                onClick= {() => {
                    setToggle(false)}
                  }
              >
                <a href={`#${link.name}`}>{link.title}</a>
              </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar