import React from 'react';
import './Fsm128.css';
import { Link } from 'react-router-dom';
import imgFsm128L from '../../../images/FSM-128L.png'
import imgFsm128C2C from '../../../images/FSM-128C2C.png'

export default function Fsm128() {
  return (
    <div className='fsm128'>
      
      <h3>FSM 128L</h3>
       <h5>Film stress and wafer bow measurement for wafers up to 300mm diameter. 2D/3D stress mapping standard. Semi-automated system with convenient wafer loading and retrieval.
</h5>
       
       
      <div class='row row1'>

            <div class="col-sm-5">
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
                <button type="button" class="btn btn-danger">GET A DATASHEET</button>
            </div>
            
            </div>

            <div class="col-sm-4">
                <img src={imgFsm128L} width="350" height="300" />
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


      <h3>FSM128 C2C</h3>
       <h5>Dedicated Film Stress mapping system with high resolution for high throughput process control for wafers up to 200mm diameter. Fully automated cassette to cassette, SECS/GEM Film Stress and Bow Measurement tool. Dual or single load port configurations available. Integrated wafer substrate thickness measurement available.</h5>
       
       
      <div class='row row1'>

            <div class="col-sm-5">
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
                <button type="button" class="btn btn-danger">GET A DATASHEET</button>
            </div>
            
            </div>

            <div class="col-sm-4">
                <img src={imgFsm128C2C} width="350" height="300" />
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

      
    </div>
  )
}
