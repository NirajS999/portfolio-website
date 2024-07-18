import React from 'react'

const Hobbies = () => {
  return (
    <div className='section-margin flex flex-col gap-4 md:flex-row md:justify-around'>
        <div className='border border-gray-800 bg-gray-950 px-4 py-4 text-gray-300 backdrop-blur-3xl w-full md:w-2/5'>
            <h1 className='text-3xl py-2'>Hobbies</h1>
            <span className='bg-gradient-to-t from-[#fff] to-[#8678f9] bg-clip-text text-transparent'>
            Playing Cricket, Football, Chess, Playing Video Games, Outing, Listening to music
            </span>
        </div>

        <div className='border border-gray-800 bg-gray-950 px-4 py-4 text-gray-300 backdrop-blur-3xl w-full md:w-2/5'>
            <h1 className='text-3xl py-2'>Languages</h1>
            <span className='bg-gradient-to-t from-[#fff] to-[#8678f9] bg-clip-text text-transparent'>
                English, Hindi, Konkani
            </span>
        </div>
        
    </div>
  )
}

export default Hobbies
