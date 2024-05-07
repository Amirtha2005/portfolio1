import React from 'react'
import { useEffect } from 'react';
import img from '../assets/Videos.jpg'

export default function Me() {


  return (
    <div id='About' className=''>
      <div className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-10 lg-text-start flex lg:flex-row justify-between lg:gap-28 items-center'>
      <img src={img} width={290} height={290}  className='rounded-br-lg border-1 border-fuchsia-500 animate-pulse' alt=''/>
      <div className='h-full lg:py-40 flex flex-col justify-center  items-center text-white lg:items-center'>
        <h1 className='text-[52px] font-semibold mb-8 leading-normal '>About Me </h1>
        <p>Hey there! I'm Amirtha Varshini, a passionate second-year student pursuing a Bachelor's degree in Computer Science and Engineering at Sri Krishna College of Engineering and Technology in Coimbatore, Tamil Nadu, India.</p><br/>
        <p>In the world of programming, I'm fluent in Java, C, C++, and Python, leveraging each language's unique strengths to tackle diverse problems. Beyond programming, I've delved into various frontend technologies, backend tools, testing methodologies, deployment strategies, cloud platforms, and version control systems like Git.</p>
        <div className='flex mt-8 gap-2'>
            <a href='https://drive.google.com/file/d/1SvonSW66EQnpauDdQJ5dTTGB-vmxCcxN/view?usp=sharing' target="_blank" rel="noopener noreferrer"><button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 animate-bounce '>Resume</button> </a>
        </div>
      </div>
    </div>
    </div>
  )
}
