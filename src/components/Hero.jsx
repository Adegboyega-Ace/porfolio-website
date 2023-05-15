import React from 'react'
import { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {

  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['', 'a Web Developer', 'a Web Designer', 'a UI/UX Designer', 'a Creative Writer', 'a Content Creator', '', 'nibbble.'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <section className=' relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className='w-1 sm:h-80 h-40 violet-gradient ' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`} >Konnichiwa! <span className='wave'>👋</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          <span className="text-[#915eff]">Ace</span> is <span ref={typedRef}></span>
          </p>
        </div>
      </div>

      <ComputersCanvas />


      <div className="relative xs:bottom-10 bottom-32 w-full flex justify-center items-">
        <a href="#about">
            <div className='w-[35px] h-[65px] div arrow1 flex justify-center' >

            </div>

            <div className='w-[35px] h-[65px] div arrow2 flex justify-center absolute inset-y-[-15px]' >

            </div>
        </a>
      </div>

    </section>
  )
}

export default Hero