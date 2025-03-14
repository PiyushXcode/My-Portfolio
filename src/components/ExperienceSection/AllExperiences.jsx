import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react";
import { fadeIn } from "../../framermotion/variants";
const experiences = [
  {
    job: "Software Developer",
    company: "Mark 2 Fashion Tech Pvt. Ltd.",
    date: "Dec 2024 - March 2025",
    responsiblites: [
      "Worked as Inter for a Full-Stack Developer role",
      "Working on designing and development of website",
      "Gain a lot of Knowledge and Experience in this field",
      "Generating new ideas for better user experience",
    ],
  },
  // {
  //   job: "Software Developer",
  //   company: "Mark 2 Fashion Tech Pvt. Ltd.",
  //   date: "Dec 2024 - March 2025",
  //   responsiblites: [
  //     "Worked as Inter for a Full-Stack Developer role",
  //     "Working on designing and development of website",
  //     "Gain a lot of Knowledge and Experience in this field",
  //     "Generating new ideas for better user experience",
  //   ],
  // },
  // {
  //   job: "Software Developer",
  //   company: "Mark 2 Fashion Tech Pvt. Ltd.",
  //   date: "Dec 2024 - March 2025",
  //   responsiblites: [
  //     "Worked as Inter for a Full-Stack Developer role",
  //     "Working on designing and development of website",
  //     "Gain a lot of Knowledge and Experience in this field",
  //     "Generating new ideas for better user experience",
  //   ],
  // },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-around">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />

            {/* Enable it When You gain Minimum 3 Different Experiences; */}
            {/* {index < 2 ? (
              <motion.div
              variants={fadeIn("right",0.2)}
              initial='hidden'
              whileInView='Show'
              viewport={{ once:false, amount:0 }}>
                <FaArrowRightLong className="text-orange-500 text-6xl lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )} */}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
