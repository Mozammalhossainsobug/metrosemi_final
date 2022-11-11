import React from 'react';
import './Fsm413C2C.css';
import { Link } from 'react-router-dom';
import imgAzx400 from '../../../images/FSM 413C2C.png';

export default function Fsm413C2C() {
  return (
    <div className='azx400'>
      
       <h3>FSM 413C2C IR INTERFEROMETER</h3>
       <h5>Fully Automated High Resolution Substrate Thickness, Trench/Via Depth,
Warp & Bow and TTY Mapper for Thin Wafer Application
</h5>
       
       
      <div class='row row1'>

            <div class="col-sm-5">
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
                <button type="button" class="btn btn-danger">GET A DATASHEET</button>
            </div>
            
            </div>

            <div class="col-sm-4">
                <img src={imgAzx400} width="350" height="300" />
            </div>

            <div class="col-sm-3">
                <form class="col-f20Series">
                    <div className='col-f20Series-tittle'>CONTACT US NOW</div>
                    <p className='f20Series-para'>We love talking about thin films so we’ll reply in just a minute or two. (M-F)</p>
                    <input type="text" placeholder='Your Name' className='f20Series-fill'></input>
                    <input type="email" placeholder='E-mail or Phone' className='f20Series-fill'></input>
                    <textarea type="textarea" placeholder='Message' className='f20Series-fill'></textarea>
                    <button type="button" class="btn btn-danger">CONTACT US NOW</button>
                </form>
            </div>
      </div>

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
  )
}
