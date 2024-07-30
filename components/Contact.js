'use client'
import React from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
      emailjs
        .sendForm("service_2ecuuej", "template_nr6l9tl", form.current, {
          publicKey:"GTE_0yrkscznaJ95k",
        })
        .then(
          () => {
            console.log('SUCCESS!');
            toast.success('Message has been Send Successfullly', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
              });

          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  

    return (
        <div className='relative flex flex-col'>
          <ToastContainer />
            <h1 className='text-3xl text-white text-center'>Contact Me</h1>
            
            <div className='absolute top-0 flex w-full justify-center'>
                <div className='h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
            </div>
            <form className='w-9/12 lg:w-3/6 mx-auto' ref={form} onSubmit={sendEmail}>
            <div className='text-white my-4'>
                <label htmlFor="">Name</label>
                <input
                className='block h-12 w-full rounded-md border border-gray-800 bg-gray-950 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 focus:ring-offset-gray-50'
                placeholder='userName'
                name="user_name"
                required
                />
            </div>
            <div className='text-white my-4'>
                <label htmlFor="">Email</label>
                <input
                className='block h-12 w-full rounded-md border border-gray-800 bg-gray-950 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 focus:ring-offset-gray-50'
                placeholder='Email'
                type='email'
                name="user_email"
                required
                />
            </div>
            <div className='text-white'>
                <label htmlFor="">Message</label>
                <textarea
                className='block h-24 w-full rounded-md border border-gray-800 bg-gray-950 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 focus:ring-offset-gray-50'
                placeholder='Message'
                name='message'
                required
                />
            </div>
            <input className="inline-flex my-4 font-bold h-12 items-center justify-center rounded-md border border-gray-800 bg-gradient-to-t from-[#8678f9] from-0% to-[#c7d2fe] px-6 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 hover-effect" type="submit" value="Submit" />
            </form>
        </div>

    )
}

export default Contact
