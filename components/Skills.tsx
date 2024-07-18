import React from 'react'
import { Skill } from '@/constants'
import Link from 'next/link'

const Skills = () => {
  return (
    <section className='section-margin text-white' id='skills'>
        <div>
          <h1 className='text-3xl text-center my-4'>Technical Skills</h1>
        </div>
      <div className='flex flex-wrap gap-4 h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-8 py-16 lg:flex-nowrap '>

        {Skill.map((data) =>(
        <div key={data.title} className='w-32 hover-effect'>
          <Link href={data.url} passHref target="_blank" rel="noopener noreferrer">
            <img src={data.image} alt="" />
          </Link>
          
        </div>
      ))}
      </div>

      
    </section>
  )
}

export default Skills
