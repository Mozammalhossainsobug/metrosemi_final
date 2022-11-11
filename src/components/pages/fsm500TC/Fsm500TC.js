import React from 'react';
import './Fsm500TC.css';
import { Link } from 'react-router-dom';
import img500TC from '../../../images/FSM-500TC.png'
import img500TC2 from '../../../images/FSM-500TC(2).png'

export default function Fsm500TC() {
  return (
    <div className='fsm500TC'>
      
      <h3>FSM 500TC</h3>
       <h5>Stress Hysteresis Measurement up to 500C for thermal property and stability tests of thin films during thermal cycling up to 900 degrees C in inert gas. Non-Contact Laser Scanning Technology.</h5>
       
       
      <div class='row row1'>

            <div class="col-sm-5">
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
                <button type="button" class="btn btn-danger">GET A DATASHEET</button>
            </div>
            
            </div>

            <div class="col-sm-4">
                <img src={img500TC} width="350" height="300" />
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

      <div className='comparison-table'>
      <div class="container">
  <h2>Comparison FSM128NT, FSM 500TC and FSM500mc-VAC</h2>
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">Topic</div>
      <div class="col col-2">128NT</div>
      <div class="col col-3">500TC</div>
      <div class="col col-4">500mc-VAC</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">T range</div>
      <div class="col col-2" data-label="Customer Name">Room temperature</div>
      <div class="col col-3" data-label="Amount">Room temperature<br/>up to 5006</div>
      <div class="col col-4" data-label="Payment Status">Room temperature<br/>up to 500C</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">Environment</div>
      <div class="col col-2" data-label="Customer Name">Ambient</div>
      <div class="col col-3" data-label="Amount">Inert gas</div>
      <div class="col col-4" data-label="Payment Status">Inert gas Vacuum</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">2D and 3D Stress Mapping</div>
      <div class="col col-2" data-label="Customer Name">Automatic wafer rotation</div>
      <div class="col col-3" data-label="Amount">Manual wafer rotation</div>
      <div class="col col-4" data-label="Payment Status">Automatic wafer rotation optional</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">Turn-around time</div>
      <div class="col col-2" data-label="Customer Name">Minutes</div>
      <div class="col col-3" data-label="Amount">Heating and cooling cycle typically hours (depending on process)</div>
      <div class="col col-4" data-label="Payment Status">Heating and cooling cycle typically hours (depending on process)</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">Options</div>
      <div class="col col-2" data-label="Customer Name">Substrate thickness</div>
      <div class="col col-3" data-label="Amount">Reflectivity</div>
      <div class="col col-4" data-label="Payment Status">
          Thermal Desorption Spectroscopy (TDs)<br/>
          Reflectivity<br/>
          Film Thickness<br/>
          Resistivity<br/>
      
      </div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">Typical Application</div>
      <div class="col col-2" data-label="Customer Name">Fast process control<br/>Stress Mapping</div>
      <div class="col col-3" data-label="Amount">Process Development Annealing studies,CTE</div>
      <div class="col col-4" data-label="Payment Status">Process Development Annealing outgassing studies, CTE</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">Facilities</div>
      <div class="col col-2" data-label="Customer Name">Power</div>
      <div class="col col-3" data-label="Amount">Power, gas, exhaust</div>
      <div class="col col-4" data-label="Payment Status">Power, gas, exhaust</div>
    </li>
          </ul>
        </div>
      </div>

      <div className='row-Azx400 last-div'>
            <div className='col-sm-6'>
            <h3>Derigned for</h3>
                <div className='feature-list'>
                    <li>
                    Versatility
                        <ul>
                            <li>The FSM SOOTC 200mm accommodates 50 to 200mm wafer
without the need io change sample holder, ot jig. Stress. and Jaler bow measurements ean Be evaluated at room or high temperature</li>
                        </ul>
                    </li>
                   
                    <li>
                    Simple Sample Placement + Retrieval
                    <ul>
                        <li>On the FSM SO0TC 200mm is simple using on pis for repradusibe operations</li>
                    </ul>
                    </li>
 
                    <li>
                    Auto Switching Dual Laser
                    <ul>
                        <li>The FSM SOOTC 200mm fetes a patented ato dul laser echo epever sample relletvity tspoor, the system will switch to an emnate laver with different wavelenath. This enable the end user to measure almost any type of film inchudine nitrides, polyimides, low k and high k materials, oe metas, without problems</li>
                    </ul>
                    </li>
 
                    <li>
                    Programmable Temperature Cycle
                    <ul>
                        <li>Recipes for heat cycles are programmable for single or multiple heat runs with the possibility of different temperature ramping.ates and annealing temperatures fo evaluate thermal stability of thin film materials</li>
                    </ul>
                    </li>
 
                    
                </div>
            </div>
            <div className='col-sm-6'>
            <h3>Specifications</h3>
            <table class="table table-Azx400">
            <tr >
            <td className='left-td'>Operating temperature</td>
            <td >Ambient to 500°C</td>
            </tr>
            <tr >
            <td className='left-td'>Heating technique</td>
            <td >Host chuck with resistive heating elements<br/>(Chucks sir cooled)
            </td>
            </tr>
            <tr >
            <td className='left-td'>Benefit</td>
            <td >Flexibility to measure a variety of sample types, including
50 - 300 mm wafers, coupons, and sputtering targets (up to 30 kg)</td>
            </tr>
            <tr >
            <td className='left-td'>Measurement technique</td>
            <td >Non-contact laser scanning</td>
            </tr>
            <tr >
            <td className='left-td'>Wealer size</td>
            <td >50 to 200mm wafers dia.</td>
            </tr>
            <tr >
            <td className='left-td'>Scanning method</td>
            <td >High precision single line sean</td>
            </tr>
            <tr >
            <td className='left-td'>Temperature ramp rate</td>
            <td >1 to 35℃ minute, programmable.<br/>Heat cycle may include ramp and hold</td>
            </tr>
            <tr >
            <td className='left-td'>Auto intensity</td>
            <td >Automatically adjusts laser intensity according to reflectivity of samples</td>
            </tr>
            <tr >
            <td className='left-td'>Auto switching dual lasers</td>
            <td >650nm and 780nm</td>
            </tr>
            <tr >
            <td className='left-td'>Film stress measurement range</td>
            <td >1 MPa to 4 GPa for atypical Si wafer<br/>
(provided bow" height change is atleast 4ym)</td>
            </tr>
            <tr >
            <td className='left-td'>Minimum radius</td>
            <td >2m for 8 200mm wafer</td>
            </tr>
            <tr >
            <td className='left-td'>Repeatability</td>
            <td >1% (1 sigma) on a 20m curvature mirror standard?</td>
            </tr>
            <tr >
            <td className='left-td'>Accuracy</td>
            <td >Better than 2.5% based on 8 20m radius curvature miror</td>
            </tr>
            <tr >
            <td className='left-td'>Laser class</td>
            <td >Laser Product Class 1</td>
            </tr>
            <tr >
            <td className='left-td'>Data compatibility</td>
            <td >Measurement rosuts or graphs are exportable to
 spreadsheet programs like Excel" or to jpeg image files</td>
            </tr>
            <tr >
            <td className='left-td'>Purging gas</td>
            <td >Nitrogen, argon or forming gas</td>
            </tr>
            <tr >
            <td className='left-td'>Computer</td>
            <td >CPU: intl core iS or better<br/>Ram: 2Gb min<br/>hard drive: 17
<br/>optical drive: DVO RW<br/>USB Port (Min) 4
<br/>ethernet connections: 2 RJ-45</td>
            </tr>
            <tr >
            <td className='left-td'>Dimensions & weight</td>
            <td >39° x22 5" x 24.5" 350Ibs</td>
            </tr>
            <tr >
            <td className='left-td'>Power</td>
            <td >208V; 20A, 1 phase</td>
            </tr>
            <tr>
            <td colSpan={2}>
            Water Bow is defined as the deviation of the center point of the front surface of a free, unclamped wafer supported by 3 points equally spaced on a circle within te ameter a spected amount ess than the nominal ameter fhe
+ Actual Repeatability or Accuracy of fle stress depends on the type of fim, thickness of the fle and substrate<br/><br/>

Excol™ isthe trademark of Microsoft Corporation
</td>
            </tr>
            </table>
            </div>

      </div>
    </div>
  )
}
