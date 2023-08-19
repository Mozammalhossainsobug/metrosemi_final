import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './LowerPart.css';
import { Link } from 'react-router-dom';
import imgFsm128C2C from '../../../../images/FSM-128C2C.png'

export default function LowerPart() {
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
    <div className='Fsm128LowerPart'>
      
      <h3>FSM128 C2C</h3>
       <h5>Dedicated Film Stress mapping system with high resolution for high throughput process control for wafers up to 200mm diameter. Fully automated cassette to cassette, SECS/GEM Film Stress and Bow Measurement tool. Dual or single load port configurations available. Integrated wafer substrate thickness measurement available.</h5>
       
       
      <div class='row row1'>

            <div class="col-sm-8">
            <h4>Features</h4>
            <div className='feature-list'>
                <li>Robotic cassette to cassette Film Stress measurement system</li>
                <li> Single open cassette load port configuration</li>
                <li> Fully automatic loading of 200mm wafers from open cassette</li>
                <li> Notch Pre-Aligner</li>
                <li> Patented automatic dual laser to cover measurement of a wide range of films </li>
                <li> Motorized rotational stage for mapping up to 32-line scans providing 2D and 3D film stress and wafer bow maps</li>
                <li> 2D/3D film stress and wafer bow maps</li>
                <li> High speed with throughput of greater than 50 wafers/hour </li>
                <li> Capable of measuring very bowed wafers of up to 300μm bow height.</li>
                <li> Windows 7, 8, 10 &11 operating system.</li>
                <li> Software for stress, radius and wafer bow.</li>
            </div>
            <div class="btn-row1">
                <Link className='link' to='/contactUs'>
                    <button type="button" class="btn btn-danger">GET A QUOTE</button>
                </Link>
            </div>
            
            </div>

            <div class="col-sm-4">
                <img src={imgFsm128C2C} width="350" height="300" />
            </div>

            
      </div>

    </div>
  )
}
