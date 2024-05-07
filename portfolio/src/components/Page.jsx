import React from 'react'
import Frontend from './skills/Frontend'
import Backend from './skills/Backend'
import {Link} from 'react-scroll'
import Tools from './skills/Tools'
import Language from './skills/Language'
import Database from './skills/Database'
import Testing from './skills/Testing'
import Cloud from './skills/Cloud'
import {useNavigate} from 'react-router-dom';



export default function Page() {

    const Navigate= useNavigate();

    const handleClick=(e)=>{
        Navigate("/")
    }
    
  return (
    <div className='bg-slate-900 '>
        <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-6 border-b border-slate-800'>
            <div className='flex items-center flex-1'>
                <span className='text-3xl font-bold animate-bounce'>SKILLS</span>
            </div>
            <div className='lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden'>
                <div className='flex-10'>
                <ul className='flex gap-4 mr-16 text-[18px]'>
            <Link spy={true} smooth={true} to='Frontend'>
                <li className='hover:text-fuchsia-500 transition border-b-2 border-slate-900 hover:border-fuchsia-500 cursor-pointer'>Frontend</li>
            </Link>
            <Link spy={true} smooth={true} to='Backend'>
                <li className='hover:text-fuchsia-500 transition border-b-2 border-slate-900 hover:border-fuchsia-500 cursor-pointer'>Backend</li>
            </Link>
            <Link spy={true} smooth={true} to='Tools'>
                <li className='hover:text-fuchsia-500 transition border-b-2 border-slate-900 hover:border-fuchsia-500 cursor-pointer'>Tools</li>
            </Link>
            <Link spy={true} smooth={true} to='Languages'>
                <li className='hover:text-fuchsia-500 transition border-b-2 border-slate-900 hover:border-fuchsia-500 cursor-pointer'>Languages</li>
            </Link>
            <Link spy={true} smooth={true} to='Database'>
                <li className='hover:text-fuchsia-500 transition border-b-2 border-slate-900 hover:border-fuchsia-500 cursor-pointer'>Database</li>
            </Link>
            <Link spy={true} smooth={true} to='Testing'>
                <li className='hover:text-fuchsia-500 transition border-b-2 border-slate-900 hover:border-fuchsia-500 cursor-pointer'>Testing</li>
            </Link>
            <Link spy={true} smooth={true} to='Cloud'>
                <li className='hover:text-fuchsia-500 transition border-b-2 border-slate-900 hover:border-fuchsia-500 cursor-pointer'>Cloud</li>
            </Link>
            <Link spy={true} smooth={true} to='Home' onClick={handleClick}>
                <li className='hover:text-fuchsia-500 transition border-b-2 border-slate-900 hover:border-fuchsia-500 cursor-pointer'>Home</li>
            </Link>
        </ul>
                </div>
            </div>
        </div>
      <Frontend/>
      <Backend/>
      <Tools/>
      <Language/>
      <Database/>
      <Testing/>
      <Cloud/>
    </div>
    
  )
}
