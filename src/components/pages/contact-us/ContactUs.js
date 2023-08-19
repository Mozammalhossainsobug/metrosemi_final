import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_janlptx', 'template_lphn18p', form.current, 'evtkoypK_Ltt6a-Q2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contactUs'>
         <h3 style={{ fontWeight: '600' }}>Contact Us</h3>

         <div className='div1'>
         <p>
         Use the form below for information 24 hours a day.
         <br/>call us at  (+1)408-4302470 (24 Hr, M-F).
         </p>
         </div>

         <form ref={form} onSubmit={sendEmail} class="form-div row">
            
              <div className='column'>
              <label className='form-label'>First Name:<br/>
              <input type="text" name="from_fname" class="input-contactUs" />
              </label>

              
              <label className='form-label'>E-mail Address:<br/>
              <input type="email" name="from_email" class="input-contactUs"/>
              </label>

              
              </div>



              <div className='column'>
              <label className='form-label'>Last Name:<br/>
              <input type="text" name="from_lname" class="input-contactUs" />
              </label>

              </div>
                
                
                
                
                
              <label className='form-label'>Optional Notes:<br/>
              <textarea type="text" name="message" className='optional-div' />
              </label>

              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckChecked">
              I consent to receive marketing and advertising emails from MetroSemi Corporation
              </label>
              </div>
              
              
              <input type="submit" value="Send" class="btn-danger contact_button" />
         </form>

    </div>
  );
};
