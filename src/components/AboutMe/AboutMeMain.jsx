import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMeIMG from "./AboutMeIMG";
import { motion } from "motion/react"
import {fadeIn} from '../../framermotion/variants'

function AboutMeMain() {
  return (
    <div
    id="about" className=" flex md:flex-row sm:flex-col gap-10 justify-between items-center mx-auto px-5 max-w-[1200px] mt-[100px]">
      <motion.div
      variants={fadeIn("right",0.2)}
      initial='hidden'
      whileInView='Show'
      viewport={{ once:false, amount:0.7 }}>
        <AboutMeText />
      </motion.div>
      <motion.div
      variants={fadeIn("left",0.2)}
      initial='hidden'
      whileInView='Show'
      viewport={{ once:false, amount:0.7 }}>
        <AboutMeIMG />
      </motion.div>
    </div>
  );
}   

export default AboutMeMain;
