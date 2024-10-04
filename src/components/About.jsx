import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion'; 

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 xs:min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary xs:text-[17px] text-[16px] mac-w-3xl leading-[30px]'
      >
        I specialize in crafting dynamic and responsive web applications using modern frontend technologies.<br/><br/>
        I'm proficient in using in using JavaScript/TypeScript and React to create dynamic and interactive websites. Additionally, I am skilled in setting up build and development processes using tools such as npm, Vite, Jest, and Git, which helps me to efficiently manage and track my code.<br/><br/>
        To ensure high-quality code, I use tools like ESLint and Stylelint to improve the code's readability, maintainability, and consistency. I am also a responsible team player who works well with others and constantly seeks to learn and improve my skills.<br/><br/> 
        Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")