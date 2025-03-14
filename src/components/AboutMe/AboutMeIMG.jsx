import React from "react";
function AboutMeIMG() {
  return (
    <div className="h-[400px] w-[300px] relative">
      <div className="h-[400px] w-[300px] rounded-[100px] overflow-hidden">
        <img
          src="/images/about-me.jpg"
          alt="About Me"
          className="h-full w-auto object-cover"
        />
        <div className="h-[400px] w-[260px] absolute  bg-orange-500 bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-t-[120px] rounded-br-[20px] rounded-tl[20px] -z-10"></div>
      </div>
    </div>
  );
}

export default AboutMeIMG;
