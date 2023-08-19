import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Upper900TC.css';

import img900TC from '../../../../images/FSM-900TC.png';
import { Link } from 'react-router-dom';

export default function Upper900TC() {
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
    <div className='Upper900TC'>
      <h3>FSM 900TC-Vac</h3>
       <h5>STRESS & BOW HEIGHT MEASUREMENT SYSTEM WITH HIGH TEMPERATURE VACUUM CHAMBER UP TO 900°C WITH THERMAL DESORPTION SPECTROSCOPY.</h5>
       
       
      <div class='row row1'>

            <div class="col-sm-8">
            <h4>Features</h4>
            <div className='feature-list'>
                <li>Wafer bow and film stress measurement at elevated temperatures</li>
                <li>User programmable thermal cycle capability under inert gas up to 500 C or vacuum
environment up to 900C.</li>
                <li>Vacuum chamber for 200mm or 300mm wafer.</li>
                <li>Ability to measure small to large bow from less than a micron to over a millimeter
using FSM’s patented Micro-positioning detector.</li>
                <li> Complete with Ion Source, 1-100 AMU Range Faraday Cup detector and system controller fully integrated into FSM 900TC main unit.</li>
                <li>Whole wafer monitoring up to 100 channels for trend monitoring. (Measurement of outgases or thermally desorbed species during temperature run).</li>
                <li>Spectroscopic data is collected simultaneously with stress measurement</li>
                <li>FSM Patented automatic dual laser and auto laser power adjustment to measure almost any film including reflective and translucent films</li>
                <li>Windows 7, 8 &10 operating system.</li>
                <li>Software for basic stress, radius, and wafer bow measurement</li>
                <li> Display of stress or bow vs temperature.</li>
                <li>Coefficient of thermal expansion calculation of unknown films (requires 2 different
substrates or knowledge of film’s mechanical constants, see application notes
for requirements).</li>
                <li>Export of tables, graphs and maps as jpeg files.</li>
            </div>
            <div class="btn-row1">
                <Link className='link' to='/contactUs'>
                    <button type="button" class="btn btn-danger">GET A QUOTE</button>
                </Link>
            </div>
            
            </div>

            <div class="col-sm-4">
                <img src={img900TC} />
            </div>

            
      </div>
    </div>
  )
}
