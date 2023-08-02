//import React, { useState, useEffect } from 'react';

import './App.scss'
import { About, Footer, Home, Skills, Work } from './container';
import { Navbar } from './components';

function App() {
  // const [ showNavbar, setShowNavbar] = useState(true)


  // useEffect(() => {
  //   const handleScroll = () => {
  //     const aboutSection = document.getElementById('about');
  //     const workSection = document.getElementById('work');
  //     const skillsSection = document.getElementById('skills');
  //     const footerSection = document.getElementById('footer');

  //     const scrollPosition = window.scrollY;
  //     const windowHeight = window.innerHeight;

  //     const showNavbarAbout = aboutSection && scrollPosition >= aboutSection.offsetTop - windowHeight;
  //     const showNavbarWork = workSection && scrollPosition >= workSection.offsetTop - windowHeight;
  //     const showNavbarSkills = skillsSection && scrollPosition >= skillsSection.offsetTop - windowHeight;
  //     const showNavbarFooter = footerSection && scrollPosition >= footerSection.offsetTop - windowHeight;

  //     console.log('scrollPosition:', scrollPosition);
  //     console.log('aboutSection.offsetTop:', aboutSection.offsetTop);
  //     console.log('windowHeight:', windowHeight);

  //     setShowNavbar(showNavbarAbout || showNavbarWork || showNavbarSkills || showNavbarFooter);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   handleScroll();
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div className="app">
      {/* {showNavbar && <Navbar />} */}


      
      <div id="home">
        <Home />
      </div>

      <Navbar />

      <div id="about">
        <About />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="footer">
        <Footer />
      </div>

      {/* <Home id="home"/>
      <About id="about"/>
      <Work id="work"/>
      <Skills id="skills"/>
      <Footer id="footer"/> */}
    </div>
  )
}

export default App
