import React from "react";
import ExperienceText from "./ExperienceText";
import ExperienecTop from "./ExperienecTop";
import AllExperiences from "./AllExperiences";
import { motion } from "motion/react";
import { fadeIn } from "../../framermotion/variants";
const ExperieceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="Show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ExperienceText />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="Show"
        viewport={{ once: false, amount: 0 }}
      >
        <ExperienecTop />
      </motion.div>
      <div className="h-1 w-full bg-gray-400 mt-4 lg:block md:hidden"></div>
      <AllExperiences />
    </div>
  );
};

export default ExperieceMain;
