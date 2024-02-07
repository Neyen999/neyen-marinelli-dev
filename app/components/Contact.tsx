import React from 'react';
import '../styles/components/Contact.css'

export const Contact = () => {
  return (
    <section className="contact">
      <div className="formcontainer">
        <form id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/xbjqrygb" method="post">
          <p>¿Querés que trabajemos juntos? <br/><strong>¡Contactame!</strong></p>
          <fieldset id="fs-frm-inputs">
              <label htmlFor="full-name">Nombre Completo <span title='Obligatorio'>*</span></label>
              <input autoComplete="off" type="text" name="name" id="full-name" placeholder="Ingresa tu nombre..." required />
              <label htmlFor="email-address">Correo Electrónico <span title='Obligatorio'>*</span></label>
              <input autoComplete="off" type="email" name="_replyto" id="email-address" placeholder="tucorreo@example.com" />
              <label htmlFor="message">Mensaje <span title='Obligatorio'>*</span></label>
              <textarea rows={4} name="message" id="message" maxLength={200} placeholder="Si te interesa, podes enviarme un mensaje!"></textarea>
            <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
          </fieldset>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </section>
  )
};
