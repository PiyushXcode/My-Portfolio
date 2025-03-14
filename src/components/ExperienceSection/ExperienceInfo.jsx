import React from 'react'

const ExperienceInfo = ({number, text}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='font-bold text-6xl text-cyan-500'>{number}</p>
      <p className='font-bold text-xl text-gray-500 uppercase -mt-4'>{text}</p>
    </div>
  )
}

export default ExperienceInfo
