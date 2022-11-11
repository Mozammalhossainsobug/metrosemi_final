import React from 'react';
import { Link } from 'react-router-dom';
import './azx400.css';
import imgAzx400 from '../../../images/AZX400.png';

export default function Azx400() {
  return (
    <div className='azx400'>
       <h3>AZX400 Film Thickness Measurement Instruments</h3>
      <div class='row row1'>

            <div class="col-sm-5">
            AZX 400 sequential wavelength dispersive X-ray fluorescence (WDXRF) spectrometer was specifically designed to handle very large and/or heavy samples. <br/><br/>
            Accepting samples up to 400 mm diameter, 50 mm thick and 30 kg mass, this system is ideal for analyzing sputtering targets, magnetic disks, or for multilayer film metrology or elemental analysis of large samples.
            <br/>
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
            <h3>Features</h3>
                <div className='feature-list'>
                    <li>
                    Large sample analysis
                        <ul>
                            <li>Up to 400 mm (diameter)</li>
                            <li>Up to 50 mm (thickness)</li>
                            <li>Up to 30 kg (mass)</li>
                        </ul>
                    </li>
                   
                    <li>
                    Sample adapter system
                    <ul>
                        <li>Adaptable to various sample sizes</li>
                    </ul>
                    </li>
 
                    <li>
                    Measurement spot
                    <ul>
                        <li>30 mm to 0.5 mm diameter</li>
                        <li>5-step automatic selection</li>
                    </ul>
                    </li>
 
                    <li>
                    Mapping capability
                    <ul>
                        <li>Allows multipoint measurements</li>
                    </ul>
                    </li>
 
                    <li>
                    Sample view camera (option)
                    </li>
 
                    <li>
                    General purpose
                    <ul>
                        <li>Analyze Be - U</li>
                        <li>Elemental range: ppm to %</li>
                        <li>Thickness range: sub Å to mm</li>
                    </ul>
                    </li>
 
                    <li>
                    Diffraction interference rejection (option)
 
                    <ul>
                        <li>Accurate results for single-crystal substrates</li>
                    </ul>
                    </li>
 
                    <li>
                    Compliance with industry standards
                    <ul>
                        <li>SEMI, CE marking</li>
                    </ul>
                    </li>
                    <li>
                    Small footprint
                    <ul>
                        <li>50% footprint of the previous model</li>
                    </ul>
                    </li>
                </div>
            </div>
            <div className='col-sm-6'>
            <h3>Specifications</h3>
            <table class="table table-Azx400">
            <tr >
            <td className='left-td'>Product name</td>
            <td >AZX 400</td>
            </tr>
            <tr >
            <td className='left-td'>Technique</td>
            <td >Sequential wavelength dispersive X-ray fluorescence</td>
            </tr>
            <tr >
            <td className='left-td'>Benefit</td>
            <td >Flexibility to measure a variety of sample types, including
50 - 300 mm wafers, coupons, and sputtering targets (up to 30 kg)</td>
            </tr>
            <tr >
            <td className='left-td'>Technology</td>
            <td >Analytical flexibility to measure elements from Be to U, well-suited for process R&D and low-volume, high product mix environments</td>
            </tr>
            <tr >
            <td className='left-td'>Core attributes</td>
            <td >4 kW sealed X-ray tube, Sequential type goniometer, Primary beam filter;  Measurement spot sizes 30, 20, 10, 1, and 0.5 mm (diameter)</td>
            </tr>
            <tr >
            <td className='left-td'>Core options</td>
            <td >Wafer Loader, SQX (Scan Quant. X) software, CCD Camera</td>
            </tr>
            <tr >
            <td className='left-td'>Computer</td>
            <td >External PC, MS Windows® OS, Software: film thickness/concentration simultaneous analysis software, Fundamental Parameter software for thin film analyses</td>
            </tr>
            <tr >
            <td className='left-td'>Core dimensions</td>
            <td >1376 (W) x 1710 (H) x 890 (D) mm</td>
            </tr>
            <tr >
            <td className='left-td'>Mass</td>
            <td >Approx. 800 kg (core unit)</td>
            </tr>
            <tr >
            <td className='left-td'>Power requirements</td>
            <td >3Ø, 200 VAC 50/60 Hz, 50 A</td>
            </tr>
            </table>
            </div>

      </div>

    </div>
  )
}
