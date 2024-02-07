import React from 'react';
import '../styles/components/Information.css'
import '../styles/components/About.css'
import { FaJava, FaAws, FaDocker, FaArrowAltCircleDown } from 'react-icons/fa'
import { SiSpringboot, SiMysql, SiKubernetes, SiSonarqube } from 'react-icons/si'
import Image from 'next/image'
import ContractManagement from '../assets/CM.png'
import AcuerdoSencillo from '../assets/AC.png'

export const About = () => {
  function calcularEdadCompleta(anioNacimiento: number, mesNacimiento: number): number {
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth() + 1; // Los meses van de 0 a 11, por lo que sumamos 1.

    let anios = anioActual - anioNacimiento;
    let meses = mesActual - mesNacimiento;

    if (meses < 0) {
        anios--;
    }

    return anios;
  }
  return (
    <section className='about' id='about'>
      <div className="mydescription container">
        <div className='mydescription_info'>
        <h2>Sobre mi</h2>
          <p>
            Mi nombre es Neyen, tengo {calcularEdadCompleta(2000, 9)} años y soy un apasionado desarrollador con enfoque en el backend, me destaco en el uso de tecnologías como Java, Spring Boot, MySQL, Docker, Kubernetes y AWS. Estos conocimientos me permiten crear soluciones sólidas y escalables para diversos proyectos. Aunque mi formación como frontend y desarrollo web es complementaria, mi especialización y experiencia principal se encuentran en el desarrollo backend, donde disfruto aplicando mis habilidades para crear sistemas robustos y eficientes.<br/><br/>
          </p>
          <div className="education">
            <img src="https://i.postimg.cc/FH24DhPJ/descarga-removebg-preview.png" className='universidad' alt="Universidad Nacional de Quilmes logo" />
            <img src="https://i.postimg.cc/Xvd0Pth1/Platzi-removebg-preview.png" className='platzi' alt="Platzi logo" />
            <img src="https://i.postimg.cc/63JqRR27/udemylogo-freelogovectors-net-400x160-removebg-preview.png" className='udemy' alt="Udemy logo" />
          </div>
          <p>
            Me gusta mucho hacer deportes, aprender cosas nuevas de todo tipo, y estar en ambientes donde pueda crecer como persona y profesional. Tengo facilidad para aprender cosas nuevas y llevarlas a la practica. Me especializo en <strong>backend</strong>, pero me gustaría aprender más sobre desarrollo <strong>frontend</strong>. Parte de mi stack <b>a continuación:</b>
            <br/><br/>
          </p>
          <div className="mystack">
            <FaJava className='babel'/>
            <FaAws className='redux'/>
            <FaDocker className='styled'/>
            <SiSpringboot className='types'/>
            <SiMysql className='webapck'/>
            <SiKubernetes className='react'/>
          </div>
        </div>
        <div className='mydescription_projects'>
          <div className='mydescription_projects_description'>
              <p>Entre mis proyectos personales de Backend se encuentran <strong>UserManagementSystem</strong> y <strong>RemindMeDolar</strong></p>
          </div>
          <div className="experience_projects">
            <div className="project-box">
                <Image src={ContractManagement} className='project-image' alt='image'/>
                <div className="project-description">
                  <p>Contract Management.</p>
                </div>
                <a href='https://www.linkedin.com/posts/asap-consulting-s%2Ea%2E_asap-wisoft-software-activity-7149036858528743424-aht4?utm_source=share&utm_medium=member_desktop' target='_blank' className="read-more">Ver más</a>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
