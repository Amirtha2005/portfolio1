import React from 'react'

import { TfiHtml5 } from "react-icons/tfi";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { TbBrandVite } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";

export default function Frontend() {
  return (
    <div id='Frontend' className='p-20 flex flex-col items-center justify-center'>
      <h1 className='text-[52px] font-semibold mb-20 leading-normal uppercase text-white'>FRONTEND</h1>
      <div className='flex mt-8 gap-2'>
            <div className='flex items-center justify-center'>
                <div className='flex space-x-6'>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target="_blank" rel="noopener noreferrer" className='text-teal-300 hover:text-teal-200 rounded-full glow p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <TfiHtml5 className='text-[60px]'/>
                    </a>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target="_blank" rel="noopener noreferrer" className='text-teal-300 hover:text-teal-200 rounded-full glow p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <FaCss3Alt className='text-[60px]'/>
                    </a>
                    <a href='https://tailwindcss.com/docs/installation' target="_blank" rel="noopener noreferrer" className='text-teal-300 hover:text-teal-200 rounded-full glow p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <RiTailwindCssFill className='text-[60px]'/>
                    </a>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/javascript' target="_blank" rel="noopener noreferrer" className='text-teal-300 hover:text-teal-200 rounded-full glow p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <IoLogoJavascript className='text-[60px]'/>
                    </a>
                    <a href='https://react.dev/' target="_blank" rel="noopener noreferrer" className='text-teal-300 hover:text-teal-200 rounded-full glow p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <GrReactjs className='text-[60px]'/>
                    </a>
                    <a href='https://vitejs.dev/guide/' target="_blank" rel="noopener noreferrer" className='text-teal-300 hover:text-teal-200 rounded-full glow p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <TbBrandVite className='text-[60px]'/>
                    </a>
                    <a href='https://nextjs.org/docs' target="_blank" rel="noopener noreferrer" className='text-teal-300 hover:text-teal-200 rounded-full glow p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <TbBrandNextjs className='text-[60px]'/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
