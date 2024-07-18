import React from 'react'
import Contact from './Contact'
import { contact, footerLinks } from '@/constants'
import SocialMedia from './SocialMedia'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='section-margin' id='contact'>
      <div>
        <Contact />
      </div>
      <div className='flex flex-col gap-8 items-center py-16 md:flex-row md:justify-around'>
        <div className='footer-links'>
        {footerLinks.map((data) =>(
          <div key={data.title} className='hover-effect'>
            <Link href={data.href} className='footer-text '>{data.title}</Link>
          </div>
        ))}
        </div>
        <div className='footer-links'>
        {contact.map((data) => (
          <div key={data.title}>
            <h2 className='footer-text'>{data.value}</h2>
          </div>
        ))}
        <SocialMedia />
        </div>

      </div>

    </div>
  )
}

export default Footer
