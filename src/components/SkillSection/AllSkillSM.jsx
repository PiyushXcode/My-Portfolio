import React from "react";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from "./SingleSkill";
import { IoLogoTableau } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { motion } from "motion/react"
import {fadeIn} from '../../framermotion/variants'
const skills = [
  {
    skill: "HTML",
    icon: SiHtml5,
  },
  {
    skill: "CSS",
    icon: SiCss3,
  },
  {
    skill: "JS",
    icon: FaJs,
  },
  {
    skill: "React.js",
    icon: IoLogoReact,
  },
  {
    skill: "Node JS",
    icon: FaNodeJs,
  },
  {
    skill: "Tailwind",
    icon: RiTailwindCssFill,
  },

  {
    skill: "Next.js",
    icon: SiNextdotjs,
  },
  {
    skill: "Mongo DB",
    icon: SiMongodb,
  },
  {
    skill: "Tableau",
    icon: IoLogoTableau,
  },
  {
    skill: "WordPress",
    icon: FaWordpress,
  },
  {
    skill: "Canva",
    icon: SiCanva,
  },
];

const AllSkillSm = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
          variants={fadeIn("up",0.2)}
          initial='hidden'
          whileInView='Show'
          viewport={{ once:false, amount:0.7 }}
          key={index} className="flex flex-col items-center">
            <item.icon className="text-7xl text-orange-400"/>
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillSm;
