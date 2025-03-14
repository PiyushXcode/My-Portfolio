import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";

function NavbarBtn() {
  return (
    <div>
      <button className='cursor-pointer flex items-center gap-2 font-bold border-1 border-cyan-200 bg-gradient-to-r from-cyan-400 to-orange-400 hover:scale-110 hover:border-orange-300 hover:shadow-cyan-800 transition-all duration-500 pl-3 pr-3 pt-1.5 pb-1.5 rounded-full text-white '>Hire Me <div className='sm:hidden md:block'><LuArrowDownRight /></div></button>
    </div>
  )
}

export default NavbarBtn
