import React from 'react'
import { motion } from "framer-motion"
import './About.scss'
import { fadeIn, textVariant } from '../../utils/motion'
import { Tilt } from 'react-tilt';
import { abouts } from '../../constants/about';
import { AppWrap } from '../../wrapper';

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className="tilt-container">
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className="motion-tilt"
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="motion-option"
//       >
//         <img
//           src={icon}
//           alt='web-development'
//           className="motion-icon"
//         />

//         <h3 className="motion-title">
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

const About = () => {
  return (
    <div className="content" id="about"> 
      <motion.div 
        variants={textVariant()}
        className="text"
      >
          {/* <p className="sub-text">Introduction</p> */}
          <h2 className="header-text">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="body-text"
      > 
       <div className='txtx'>
          I possess strong skills as a software developer,
           proficient in <span>JavaScript</span> and <span>Ruby</span>, and I have specialized expertise in <span>React</span>, 
           <span>Redux</span>, and <span>Ruby on Rails</span> frameworks. I'm highly adaptable and a quick learner, 
           having successfully executed real-world projects, including an e-commerce site. 
           Additionally, I have actively participated in various group projects, demonstrating my ability to collaborate effectively. 
           I embrace new technologies with enthusiasm and look forward to continuously evolving and staying ahead in this dynamic field.
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
            {/* <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p> */}
          </motion.div>
        ))}
      </div>

      {/* <div className="about-cards">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </div>
  )
}

export default AppWrap(About, 'about');