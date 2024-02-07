import React from 'react'
import Image from 'next/image'
import '../styles/components/Information.css'
import '../styles/components/Experience.css'
import { SiRedux, SiStyledcomponents, SiTypescript, SiWebpack, SiBabel } from 'react-icons/si'
import ContractManagement from '../assets/CM.png'
import AcuerdoSencillo from '../assets/AC.png'


export const Experience = () => {
  function calcularDiferenciaDeAnios(anio: number): number {
    const anioActual: number = new Date().getFullYear();
    const diferencia: number = anioActual - anio;
  
    return diferencia;
  }
  return (
    <section className='experience' id='experience'>
        <div className="myexperience">
          <div className="container experience_description">
            <h2>Mi experiencia</h2>
            <p>
              Trabajo como desarrollador backend desde hace {calcularDiferenciaDeAnios(2022)} años, entre mis principales tareas se encuentran el desarrollo y mantenimiento de aplicaciones web y móbiles, participando continuamente en la selección de las herramientas necesarias para llevar a cabo los objetivos planteados. También me desempeño en el área de DevOps llevando a cabo la creación de los distintos ambientes de desarrollo generando de esa forma aplicaciones listas para producción. <br/><br/>
              Entre los proyectos en los cuales participé se encuentran <strong>WiSoft Contract Management</strong> y <strong>Acuerdo Sencillo</strong>.
            </p>
          </div>
          <div className="container experience_projects">
            <div className="project-box">
              <Image src={ContractManagement} className='project-image' alt='image'/>
              {/* <img className="project-image" src="../assets/AC.png" alt="Descripción de la imagen1"/> */}
              <div className="project-description">
                <h3>Contract Management.</h3>
                <p>Esta innovadora aplicación facilita la administración de las tareas durante la contratación y pago de proveedores, la compra del terreno, la venta y el cobro de unidades, tanto como la evaluación económica completa de la gestión.</p>
                <a href='https://www.linkedin.com/posts/asap-consulting-s%2Ea%2E_asap-wisoft-software-activity-7149036858528743424-aht4?utm_source=share&utm_medium=member_desktop' target='_blank' className="read-more">Ver más</a>

              </div>
            </div>

            <div className="project-box">
              <Image src={AcuerdoSencillo} className='project-image' alt='image'/>
              {/* <img className="project-image" src="../assets/CM.png" alt="Descripción de la imagen2"/> */}

              <div className="project-description">
                <h3>Acuerdo Sencillo.</h3>
                <p>Esta plataforma no sólo resuelve problemas comunes que enfrentan quienes buscan servicios legales, sino que también allana el camino hacia una digitalización más amplia en el campo del Derecho.
                  Ante la demanda de una sociedad más exigente, el área legal se enfrenta al desafío de adoptar y poner en práctica soluciones Legaltech para abordar las nuevas necesidades que el sector jurídico por sí solo no puede gestionar. Como consecuencia, se ha producido un notable incremento en las inversiones tecnológicas en la industria legal.</p>
                <a href='https://www.enlacetecno.com.ar/nace-acuerdo-sencillo-la-primera-legaltech-argentina/' target='_blank' className="read-more">Ver más</a>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
