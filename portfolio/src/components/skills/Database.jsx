import React from 'react'
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";

export default function Database() {
  return (
    <div id='Database' className='p-20 flex flex-col items-center justify-center'>
      <h1 className='text-[52px] font-semibold font-mono mb-20 leading-normal text-white'>DATABASE</h1>
      <div className='flex mt-8 gap-2'>
            <div className='flex items-center justify-center'>
                <div className='flex space-x-6'>
                    <a href='https://dev.mysql.com/doc/' target="_blank" rel="noopener noreferrer" className='text-purple-400 hover:text-purple-300 rounded-full glow p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <SiMysql className='text-[60px]'/>
                    </a>
                    <a href='https://www.mongodb.com/docs/' target="_blank" rel="noopener noreferrer" className='text-purple-400 hover:text-purple-300 rounded-full glow p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <SiMongodb className='text-[60px]'/>
                    </a>

                </div>
            </div>
        </div>
    </div>
  )
}
