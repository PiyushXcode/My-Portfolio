import React from 'react'


const links =[
    {link: "About Us", section: "about"},
    {link: "Experience", section: "experience"},
    {link: "Skills", section: "skill"},
    {link: "Projects", section: "projects"},
    {link: "Contacts", section: "contacts"},
  ]
const FooterMain = () => {
  return (
    <div className='px-4'>
      <div className='h-1 w-full bg-gray-400 mt-24'></div>

      <div className='md:flex sm:hidden mt-4 max-w-[1200px] mx-auto justify-between items-center'>
        <p className='text-3xl text-gray-400'>Piyush Prasad</p>
        <ul className='flex gap-4 text-gray-400 text-xl'>
            {links.map((item,index)=>{
                return <li key={index}> <a href="#" className='hover:text-white transition-all duration-500 cursor-pointer'>{item.link}</a> </li>
            })}
        </ul>
      </div>
      <p className='max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-gray-600'>&copy; 2025 Piyush | All Right Reserved. </p>
    </div>
  )
}

export default FooterMain
