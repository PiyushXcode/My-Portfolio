import React from "react";
import SkillText from "./SkillText";
import AllSkill from "./AllSkill";
import AllSkillSM from "./AllSkillSM";
import { motion } from "motion/react"
import {fadeIn} from '../../framermotion/variants'

const SkillMain = () => {
  return (
    <div id="skill">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">

      <motion.div
      variants={fadeIn("down",0.2)}
      initial='hidden'
      whileInView='Show'
      viewport={{ once:false, amount:0 }}>
        <SkillText />
      </motion.div>

        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] md:block sm:hidden">
        <AllSkill />
        </div>
        <div className="sm:block md:hidden">
          <AllSkillSm/>
        </div>
      </div>
    </div>
  );
};

export default SkillMain;
