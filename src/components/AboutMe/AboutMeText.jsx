import React from "react";
function AboutMeText() {
  return (
    <div className="flex flex-col md:text-left sm:text-center">
      <h1 className="text-6xl text-cyan-300 mb-10 ">About Me</h1>
      <span className="text-3xl text-yellow-300">Hey There! </span>
      <p className="mt-2 text-xl">
        I am{" "}
        <span className="uppercase text-2xl text-yellow-400">
          piyush prasad
        </span>{" "}
        a skilled Software Developer with expertise in Frontend and Backend
        development. With hands-on experience from an internship at Mark 2
        Fashion Tech Pvt. Ltd, I specialize in full-stack development using
        React, Node.js, Express, and MongoDB, along with API development and
        integration. Beyond software development, I have a strong foundation in
        data analysis and visualization, working with Microsoft Excel (Advanced
        functions, Pivot Tables, Macros), Power BI, and Tableau. I also possess
        skills in content creation and design, utilizing WordPress for website
        development and Canva for graphic design and social media content. I am
        passionate about building efficient, scalable, and user-friendly
        solutions, continuously expanding my technical knowledge, and solving
        real-world problems through innovative software solutions.
      </p>
      <button className="flex items-center justify-center cursor-pointer mt-10 py-2 text-2xl px-4 border border-gray-600 hover:border-gray-200 transition-all duration-600 hover:scale-110 rounded-full bg-teal-400 text-black hover:bg-teal-300 md:self-start sm:self-center">
        My Projects
      </button>
    </div>
  );
}

export default AboutMeText;
