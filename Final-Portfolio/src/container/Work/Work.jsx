import React, { useState, useEffect} from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import './Work.scss'
import { AppWrap } from '../../wrapper'
import { motion } from 'framer-motion';
import { projects } from '../../constants/about';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() =>{
    setWorks(projects)
    setFilterWork(projects)
  },[])

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
      console.log(filterWork)
    }, 500);
  };

  return (
    <div className='content'>
      <h3 className="header-text">MY PORTFOLIO.</h3>

      <div className="desc-text">
        <p
          className='descript'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className="app__work-filter">
        {['react', 'Ruby on Rails', 'next js', 'web3', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.image} alt={work.name}/>

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.live_demo} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                <a href={work.source_code_link} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.name}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              {/* <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div> */}

            <div className="app__work-tag app__flex">
              {work.tags.map((tag) => (
              <p key={tag.name} className={`${tag.color} tag-text`}>
                #{tag.name}
              </p>
             ))}
            </div>
            </div>
            
          </div>
        ))}
      </motion.div>

    </div>
  )
}

export default AppWrap(Work, 'work')