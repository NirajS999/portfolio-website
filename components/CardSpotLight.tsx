
'use client';
import React, { useRef, useState } from 'react';
import { Projects } from '@/constants';
import Link from 'next/link';

const CardSpotLight = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current || isFocused) return;
  
      const div = divRef.current;
      const rect = div.getBoundingClientRect();
  
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
  
    const handleFocus = () => {
      setIsFocused(true);
      setOpacity(1);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
      setOpacity(0);
    };
  
    const handleMouseEnter = () => {
      setOpacity(1);
    };
  
    const handleMouseLeave = () => {
      setOpacity(0);
    };
  
    return (
    <div>
    {Projects.map((data) =>(
        <div key={data.title}
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='relative flex flex-col gap-2 overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-r from-black to-gray-950 px-4 py-8 shadow-2xl my-8 '
        >
            {/* <img src={data.icon} alt="" /> */}
            <h2 className='text-2xl'>{data.title}</h2>
            <p>{data.subtitle}</p>
            <p>{data.technologies}</p>
            {data.links?.map((link) => (
                <Link href={link.url} key={link.title} className='border-2 border-gray-800 w-40 px-4 py-2 hover-effect' passHref target="_blank" rel="noopener noreferrer">
                  {link.title}
                </Link>
            ))}
           <div
           className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
            style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
            }}
            />
        </div>
    ))}

      
      </div>
    );

}

export default CardSpotLight
