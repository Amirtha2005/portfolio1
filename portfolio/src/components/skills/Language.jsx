import React from 'react'
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";

export default function Language() {
  return (
    <div id='Languages' className='p-20 flex flex-col items-center justify-center'>
      <h1 className='text-[52px] font-semibold font-mono mb-20 leading-normal text-white'>PROGRAMMING LANGUAGES</h1>
      <div className='flex mt-8 gap-2'>
            <div className='flex items-center justify-center'>
                <div className='flex space-x-6'>
                    <a href='https://docs.oracle.com/en/java/' target="_blank" rel="noopener noreferrer" className='text-indigo-500 hover:text-indigo-300 rounded-full glow p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <FaJava className='text-[60px]'/>
                    </a>
                    <a href='https://isocpp.org/std/the-standard' target="_blank" rel="noopener noreferrer" className='text-indigo-500 hover:text-indigo-300 rounded-full glow p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <TbBrandCpp className='text-[60px]'/>
                    </a>
                    <a href='https://www.python.org/doc/' target="_blank" rel="noopener noreferrer" className='text-indigo-500 hover:text-indigo-300 rounded-full glow p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <FaPython className='text-[60px]'/>
                    </a>

                </div>
            </div>
        </div>
    </div>
  )
}
