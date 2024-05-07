import React from 'react'

export default function Footer() {
  return (
    <div >
      <footer className='bg-slate-800 text-white lg:px-48 px-4 py-10'>
        <div className='container mx-auto grid grid-cols-2 md:grid-cols-3 gap-6'>
            <div className='mb-4 md:mb-0'>
                <span className='text-[22px] font-semibold '><u>Amirtha Varshini R</u></span>
                <p className='my-4'>My journey in the realm of computer science is fueled by an insatiable hunger for learning and growth. Every day, I dive into new challenges, striving to expand my skill set and embrace emerging technologies.</p>
            </div>
            <div>
                <h2 className='text-[22px] font-semibold '><u>Interests</u></h2>
                <ul>
                    <li className='my-4'>Web Design</li>
                    <li>Problem Solving</li>
                    <li className='my-4'>Gaming Technologies</li>
                    <li>UI/UX</li>
                    <li className='my-4'>Frontend Technologies</li>
                </ul>
            </div>
            <div>
                <h2 className='text-[22px] font-semibold'><u>Contacts</u></h2>
                <ul>
                    <li className='my-4'>91+ 8903398868 </li>
                    <li>2005amirthavarshini@gmail.com</li>
                </ul>
            </div>
        </div>
      </footer>
    </div>
  )
}
