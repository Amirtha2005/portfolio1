import React from 'react'
import { SiSelenium } from "react-icons/si";

export default function Testing() {
  return (
    <div id='Testing' className='p-20 flex flex-col items-center justify-center'>
      <h1 className='text-[52px] font-semibold font-mono mb-20 leading-normal text-white'>TESTING</h1>
      <div className='flex mt-8 gap-2'>
            <div className='flex items-center justify-center'>
                <div className='flex space-x-2'>
                    <a href='https://www.selenium.dev/documentation/webdriver/' target="_blank" rel="noopener noreferrer" className='text-pink-400 hover:text-pink-300 rounded-full glow p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <SiSelenium className='text-[60px]'/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
