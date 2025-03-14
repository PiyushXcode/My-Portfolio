import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "motion/react";
import { fadeIn } from "../../framermotion/variants";

const Projects = [
  {
    name: "Hospital Managament System (HSM)",
    year: "August, 2024",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Netflix Clone",
    year: "September , 2024",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "Twitter UI Clone",
    year: "November, 2024",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "#",
  },
  {
    name: "Ultra Edit Clone",
    year: "December, 2024",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "#",
  },
];

const ProjectMain = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4" id="projects">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="Show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {Projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
