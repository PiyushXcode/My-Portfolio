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
import { motion } from "motion/react";
import { fadeIn } from "../../framermotion/variants";
import { div } from "motion/react-client";
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

const AllSkill = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="Show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkill;
