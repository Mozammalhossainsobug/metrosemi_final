import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './f20Series.css';
import imgf20s from '../../../images/F20s.png';
import imgf50com from '../../../images/f50_compare.png';
import imgNIST from '../../../images/f50_NIST.png';
import imgSmall from '../../../images/f50_small.png';
import imgChuck from '../../../images/f50_chuck.png';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function F20Series() {
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
    <div className='f20Series'>
      <h3>F50 Film Thickness Measurement Mapping Instrument</h3><br/><br/>
      <div class='row row1'>

            <div class="col-sm-8">
            The Filmetrics® F50 family of products can map film thickness as quickly as two points per second. A motorized R-Theta stage accepts standard and custom chucks for samples up to 450mm in diameter. (This is the same high-lifetime stage that performs millions of measurements in our production systems!)<br/><br/>
            Map patterns can be polar, rectangular, or linear, or you can create your own with no limit on the number of measurement points. Dozens of pre-defined map patterns are supplied.<br/><br/>
            The F50 film thickness mapping system connects to the USB port of your Windows® computer and can be set up in minutes.<br/><br/>
            The different F50 instruments are distinguished primarily by thickness and wavelength range. The standard F50 is the most popular. Generally shorter wavelengths (e.g. F50-UV) are required for measurement of thinner films, while longer wavelengths allow measurement of thicker, rougher, and more opaque films.
            <div class="btn-row1">
                <Link className='link' to='/contactUs'>
                    <button type="button" class="btn btn-danger">GET A QUOTE</button>
                </Link><br/><br/><br/>
            </div>           
            </div>

            <div class="col-sm-4">
                <img src={imgf20s} />
            </div>

            
      </div>
      <div class="row row2">
            <div class="col-lg-6">
            <h3>Model Specifications</h3><br/>
              <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Model</th>
      <th scope="col">Thickness Range*</th>
      <th scope="col">Wavelength Range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="f50_col1">F50</td>
      <td class="f50_col2">20nm - 70µm</td>
      <td>380-1050nm</td>
    </tr>
    <tr>
      <td class="f50_col1">F50-UV</td>
      <td class="f50_col2">5nm - 40µm</td>
      <td>190-1100nm</td>
    </tr>
    <tr>
      <td class="f50_col1">F50-NIR</td>
      <td class="f50_col2">100nm - 250µm</td>
      <td>950-1700nm</td>
    </tr>
    <tr>
      <td class="f50_col1">F50-EXR</td>
      <td class="f50_col2">20nm - 250µm</td>
      <td>380-1700nm</td>
    </tr>
    <tr>
      <td class="f50_col1">F50-UVX</td>
      <td class="f50_col2">5nm - 250µm</td>
      <td>190-1700nm</td>
    </tr>
    <tr>
      <td class="f50_col1">F50-XT</td>
      <td class="f50_col2">0.2µm - 450µm</td>
      <td>1440-1690nm</td>
    </tr>
    <tr>
      <td class="f50_col1">F50-s980</td>
      <td class="f50_col2">4µm - 1mm</td>
      <td>960-1000nm</td>
    </tr>
    <tr>
      <td class="f50_col1">F50-s1310</td>
      <td class="f50_col2">7µm - 2mm</td>
      <td>1280-1340nm</td>
    </tr>
    <tr>
      <td class="f50_col1">F50-s1550</td>
      <td class="f50_col2">10µm - 3mm</td>
      <td>1520-1580nm</td>
    </tr>
  </tbody>
</table>

            </div>
            <div class="col-lg-6">
            <h3>Thickness Range*</h3><br/>
            <img src={imgf50com} />
            </div>
      </div>


      <div class="row f50_row3">
            <center><h3>What’s Included</h3></center>
            <div class="col-lg-6">
                  <ul>
                      <li>Integrated spectrometer/light source unit</li>
                      <li>4", 6" and 200mm wafer reflectance standards</li>
                      <li>BK7 reflectance standard</li>
                      <li>Vacuum pump</li>
                  </ul>
            </div>
            <div class="col-lg-6">
                  <ul>
                      <li>fiber optic cable</li>
                      <li>TS-SiO2-4-7200 Thickness standard</li>
                      <li>Flattening filter (for highly-reflective substrates)</li>
                      <li>Spare TH-1 lamp</li>
                  </ul>
            </div>
      </div>
      <div class="row f50_row3">
            <center><h3>Additional Perks</h3></center>
            <div class="col-lg-6">
                  <ul>
                      <li>Library with over 130 materials included with every system, along with access to 100s more</li>
                      <li>Online "Hands On" support</li>
                  </ul>
            </div>
            <div class="col-lg-6">
                  <ul>
                      <li>Applications Engineers available for immediate 24-hour assistance (Mon-Fri)</li>
                      <li>Hardware upgrade program</li>
                  </ul>
            </div>
      </div>



      <div class="row f50_row4">
            <h3>Common Optional Accessories</h3>
            
            <div class="row row4_pic">

              <div class="col-lg-3 col-sm-1">
              <img src={imgNIST} />
              
               NIST-tracebale thickness standard
              
              </div>

              <div class="col-lg-3 col-sm-1">
              <img src={imgChuck} />
              
                F50 chuck - 100mm, 200mm, 300mm and 450mm (F50-450 req'd for 450mm chuck)
              
              </div>

              <div class="col-lg-3 col-sm-1">
              <img src={imgSmall} />
              
                F50 small spot option, VIS or UV 
              
              </div>

            </div>
                 
                
                
                
                          
            
      </div>



    </div>
  )
}
