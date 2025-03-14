import React from 'react'
import HeroGradient from './HeroGradient'
import HeroText from './HeroText'
import HeroPic from './HeroPic'
import SubHeroSection from './SubHeroSection'

const HeroMain = () => {
  return (
    <div className='pt-40 pb-16 '>
    <div className='flex md:flex-row  sm:flex-col gap-52 justify-center items-center relative px-4'>
      <HeroText/>
      <HeroPic/>
    </div>
    <SubHeroSection/>
    </div>
  )
}

export default HeroMain
