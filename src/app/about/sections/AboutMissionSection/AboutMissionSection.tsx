import React from 'react'
import AboutMissiopnLeft from './AboutMissionCompo/AboutMissiopnLeft'
import AboutMissionRightSection from './AboutMissionCompo/AboutMissionRightSection'

const AboutMissionSection = () => {
  return (
    <div className='h-screen w-full bg-[#f3f3f3] flex flex-col md:flex-row sm:p-2 md:p-2 lg:p-4 gap-1 md:gap-2 transition-colors duration-300 shadow-lg rounded-lg'>
      <AboutMissiopnLeft/>
      <AboutMissionRightSection/>
  </div>
  )
}

export default AboutMissionSection

