import React from 'react';
import './ContactUs.css';

export default function ContactUs() {
  return (
    <div className='contactUs'>
         <h3 style={{ fontWeight: '600' }}>Contact Us</h3>

         <div className='div1'>
         <p>
         Use the form below for information 24 hours a day. Our average response time is less than 3 minutes (M-F).
         <br/>You may also call us at +8801715013979 (24 Hr, M-F). Your call will be routed to an Applications Engineer in one of our worldwide offices.
         </p>
         </div>

         <form class="form-div row">
            
              <div className='column'>
              <label className='form-label'>First Name:<br/>
              <input type="text" name="firstName" />
              </label>

              <label className='form-label'>Last Name:<br/>
              <input type="text" name="lastName" />
              </label>

              <label className='form-label'>Company Name:<br/>
              <input type="text" name="companyName" />
              </label>

              <label className='form-label'>Direct my question to:<br/>
              <input type="text" name="question" />
              </label>
              </div>



              <div className='column'>
              <label className='form-label'>E-mail Address:<br/>
              <input type="email" name="email" />
              </label>

              <label className='form-label'>Telephone Number:<br/>
              <input type="tel" name="phoneNumber" />
              </label>

              <label className='form-label'>Country:<br/>
              <input type="country" name="country" />
              </label>

              </div>
                
                
                
                
                
              <label className='form-label'>Optional Notes:<br/>
              <textarea type="text" name="name" className='optional-div' />
              </label>

              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckChecked">
              I consent to receive marketing and advertising emails from MetroSemi Corporation
              </label>
              </div>

             
              <button type="button" class="btn btn-danger">CONTACT US</button>
         </form>

    </div>
  )
}
