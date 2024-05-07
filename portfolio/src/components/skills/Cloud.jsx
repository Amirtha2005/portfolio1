import React from 'react'
import { FaAws } from "react-icons/fa6";
import { SiGooglecloud } from "react-icons/si";

export default function Cloud() {
  return (
    <div id='Cloud' className='p-20 flex flex-col items-center justify-center'>
      <h1 className='text-[52px] font-semibold font-mono mb-20 leading-normal text-white'>CLOUD TECHNOLOGIES</h1>
      <div className='flex mt-8 gap-2'>
            <div className='flex items-center justify-center'>
                <div className='flex space-x-6'>
                    <a href='https://docs.aws.amazon.com/' target="_blank" rel="noopener noreferrer" className='text-rose-400 hover:text-rose-300 rounded-full glow p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <FaAws className='text-[60px]'/>
                    </a>
                    <a href='https://cloud.google.com/docs/' target="_blank" rel="noopener noreferrer" className='text-rose-400 hover:text-rose-300 rounded-full glow p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <SiGooglecloud className='text-[60px]'/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
