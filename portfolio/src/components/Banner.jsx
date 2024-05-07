import React from 'react'
import { FaGithubAlt } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import img from '../assets/Videos.jpg'

export default function Banner() {
  return (
    <div id='Home' className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
        <h1 className='text-[52px] font-semibold mb-8 leading-normal'>Welcome To <span className='text-fuchsia-500'>My Portfolio</span></h1>
        <p>One area that has always captivated me is web designing, where creativity converges with technology to craft immersive digital experiences. Additionally, my fascination with gaming technologies drives me to explore the intersection of entertainment and innovation.</p>
        <br/>
        <p>I'm on a relentless pursuit to harness the power of technology to make a meaningful impact, and I'm excited about the endless possibilities that lie ahead in this dynamic field.</p><br/>
        <p>Let's connect and embark on this exhilarating journey together!</p>
        <div className='flex mt-8 gap-2'>
            <div className='flex items-center justify-center'>
                <div className='flex space-x-2'>
                    <a href='https://github.com/Amirtha2005' target="_blank" rel="noopener noreferrer" className='text-fuchsia-500 hover:text-fuchsia-500 rounded-full glow p-2'>
                    <FaGithubAlt className='text-[30px]'/>
                    </a>
                    <a href='https://www.linkedin.com/in/amirthavarshini2005/' target="_blank" rel="noopener noreferrer" className='text-fuchsia-500 hover:text-fuchsia-500 rounded-full glow p-2'>
                    <LiaLinkedinIn className='text-[30px]'/>
                    </a>
                    <a href='https://leetcode.com/u/Amirtha_hacker/' target="_blank" rel="noopener noreferrer" className='text-fuchsia-500 hover:text-fuchsia-500 rounded-full glow p-2'>
                    <SiLeetcode className='text-[30px]'/>
                    </a>
                    <a href='' target="_blank" rel="noopener noreferrer" className='text-fuchsia-500 hover:text-fuchsia-500 rounded-full glow p-2'>
                    <FaInstagram className='text-[30px]'/>
                    </a>
                </div>
            </div>
        </div>
      </div>
      <img src={img} width={290} height={290} className='rounded-full border-2 border-fuchsia-500 img_glow' alt=''/>
    </div>
  )
}
