import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
      <p className='text-orange-400 text-bold uppercase text-3xl font-normal text-center '>Since 2023</p>
      <div className='flex justify-center items-center gap-4'>
        <ExperienceInfo number="2" text="Years"/>
        <p className='font-bold text-7xl text-gray-400'>-</p>
        <ExperienceInfo number="6" text="Websites"/>
      </div>
        <p className='text-center'>with a years of experience building dynamic and user-freindly web applications.</p>
       

    </div>
  )
}

export default ExperienceTopLeft
