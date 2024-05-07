import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Skills() {

  const Navigate= useNavigate();

  const handleClick=(e)=>{
    e.preventDefault();
    Navigate("/skillpage")
    window.scrollTo({top:0 , behavior: 'smooth'})
  }


  return (
    <div id='Skills' className='p-20 flex flex-col items-center justify-center'>
        <h1 className='text-[52px] font-semibold mb-20 leading-normal uppercase text-white'>Skills</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-40 '>

        <a className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' onClick={handleClick}>
        <div  className='rounded-lg border-solid border-1 border-indigo-600 text-white p-4 w-60 sm:w-65 h-32 flex justify-center items-center  box_glow '>
        <h2>FRONTEND TECHNOLOGIES</h2>
        </div>
        </a>
        <a className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' onClick={handleClick}>
        <div className='rounded-lg border-solid border-1 border-indigo-600 text-white p-4 w-60 sm:w-65 h-32 flex justify-center items-center box_glow'>
        <h2>BACKEND TECHNOLOGIES</h2>
        </div>
        </a>
        <a className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' onClick={handleClick}>
        <div className='rounded-lg border-solid border-1 border-indigo-600 text-white p-4 w-60 sm:w-65 h-32 flex justify-center items-center  box_glow'>
        <h2>DATABASE TECHNOLOGIES</h2>
        </div>
        </a>
        <a className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' onClick={handleClick}>
        <div className='rounded-lg border-solid border-1 border-indigo-600 text-white p-4 w-60 sm:w-65 h-32 flex justify-center items-center box_glow'>
        <h2>TESTING TECHNOLOGIES</h2>
        </div>
        </a>
        <a className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' onClick={handleClick}>
        <div className='rounded-lg border-solid border-1 border-indigo-600 text-white p-4 w-60 sm:w-65 h-32 flex justify-center items-center box_glow'>
        <h2>CLOUD TECHNOLOGIES</h2>
        </div>
        </a>
        <a className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' onClick={handleClick}>
        <div className='rounded-lg border-solid border-1 border-indigo-600 text-white p-4 w-60 sm:w-65 h-32 flex justify-center items-center box_glow'>
        <h2>PROGRAMMING LANGUAGES </h2>
        </div>
        </a>
        <a className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' onClick={handleClick}>
        <div className='rounded-lg border-solid border-1 border-indigo-600 text-white p-4 w-60 sm:w-65 h-32 flex justify-center items-center box_glow'>
        <h2>TOOLS</h2>
        </div>
        </a>
        <a className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' onClick={handleClick}>
        <div className='rounded-lg border-solid border-1 border-indigo-600 text-white p-4 w-60 sm:w-65 h-32 flex justify-center items-center box_glow'>
        <h2>SOFTSKILLS</h2>
        </div>
        </a>
            
        </div>
    </div>
  )
}
