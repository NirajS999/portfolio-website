import React from 'react'
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"

const SocialMedia = () => {
  return (
    <div className='text-white'>
      <span className='relative inline-block overflow-hidden rounded-full p-[1px]'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <div className='inline-flex gap-6 h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-2 backdrop-blur-3xl'>
        <Link href="https://www.linkedin.com/in/niraj-satarkar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" passHref target="_blank" rel="noopener noreferrer" className='hover-effect'><FaLinkedin fontSize="26px" /></Link>
        <Link href="https://github.com/NirajS999" passHref target="_blank" rel="noopener noreferrer" className='hover-effect'><FaGithub fontSize="26px" /></Link>
        <Link href="https://x.com/NirajS20?t=S81D5fy89y6uFNcf2QY91Q&s=09" passHref target="_blank" rel="noopener noreferrer" className='hover-effect'><FaXTwitter fontSize="26px" /></Link>
        <Link href="https://www.instagram.com/niraj_99999?utm_source=qr&igsh=Y2Vqb3VreWJ4d2Fw" passHref target="_blank" rel="noopener noreferrer" className='hover-effect'><FaInstagram fontSize="26px" /></Link>               
      </div>
    </span>
    </div>
  )
}

export default SocialMedia
