import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Upper500TC.css';
import { Link } from 'react-router-dom';
import img500TC from '../../../../images/FSM-500TC.png'

export default function Upper500TC() {
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
    <div className='Upper500TC'>
      <h3>FSM 500TC</h3>
       <h5>Stress Hysteresis Measurement up to 500C for thermal property and stability tests of thin films during thermal cycling up to 900 degrees C in inert gas. Non-Contact Laser Scanning Technology.</h5>
       
       
      <div class='row row1'>

            <div class="col-sm-8">
            <h4>Features</h4>
            <div className='feature-list'>
                <li>Film Stress & Wafer Bow Measurements.</li>
                <li>Auto Dual Lasers and Long Z Detector.</li>
                <li>Stress Range : 1 MPa to 1.4 GPa.</li>
                <li>Wafer size & Shape: round, square, rectangular (20 mm to 200mm ).</li>
                <li>Inert gas purge : Nitrogen or Argon.</li>
                <li>Software :  Film Stress ( ambient), Film Stress vs Temp, Wafer bow vs temperature, Programmable Heating or annealing, export of graphs as jpeg files, data to excel.</li>
                <li> Temperature Range:  <br/>Ambient to 500 deg C: <br/>Option: Ambient to 65 deg C</li>
            </div>
            <div class="btn-row1">
                <Link className='link' to='/contactUs'>
                    <button type="button" class="btn btn-danger">GET A QUOTE</button>
                </Link>
            </div>
            
            </div>

            <div class="col-sm-4">
                <img src={img500TC} width="350" height="300" />
            </div>

            
      </div>
    </div>
  )
}
