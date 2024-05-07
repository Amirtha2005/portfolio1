import React from 'react'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Me from './components/Me'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Page from './components/Page'
import { useState, useEffect } from 'react'
import RingLoader from "react-spinners/RingLoader";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

  const[loading, setLoading]=useState(false)
  const[color, setColor]=useState("#22d3ee")

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])

  return (
    <>
    {
      loading?
      <div className='bg-slate-900 min-h-screen flex justify-center items-center'>
      <RingLoader color={color} loading={loading} size={150}/>
      </div>
      :

    <BrowserRouter>
    <Routes>
      <Route path='/' element={
      <div className='bg-slate-900 '>
      <Nav/>
      <Banner/>
      <Me/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    }/>
    <Route path='/skillpage' element={<Page/>}/>
    </Routes>
    </BrowserRouter>
    }
    </>
  )
}
