import React from 'react'
import { AppWrap } from '../../wrapper'
import './Skills.scss'
import { technologies } from '../../constants/about'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div className='content-skill' id="skills">
      <h3 className="header-text">MY SKILLS.</h3>
      <div className='app-contain'>
    
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
        {technologies.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </div>
    </div>
  )
}

// export default AppWrap(Skills, 'skills')
export default Skills