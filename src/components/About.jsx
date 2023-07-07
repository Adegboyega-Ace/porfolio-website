import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      {/* {title} */}
      <div
        options = {{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className= "bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
      >
        <img  src={icon} alt={title} className=" w-16 h-16 object-contain " />
        <h3 className='text-white text-[20px] text-center'>
            {title}
        </h3>
      </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()} >
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>
        Overview.
      </h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className= " mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
    >
      <div className=' mb-2 ' >{`< Government name: Adegboyega />`}<br /> {`< Code name: Ace />`}<br/></div>
      I work as a software developer, specializing in JavaScript, HTML, and CSS. I have experience with widely-used JavaScript frameworks like React, Node.js, and Three.js as well as well-known CSS frameworks like Tailwind CSS and Bootstrap.
      A very big Tech enthusiast and a Tech Savvy.<br/>
      I love discussing about Technologies, and it was that passion that lead me to create <a className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-pink-300' rel={'external'} target={'_blank'} href={"https://nibbble.blog"}><span><strong>nibbble</strong></span></a> 
      &nbsp; — a tech focused blog where I breaking down complex tech concepts into easily understandable pieces for readers.<br/>
      This website was built using the following Technologies; Vite + React.js, three.js, tailwindCSS, framer motion and more. <a className='font-light text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-pink-300' rel={'external'} target={'_blank'} href={"https://github.com/Adegboyega-Ace/porfolio-website.git"}><span><strong>source code</strong></span></a>
      
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10 cursor-grabbing place-content-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (About, "about")