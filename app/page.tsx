'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Loader } from './components/Loader';
import { Banner } from './components/Banner';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Experience } from './components/Experience';


export default function Page() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])
  return (
    <>
      {
        isLoading ? <Loader /> :
        <>
        <Banner />
        <About />
        <Experience />
        {/* <ProjectsContainer /> */}
        <Contact />
        </>
      }
    </>
  )
}
