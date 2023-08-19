import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './UpperAzx400.css';
import { Link } from 'react-router-dom';

import imgAzx400 from '../../../../images/AZX400.png';

export default function UpperAzx400() {
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
    <div className='UpperAzx400'> 
      <h3>AZX400 Film Thickness Measurement Instruments</h3>
      <div class='row row1'>

            <div class="col-sm-8">
            AZX 400 sequential wavelength dispersive X-ray fluorescence (WDXRF) spectrometer was specifically designed to handle very large and/or heavy samples. <br/><br/>
            Accepting samples up to 400 mm diameter, 50 mm thick and 30 kg mass, this system is ideal for analyzing sputtering targets, magnetic disks, or for multilayer film metrology or elemental analysis of large samples.
            <br/>
            <div class="btn-row1">
                <Link className='link' to='/contactUs'>
                    <button type="button" class="btn btn-danger">GET A QUOTE</button>
                </Link>
            </div>
            
            </div>

            <div class="col-sm-4">
                <img src={imgAzx400} width="350" height="300" />
            </div>

            
      </div>
    </div>
  )
}
