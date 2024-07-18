import React from 'react'
import { Internships } from '@/constants'

const CardPulse = () => {
  return (
    <div className='relative w-full '>
      <div className='absolute top-0 flex w-full justify-center'>
        <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
      </div>
      {Internships.map((data) =>(
        <div className='flex flex-col gap-3 rounded-md border border-gray-800 bg-gradient-to-b from-gray-950 to-black my-8 py-4 px-4' key={data.title}>
          <h2 className='text-2xl'>{data.title}</h2>
          <p>{data.subtitle}</p>
        </div>

      ))}
    </div>
  )
}

export default CardPulse
