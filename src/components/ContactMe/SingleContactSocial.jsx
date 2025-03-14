import React from 'react'

const SingleContactSocial = ({Icon, Link}) => {
  return (
    <div className='text-2xl h-12 w-12 text-orange-400 border border-orange-500 rounded-full p-3  flex items-center justify-center'>
      <a href={Link} className='cursor-pointer'>
        <Icon/>
      </a>
    </div>
  )
}

export default SingleContactSocial
