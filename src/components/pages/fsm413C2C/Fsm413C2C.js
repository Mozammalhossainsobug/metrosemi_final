import React from 'react';
import './Fsm413C2C.css';
import { Link } from 'react-router-dom';
import imgAzx400 from '../../../images/FSM 413C2C.png';
import UpperFsm413C2C from '../fsm413C2C/UpperFsm413C2C/UpperFsm413C2C.js'

export default function Fsm413C2C() {
  return (
    <>
    <UpperFsm413C2C/>
    <div className='azx400'>

      <div className='row-Azx400'>
            <div className='col-sm-6'>
            <h3>Special Features</h3>
                <div className='feature-list'>
                    <li>
                    Measures Substrate Thickness in Multiple
Layers using <br/>Non-contact Optical System
                    </li>
                   
                    <li>
                    High Precision XY Stage (0.5m) (optional)
                    </li>
 
                    <li>
                    Pattern Recognition (optional)
                    </li>
 
                    <li>
                    Robotic Handling System
                    </li>
 
                    <li>
                    Programmable Data Points
                    </li>
 
                    <li>
                    Measures Silicon Via Depth with
Microscope Option</li>
 
                    <li>
                    Excellent Repeatability & Reproducibility
                    </li>
 
                    
                </div>
            </div>
            <div className='col-sm-6'>
            <h3>Specifications</h3>
            <table class="table table-Azx400">
            <tr >
            <td className='left-td'>Spot size:</td>
            <td >6&mu; ~40&mu;</td>
            </tr>
            <tr >
            <td className='left-td'>Working distance:</td>
            <td >~ 20mm</td>
            </tr>
            <tr >
            <td colspan="2" className='left-td'>Si Thickness range :</td>
            </tr>
                <tr >
                <td className='left-td'>Single Probe</td>
                <td>15 ~ 780um</td> 
                </tr>
                <tr >
                <td className='left-td'>Dual Probe</td>
                <td>~ 3mm</td> 
                </tr>
            
            <tr >
            <td className='left-td'>Wavelength:</td>
            <td >1.3&#177;0.03&mu;</td>
            </tr>
            
            </table>
            </div>

      </div>
    </div>
    </>
  )
}
