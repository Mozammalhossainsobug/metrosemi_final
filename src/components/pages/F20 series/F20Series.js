import React from 'react';
import './f20Series.css';
import imgf20s from '../../../images/F20s.png'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function F20Series() {
  return (
    <div className='f20Series'>
      <h3>F20 Series Film Thickness Measurement Instruments</h3>
      <div class='row row1'>

            <div class="col-sm-5">
            F20s are general-purpose film thickness measurement instruments, and are used in thousands of applications worldwide. Thickness and refractive index can be measured in less than a second. Like all of our thickness measurement instruments, the F20 connects to the USB port of your Windows® computer and sets up in minutes.
            <br/><br/>The different F20 instruments are distinguished primarily by the thickness measurement range, which in turn is determined by the instrument's wavelength range. The standard F20 is our most popular product.
            <br/>
            <div class="btn-row1">
                <Link className='link' to='/contactUs'>
                    <button type="button" class="btn btn-danger">GET A QUOTE</button>
                </Link>
                <button type="button" class="btn btn-danger">GET A DATASHEET</button>
            </div>
            
            </div>

            <div class="col-sm-4">
                <img src={imgf20s} width="350" height="300" />
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
