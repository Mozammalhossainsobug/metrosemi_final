import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './UpperFsm413C2C.css';
import { Link } from 'react-router-dom';
import imgAzx400 from '../../../../images/FSM 413C2C.png';

export default function UpperFsm413C2C() {
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
    <div className='UpperFsm413C2C'>
      
      
      <h3>FSM 413C2C IR INTERFEROMETER</h3>
       <h5>Fully Automated High Resolution Substrate Thickness, Trench/Via Depth, Warp & Bow and TTY Mapper for Thin Wafer Application</h5>
       
       
      <div class='row row1'>

            <div class="col-sm-8">
            <h4>APPLICATION: BSI CIS, Chip Stacking, MEMS, TSV, Power Devices, Logic & Memory.</h4>
            <div className='feature-list'>
                <li>Thin Si wafer thickness down to 1 &mu;m-backgrinding uniformity</li>
                <li>Si/Si, Si/Tape, Glass/Si bonded wafer—bonding uniformity</li>
                <li>CMP - uniformity</li>
                <li>Trench/via (i.e. TSV) depth measurements- etch/scribe uniformity</li>
                <li>Surface roughness (option)</li>
                <li>Bump height (option)</li>
                <li>Trim depth and width (option)</li>
            </div>
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
