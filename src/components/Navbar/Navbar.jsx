import React, { useState } from 'react'

import './Navbar.scss'
import logo from '../../assets/jlogos2.png'
import { navLinks } from '../../constants'

import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'

import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [isActive, setIsActive] = useState("")

  return (
    <nav className="nav-content">
      <div className="logo-container">
        <img src={logo} alt="logo"/>
      </div>
      <ul className="nav-container">
        {navLinks.map((link) => (
          <li className="nav-link" key={link.name}>
            <div />
            {link.name === "home"  ?  
              (<Link to="/">{link.title}</Link>) : 
              ( <a href={`#${link.name}`}>{link.name}</a>
            )}
          </li>
        ))}
      </ul>

      <div className="nav-menu">

        <img
         src={toggle ? close : menu}
          alt="menu"
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
                {link.name === "home"  ?  
                  (<Link to="/">{link.title}</Link>) : 
                  ( <a href={`#${link.name}`}>{link.name}</a>
                )}
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