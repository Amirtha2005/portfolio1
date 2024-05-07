import React from 'react'

import { SiDjango } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaNode } from "react-icons/fa";

export default function Backend() {
  return (
    <div id='Backend' className='p-20 flex flex-col items-center justify-center'>
      <h1 className='text-[52px] font-semibold font-mono mb-20 leading-normal text-white'>BACKEND</h1>
      <div className='flex mt-8 gap-2'>
            <div className='flex items-center justify-center'>
                <div className='flex space-x-6'>
                    <a href='https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/' target="_blank" rel="noopener noreferrer" className='text-cyan-400 hover:text-cyan-200 rounded-full glow p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <BiLogoSpringBoot className='text-[60px]'/>
                    </a>
                    <a href='https://docs.djangoproject.com/en/5.0/' target="_blank" rel="noopener noreferrer" className='text-cyan-400 hover:text-cyan-200 rounded-full glow p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <SiDjango className='text-[60px]'/>
                    </a>
                    <a href='https://nodejs.org/docs/latest/api/' target="_blank" rel="noopener noreferrer" className='text-cyan-400 hover:text-cyan-200 rounded-full glow p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <FaNode className='text-[60px]'/>
                    </a>

                </div>
            </div>
        </div>
    </div>
  )
}
