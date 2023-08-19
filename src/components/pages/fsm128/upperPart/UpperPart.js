import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './UpperPart.css';
import { Link } from 'react-router-dom';
import imgFsm128L from '../../../../images/FSM-128L.png';
import imgFsm128C2C from '../../../../images/FSM-128C2C.png'

export default function UpperPart() {
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
    <div className='Fsm128UpperPart'>
     
        <h3>FSM 128L</h3>
        <h5>Film stress and wafer bow measurement for wafers up to 300mm diameter. 2D/3D stress mapping standard. Semi-automated system with convenient wafer loading and retrieval.
        </h5>
       
       
      <div class='row row1'>

            <div class="col-sm-8">
            <h4>Features</h4>
            <div className='feature-list'>
                <li>Accept wafer up to 300mm.</li>
                <li> Patented automatic dual laser switching.</li>
                <li>Motorized rotational stage for 2D film stress and wafer bow mapping.</li>
                <li> Capable of measuring very bow wafers of up to 300um bow height.</li>
                <li> Windows 7,8,10 &11 operating system.</li>
                <li>Software for stress, radius and wafer bow.</li>
                <li>Export of data to excel.</li>
                <li>Export of tables, graphs and maps as jpeg files.</li>
            </div>
            <div class="btn-row1">
                <Link className='link' to='/contactUs'>
                    <button type="button" class="btn btn-danger">GET A QUOTE</button>
                </Link>
            </div>
            
            </div>

            <div class="col-sm-4">
            <img src={imgFsm128L} width="350" height="300" />
            </div>

            

            
      </div>
       </div>
  )
}
