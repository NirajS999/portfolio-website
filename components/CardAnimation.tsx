import React from 'react'
import { Educations } from '@/constants'

const CardAnimation = () => {
  return (
    <div className='relative flex flex-col justify-center overflow-hidden p-[1px] '>
    <div className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
    <div className='flex flex-col h-full w-full cursor-pointer bg-gray-950 px-4 py-4 text-lg font-medium text-gray-50 backdrop-blur-3xl lg:flex-row gap-4 '>
      {Educations.map((data) =>(
        <div key={data.school} className='flex flex-col gap-4 border border-gray-800 h-64 px-4 py-4 lg:w-1/3 '>
          <h2 className='text-2xl'>{data.school}</h2>
          <span>{data.degree}</span>
          <span>{data.year}</span>
          <span>Aggregate :- {data.Aggregate}</span>
        </div>
      ))}  
    </div>
  </div>

  )
}

export default CardAnimation
