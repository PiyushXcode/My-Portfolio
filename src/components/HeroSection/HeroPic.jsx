import React from "react";
import { BiSquareRounded } from "react-icons/bi";
import { motion } from "motion/react";
import { fadeIn } from "../../framermotion/variants";
const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="Show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center"
    >
      <img
        src="/images/piyush.png"
        alt=""
        className="max-h-[450px] rounded-full"
      />
      <div className="absolute -z-10 flex items-center justify-center animate-pulse">
        {" "}
        <BiSquareRounded className="md:h-[40%] sm:h-[60%] min-h-[500px] w-auto text-cyan-200 blur-lg animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
