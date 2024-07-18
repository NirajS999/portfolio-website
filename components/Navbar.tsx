'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { navLinks } from '../constants';


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

return (
    <nav className='flex items-center justify-between z-30 py-5 px-12 padding-container sticky top-0 text-white'>
        <Link href="/">
            <div className='inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-6 py-1 text-gray-300 hover-effect'>
                <span className='inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-3xl text-transparent logo-font'>
            Portfolio
            </span>
          </div>

        </Link>

        <span className='hidden relative md:inline-block overflow-hidden rounded-full p-[1px]'>
            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
            <div className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-3 py-2 text-xs font-medium text-gray-50 backdrop-blur-3xl'>
                <ul className='hidden h-full gap-12 font-bold text-xl md:flex px-2'>
                {navLinks.map((link)=>(
                    <Link className='hover-effect' href={link.href} key={link.title}>{link.title}</Link>
                ))}
                </ul>
            </div>
        </span>

       
        <div className='sm:hidden flex relative items-center justify-end bg-white px-2 py-2 rounded-full'>
            <img 
            src={toggle? '/cross.png':'/menu.svg'} 
            alt="menu"
            height={28}
            width={28}
            onClick={()=>setToggle(!toggle)}
            />
            <div className={`${
            !toggle ? "hidden" : "flex" } p-6 bg-orange absolute top-10 right-0 mx-4 my-2 rounded-xl min-w-[140px]`}>
                <ul className='font-bold flex flex-1 flex-col text-center justify-end text-white'>
                {navLinks.map((link)=>(
                    <Link href={link.href} key={link.title}>
                       <span className='bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent'>
                      {link.title}
                      </span>
                      </Link>
                ))}
                </ul>
            </div>
        </div>
    </nav>

)
}

export default Navbar
