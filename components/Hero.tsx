import React from 'react'
import SocialMedia from './SocialMedia'

const Hero = () => {
  return (
    <section className='flex flex-col items-center text-white section-margin md:flex-row'>
      <div className='mx-4 lg:mx-10 md:w-3/6'>
        <h3>Hello, its Me</h3>
        <h1 className='text-5xl name-font'>Niraj Satarkar</h1>
        <p className='py-4 text-lg'>I am Searching for Job/Internship as a Software Developer where i can utilize my Skills in full potential for the development of the Organisation and to gain Knowledge and Skills from the Organisation while working for it.</p>
        <SocialMedia />
        <a href="#internship">
        <button className='relative inline-flex h-12 items-center justify-center rounded-md bg-white px-6 my-4 font-medium text-gray-950 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 hover-effect '>
        <div className='absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur' />
        Explore Now
        </button>
        </a>
      </div>
      <div className='relative inline-block overflow-hidden rounded-full border-8 mx-20'>
      <div className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <div className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 backdrop-blur-3xl'>
        <img src="/photo.jpg" width={240} height={240} alt="" />
      </div>
    </div>
    
    </section>
  )
}

export default Hero
