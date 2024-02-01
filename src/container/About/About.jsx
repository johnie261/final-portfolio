import React from 'react'
import { motion } from "framer-motion"
import './About.scss'
import { fadeIn, textVariant } from '../../utils/motion'
import { Tilt } from 'react-tilt';
import { abouts } from '../../constants/about';
import { AppWrap } from '../../wrapper';

const About = () => {
  return (
    <div className="content" id="about"> 
      <motion.div 
        variants={textVariant()}
        className="text"
      >
          <h2 className="header-text">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="body-text"
      > 
       <div className='txtx'>
          I possess strong skills as a software developer,
           proficient in <span>JavaScript</span>, <span>Ruby</span>, <span>Solidity</span> and currently learning <span>C#</span>. I have specialized expertise in <span>React</span>, <span>React Native</span>,
           <span>Redux</span>, <span>Node js</span>, and <span>Ruby on Rails</span> frameworks. I'm highly adaptable and a quick learner, 
           having successfully executed real-world projects, including an e-commerce site. 
           Additionally, I have actively participated in various group projects, demonstrating my ability to collaborate effectively. 
           I embrace new technologies with enthusiasm and look forward to continuously evolving and staying ahead in this dynamic field.
           Currently am working on a system management project with the following technologies, <span>React</span>, <span>React Native</span>, <span>Node js</span>, <span>Express js</span> and <span>PostgreSQL</span>,
        </div>

      </motion.p>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 
              className="bold-text"
              style={{ marginTop: 20 }}
            >{about.title}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(About, 'about');