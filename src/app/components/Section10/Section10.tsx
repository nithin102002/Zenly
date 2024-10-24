import React from 'react'
import Section10Title from './Section10compo/Section10Title'
import Section10Review from './Section10compo/Section10Review'

const Section10 = () => {
  return (
    <div className='h-screen w-full bg-[#f3f3f3] flex flex-col '>
        <Section10Title/>
        <Section10Review/>
    </div>
  )
}

export default Section10