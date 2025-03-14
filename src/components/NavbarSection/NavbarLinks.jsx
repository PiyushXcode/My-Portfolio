import React from 'react'
import {Link} from 'react-scroll';


const links =[
  {link: "About Us", section: "about"},
  {link: "Experience", section: "experience"},
  {link: "Skills", section: "skill"},
  {link: "Projects", section: "projects"},
  {link: "Contacts", section: "contacts"},
]

const NavbarLinks = () => {
  return (
    <ul className='flex text-white gap-6 font-bold text-center py-3 lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm-text-xl sm:bg-cyan-500/30 backdrop-blur-lg lg:bg-black sm:w-full'>
      {links.map((link, index)=>{
        return (
          <li key={index} className='group hidden sm:block'>
            <Link to={link.section} 
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            className='cursor-pointer text-white hover:text-cyan-400 transition-all duration-300'>{link.link}</Link>
            <div className='cursor-pointer mx-auto bg-cyan-500 w-0 group-hover:w-full h-[1px] transition-all duration-300'></div>
          </li>
        )
      })}
    </ul>
  )
}

export default NavbarLinks
