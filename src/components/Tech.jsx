import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';


const Skills = ({ name, x, y }) => {

  return(
    <motion.div className= {`flex items-center justify-center rounded-full font-semibold bg-white text-black py-3 px-6 shadow-dark cursor-pointer absolute`} 
         
        whileHover={{scale:1.1}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y}}
        transition={{duration: 1.5}}
        viewport={{once: true}}
        >
            {name}
        </motion.div>
  )
}

const Tech = () => {

  return (
    <>
      <p className={styles.sectionSubText}>
        Services I Offer
      </p>
      <h2 className={styles.sectionHeadText}>
        Skills 👨🏽‍💻.
      </h2>

      <div className= {`w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight `} >

        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-yellow-400 text-black p-8 shadow-dark cursor-pointer ' 
        whileHover={{scale:1.05}}
        >
            web
        </motion.div>

        <Skills name="CSS" x="-5vw" y="-9vw" />
        <Skills name="HTML" x="-8vw" y="8vw" />
        <Skills name="JavaScript" x="12vw" y="4vw" />
        <Skills name="ReactJS" x="-19vw" y="-6vw" />
        <Skills name="Tailwind CSS" x="7vw" y="-14vw" />
        <Skills name="Webflow" x="5vw" y="14vw" />
        <Skills name="Figma" x="-12vw" y="-17vw" />
        <Skills name="Wordpress" x="20vw" y="-3vw" />
        <Skills name="Firebase" x="-27vw" y="3vw" />
        <Skills name="Web design" x="34vw" y="5vw" />
        <Skills name="SEO" x="-30vw" y="-10vw" />
        <Skills name="threejs" x="-32vw" y="10vw" />
        <Skills name="git" x="28vw" y="-15vw" />
        <Skills name="nodejs" x="-5vw" y="19vw" />
        <Skills name="typescript" x="20vw" y="20vw" />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "")

