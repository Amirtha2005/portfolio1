import React from 'react'
import { ImGithub } from "react-icons/im";
import { VscVscode } from "react-icons/vsc";
import { SiNetlify } from "react-icons/si";

export default function Tools() {
  return (
    <div id='Tools' className='p-20 flex flex-col items-center justify-center'>
      <h1 className='text-[52px] font-semibold font-mono mb-20 leading-normal text-white'>TOOLS</h1>
      <div className='flex mt-8 gap-2'>
            <div className='flex items-center justify-center'>
                <div className='flex space-x-6'>
                    <a href='https://docs.github.com/en' target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-300 rounded-full glow p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <ImGithub className='text-[60px]'/>
                    </a>
                    <a href='https://code.visualstudio.com/Docs' target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-300 rounded-full glow p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <VscVscode className='text-[60px]'/>
                    </a>
                    <a href='https://docs.netlify.com/' target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-300 rounded-full glow p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <SiNetlify className='text-[60px]'/>
                    </a>

                </div>
            </div>
        </div>
    </div>
  )
}
