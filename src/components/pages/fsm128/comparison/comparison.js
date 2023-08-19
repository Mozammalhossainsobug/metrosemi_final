import React from 'react';
import './comparison.css';
import { Link } from 'react-router-dom';

export default function Comparison() {
  return (
    <>
       <div class="row comparison">
            <h3>SPECIFICATIONS</h3>
            <table class="table table-fsm413SA">
            <tr >
            <td className='left-td'>Operating Temperature</td>
            <td >Ambient</td>
            </tr>
                <tr >
                <td className='left-td'>Measurement Technique</td>
                <td>Non-Contact Laser Scanning</td> 
                </tr>
                <tr >
                <td className='left-td'>Wafer Size</td>
                <td>FSM 128C2C: 150mm to 200mm (Standard)<br/>
FSM 128C2G-SMIF: Mini-environment Option<br/>
FSM 128L C2C: 300mm Open Cassete System<br/>
FSM 12BL C2C (SF or DF): 300mm with Single or Dual
FOUP. respectively</td> 
                </tr>
            
            <tr >
            <td className='left-td'>Scanning Method</td>
            <td >High precision Single Scan and Programmable multiple diametric scans 2D and 3D map profiles</td>
            </tr>

            <tr>
                <td className='left-td'>Auto Intensity</td>
                <td>Automatically adjusts laser intensity according to reflectv-
ity of samples.</td>
            </tr>

            <tr>
                <td className='left-td'>Auto Switching Dual Lasers</td>
                <td>650nm and 780nm</td>
            </tr>

            <tr>
                <td className='left-td'>Fim Stress Measurement Range</td>
                <td> 1 MPA to 1.4 GPA for a typical Si
waer (provided curvature of bow’ height change is at
Teast 1 micron)</td>
            </tr>

            <tr>
                <td className='left-td'>Repeatability</td>
                <td>1 % (1 sigma) on a 20m curvature mor standard®</td>
            </tr>

            <tr>
                <td className='left-td'>Accuracy</td>
                <td>Better than 2.5% based on a 20 m radius curvature mirror*</td>
            </tr>

            <tr>
                <td className='left-td'>Laser Class</td>
                <td>Laser Product Class 1</td>
            </tr>

            <tr>
                <td className='left-td'>Data Compatibility</td>
                <td>Measurement results or maps are exportable to
spreadsheet programs like Excel or to Jpeg image files</td>
            </tr>

            <tr>
                <td className='left-td'>Optional Acosesaees</td>
                <td>Wes Sek Moppies, Genet 1 eatin
'SECS/GEM Communications</td>
            </tr>


            <tr>
                <td className='left-td'>Computer</td>
                <td>CPU: Intel core i5 or later, <br/>Ram: 2Gb min. <br/>Hard Drive: 1Tb.
<br/>Optical Drive: DVD RIW, <br/>USB Port (Min) 4<br/>
Ethernet connections: 2 RJ-45</td>
            </tr>


            <tr>
                <td className='left-td'>Dimensions & Weight</td>
                <td>FSM 128C2C: 38° (W) x 45'(D) x 75'(H); 8501s
<br/>FSM 128L C2C: 41(W) x 57°(D) x 75'(H); 1000ibs
<br/>FSM 128L C2C (DF): 587(w) x 687(D) x 75°(H); 12101bs</td>
            </tr>


            <tr>
                <td className='left-td'>Power</td>
                <td>110v220v; 20A</td>
            </tr>
            
            </table>
            * Wafer Bow is defined as the deviation of the center point of the front
surface of ares. unclamped wafer supparted by 3 pons equally spaced
on a circle within the diameter a specified amount less than the nominal
diameter of the wafer<br/><br/>

* Actual Repeatability or Accuracy of file stress depends on the type of
film, thickness of the file and substrate <br/><br/>

Excel™ is the trademark of Microsoft Corporation<br/><br/>
            </div>

    </>
  )
}
