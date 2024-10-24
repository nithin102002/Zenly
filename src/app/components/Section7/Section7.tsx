import React from 'react'
import Section7leftside from './Section7compo/Section7leftside'
import Section7rightside from './Section7compo/Section7rightside'

const Section7 = () => {
  return (
    <div className='h-screen w-full bg-[#f3f3f3] flex flex-col md:flex-row sm:px-4 md:px-10'>
        <Section7leftside/>
        <Section7rightside/>

    </div>
  )
}

export default Section7