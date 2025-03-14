import React from 'react'
import { motion } from "motion/react"
import {fadeIn} from '../../framermotion/variants'
const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center sm:text-center xl:text-left'>
      <motion.h2
      variants={fadeIn("down",0.2)}
      initial='hidden'
      whileInView='Show'
      viewport={{ once:false, amount:0 }}
      className='lg:text-2xl sm:text-xl uppercase text-cyan-400'>FULL-STACK WEB DEVELOPER
      </motion.h2>
      <motion.h1
       variants={fadeIn("right",0.4)}
       initial='hidden'
       whileInView='Show'
       viewport={{ once:false, amount:0 }}
      className='md:text-[2.5rem] lg:text-6xl sm:text-4xl font-bold text-orange-400'>PIYUSH PRASAD</motion.h1>
      <motion.p 
       variants={fadeIn("up",0.6)}
       initial='hidden'
       whileInView='Show'
       viewport={{ once:false, amount:0 }}
      className='text-lg mt-4'>A Passionate Web Developer And Tech Enthusiast. </motion.p>
    </div>
  )
}

export default HeroText
