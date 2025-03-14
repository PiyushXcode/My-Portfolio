import React from "react";
import { motion } from "motion/react";
import { fadeIn } from "../../framermotion/variants";
const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="Show"
      viewport={{ once: false, amount: 0 }}
      className="md:h-[400px] md:w-[240px] sm:h-auto sm:w-full border-2 border-orange-500 border-dashed rounded-2xl mt-12 p-4 "
    >
      <p className="font-bold text-cyan-300">{experience.job}</p>
      <p className="text-amber-500">{experience.company}</p>
      <p className="text-gray-500">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 ">
        {experience.responsiblites.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
