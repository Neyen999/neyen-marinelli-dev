import React from 'react'
import { PictureGrid } from './PictureGrid'
import { FcDownload } from 'react-icons/fc'
import { FaJava, FaAws, FaDocker, FaArrowAltCircleDown } from 'react-icons/fa'
import { SiSpringboot, SiMysql, SiKubernetes, SiSonarqube } from 'react-icons/si'


import { SiRedux, SiStyledcomponents, SiTypescript, SiWebpack, SiBabel } from 'react-icons/si'
import '../styles/components/Banner.css'
import '../styles/components/Information.css'

export const Banner = () => {

  return (
    <section className="banner">
      <div className="banner__presentation">
        <div>
        <h3>Desarrollador Backend</h3>
        <h1>Neyen E.<br/> Marinelli</h1>
        <a href="#about">
          Más sobre mi 
          {/* <span> */}
            <FaArrowAltCircleDown />
          {/* </span> */}
        </a>
        </div>
      </div>
      <PictureGrid>
        <FaAws className='react'/>
        <FaJava className='redux'/>
        <FaDocker className='styled'/>
        <SiSpringboot className='types'/>
        <SiKubernetes className='webpack'/>
        <SiMysql className='babel'/>
        <a href="https://drive.google.com/file/d/1khhp3M46PM3EUrxQOb7gbgU0SwZZWkua/view?usp=drive_link" download className="main__banner--cv">
          Descargar CV
          <FcDownload />
        </a>
      </PictureGrid>
    </section>
  )
};
