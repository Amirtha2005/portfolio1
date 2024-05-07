import React from 'react'

export default function Contact() {
  return (
    <div id='Contact' className='p-4 lg:p-20 flex flex-col items-center justify-center'>
      <h1 className='text-[52px] font-semibold mb-20 leading-normal uppercase text-white'>Contact Me</h1>
      <form action='' className='flex flex-col gap-2 lg:w-1/2'>
        <div className='lg:flex gap-6'>
          <input className='w-full my-3 rounded-lg bg-slate-800 p-4 border-2 text-xl text-white z-10' placeholder='Enter Your Name' type='text'/>
          <input className='w-full my-3 rounded-lg bg-slate-800 p-4 border-2 text-xl text-white z-10' placeholder='Enter Your Email' type='email'/>
        </div>
        <textarea className='w-full my-3 rounded-lg bg-slate-800 p-4 border-2 img_glow text-xl text-white' name='' id='' cols='20' rows='10' placeholder='Write Your Message'></textarea>
        <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5 img_glow'>SUBMIT</button> 
      </form>
    </div>
  )
}
