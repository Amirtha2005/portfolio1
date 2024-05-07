import React from 'react'
import ems from '../assets/ems.jpg'
import task from '../assets/task.jpg'
import p from '../assets/p.jpg'
import bot from '../assets/bot.jpg'

export default function Projects() {
  return (
    <div id='Project' className='p-20 flex flex-col items-center justify-center'>
      <h1 className='text-[52px] font-semibold mb-20 leading-normal uppercase text-white'>Projects</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20 '>
        <a href='https://employee-management-system-2024.netlify.app/' target="_blank" rel="noopener noreferrer" className='img_glow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><img src={ems} alt=''/></a>
        <a href='https://taskmanager2005.netlify.app/' target="_blank" rel="noopener noreferrer" className='img_glow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><img src={task} alt=''/></a>
        <a href='' target="_blank" rel="noopener noreferrer" className='img_glow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><img src={p} alt=''/></a>
        <a href='https://ems-bot-2024.netlify.app/' target="_blank" rel="noopener noreferrer" className='img_glow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><img src={bot} alt=''/></a>
      </div>
    </div>
  )
}
