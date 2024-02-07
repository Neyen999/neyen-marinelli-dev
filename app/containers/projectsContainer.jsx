import React from 'react'
import { ProjectDetail } from '../components/ProjectDetail'
import '../styles/containers/projectContainer.css'
import { FaReact } from 'react-icons/fa'
import { SiRedux, SiStyledcomponents, SiSass, SiTypescript, SiWebpack, SiBabel, SiGraphql } from 'react-icons/si'

export const ProjectsContainer = () => {
  const descriptions = {
    platziStore: <p className='project-description'><strong>Platzi store</strong> es un proyecto realizado en la Escuela de Desarrollo Web de Platzi, es la primera introducción que tuve a <strong>Redux</strong></p>,
    aerolab: <p className='project-description'>El <strong>Aerolab Challenge</strong> es un desafío propuesto por Aerolab, donde debemos consumir su <a href='https://aerolabchallenge.docs.apiary.io/#'>API</a> para obtener datos de usuario y productos, y mediante peticiones <b>POST</b> agregar productos a la lista del usuario y también añadir puntos. <br/>Más información en: <a href='https://aerolabchallenge.docs.apiary.io/#'>Goncy/aerolab-challenge</a> </p>,
    petgram: <p className='project-description'><strong>Pegram</strong> es una aplicación realizada con <b>React</b>, <b>Styled components</b> y <b>Webpack</b>, con Backend en <strong>Vercel</strong>. También utilicé herramientas como <strong>react-icons, reach-router, react-apollo, react-helmet y propTypes</strong>, y utilizando autenticación con <b>JWT</b></p>,
    urlShort:  <p className='project-description'><strong>URL Shortener</strong> es un proyecto de <a href='https://www.frontendmentor.io/'>FrontEndMentor.io</a>,  donde mediante el consumo de una API, recibimos una URL por parte del usuario, recortando la misma.</p>
  }

  return (
    <section className="plans" id="proyectos">
      <div className="proyectos-destacados">
        <h2>Proyectos Destacados</h2>
        <article>
          <ProjectDetail 
            projectName="Platzi Store"
            deploySite="Netlify" 
            deploySiteUrl="https://platzi-conf-merch-neyen.netlify.app/" 
            repositoryUrl="https://github.com/Neyen999/platziconf-merch"
            description={descriptions.platziStore}
            pictureClass="platzistore"
            >
            <SiRedux className='redux'/>
            <FaReact className='react'/> 
            <SiWebpack className='webpack'/>
            <SiBabel className='babel'/>
          </ProjectDetail>
        </article>
        <article>
          <ProjectDetail
          projectName="Aerolab Challenge"
          deploySite="Netlify" 
          deploySiteUrl="https://aerolab-challenge-neyenmarinelli.netlify.app/" 
          repositoryUrl="https://github.com/Neyen999/the-aerolab-challenge"
          description={descriptions.aerolab}
          pictureClass="aerolab">
            <SiRedux className='redux'/>
            <SiTypescript className='types'/>
            <FaReact className='react'/> 
            <SiWebpack className='webpack'/>
            <SiBabel className='babel'/>
          </ProjectDetail>
        </article>
        <article>
          <ProjectDetail
            projectName="Petgram"
            deploySite="Vercel" 
            deploySiteUrl="https://petgram-tan-eta.vercel.app/" 
            repositoryUrl="https://github.com/Neyen999/petgram"
            description={descriptions.petgram}
            pictureClass="petgram">
              <SiGraphql className='styled'/>
              <FaReact className='react'/>
              <SiStyledcomponents className='styled'/>
          </ProjectDetail>
        </article>
        <article>
          <ProjectDetail
            projectName="URL Shortener"
            deploySite="Github Pages" 
            deploySiteUrl="https://github.com/Neyen999/url-shortener" 
            repositoryUrl="https://github.com/Neyen999/url-shortener"
            description={descriptions.urlShort}
            pictureClass="shortener">
              <FaReact className='react'/> 
              <SiSass className='sass'/>
          </ProjectDetail>
        </article>
      </div>
    </section>
  )
}
