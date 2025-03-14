import React from 'react'
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

function NavbarMain() {
 const [menuOpen, setmenuOpen] = useState(false);
 const toggleMenu = ()=>{
  setmenuOpen(!menuOpen);
 }

  return (
    <nav className=' max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20  flex gap-4 mt-2 items-center justify-center'>
        <div className='flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[1px] border-orange-300'>
      <NavbarLogo/>
      <div className={`${menuOpen? 'sm:block': 'sm:hidden'} xl:block`}>
      <NavbarLinks/>
      </div>
      <NavbarBtn/>
        </div>
        <div className='bg-black items-center justify-center rounded-full border-[1px] border-orange-400 font-bold text-3xl md:hidden'>
          <button className='flex text-3xl p-5  font-bold rounded-full' onClick={toggleMenu}><GiHamburgerMenu /></button></div>
    </nav>
  )
}

export default NavbarMain
