import React from 'react';
import './Fsm413MOT.css';
import { Link } from 'react-router-dom';
import imgfsm413mot from '../../../images/fsm413mot.png'


export default function Fsm413MOT() {
  return (
    <> 
     <div className='UpperFsm413C2C'>    
      
      <h3>FSM 413 MOT Wafer Thickness Measurement System</h3>
       <h5>Non Contact Wafer Thickness Metrology for ultra thin backgrind or chemically etched wafers,
Measures patterned, bumped wafers on tapes or bonded on carriers, for stacked die and MEMs Applications
</h5>
       
       
      <div class='row row1'>

            <div class="col-sm-8">
            <h4>Unique Advantages</h4>
            <div className='feature-list'>
            The FSM 413 Echoprobe™ sensor uses a patented infrared (IR) interferometry
technique that provides a direct and accurate substrate thickness and total thick-
ness variation (TTV) measurement of thick to ultra-thin wafers. Configured as a
Single Probe system, several materials transparent to the IR beam, such as Si,
GaAs, InP, SiC, Glass, Quartz and many polymers, are readily measured. Sub-
strate thickness of conventional wafers with patterns, tapes, bumps or bonded
wafers mounted on carriers can be determined with high precision and accuracy.
When configured as a Dual Probe system, the FSM413 also provides measure
ments of the total thickness of the wafer, including substrate thickness and the
patterned height thickness in cases the beam cannot penetrate through the materi-
al. Options are available to measure trench depth and via holes, including high
aspect ratio trenches and vias in MEMS type applications. Various specialized
MEMS applications including membrane metrology and Bump Height metrology
are also optionally available.
            </div>
            <div class="btn-row1">
                <Link className='link' to='/contactUs'>
                    <button type="button" class="btn btn-danger">GET A QUOTE</button>
                </Link>
            </div>
            
            </div>

            <div class="col-sm-4">
                <img src={imgfsm413mot} width="350" height="300" />
            </div>      
      </div>





      <div className='row-fsm413SA_lower'>
            <div className='col-sm-6'>
            <h3>OTHER APPLICATIONS</h3>
                <div className='feature-list'>
                    <li>Trench Depth Measurements</li>
                   
                    <li>Surface Roughness</li>
 
                    <li>Thin Film Thickness Measurements</li>
 
                    <li>Epoxy Thickness Measurements</li>
 
                    <li>Warp Measurements</li>
 
                    <li>Bump Height Metrology</li>
 
                    
                </div>
            </div>
            <div className='col-sm-6'>
            <h3>SPECIFICATIONS</h3>
            <table class="table table-fsm413SA">
            <tr >
            <td className='left-td'>Technique</td>
            <td >Non-contact IR interferometry. Single or Dual Probes available</td>
            </tr>
                <tr >
                <td className='left-td'>Wafer size</td>
                <td>50, 75, 100, 200, 300mm available, Customized
wafer sizes also available</td> 
                </tr>
                <tr >
                <td className='left-td'>Substrate</td>
                <td>Si, GaAs, InP, Quartz, Glass, Sic, Sapphire”</td> 
                </tr>
            
            <tr >
            <td className='left-td'>Thickness range</td>
            <td >15 to 780m for Single Probe measurement up
to 3mm for Dual Probe (Total thickness) measurement</td>
            </tr>

            <tr>
                <td className='left-td'>Wafer Loading</td>
                <td>Manual</td>
            </tr>

            <tr>
                <td className='left-td'>Measurement Mode</td>
                <td>Semi automated with precision x -y stage</td>
            </tr>

            <tr>
                <td className='left-td'>Resolution</td>
                <td> &lt; 0.2 &mu;m</td>
            </tr>

            <tr>
                <td className='left-td'>Repeatability</td>
                <td>0.2 &mu;m (1 &sigma;) in Single Probe" Mode<br/>
0.7 &mu;m (1 &sigma;) in Dual Probe" Mode</td>
            </tr>

            <tr>
                <td className='left-td'>Measurement Points</td>
                <td>Programmable</td>
            </tr>

            <tr>
                <td className='left-td'>Substrate Thickness Results</td>
                <td>TTV, Mean, Maximum, Minimum,
StDev, 2D and 3D Color Maps</td>
            </tr>

            <tr>
                <td className='left-td'>Warp Measurement range</td>
                <td>Contact Metrosemi for details</td>
            </tr>

            <tr>
                <td className='left-td'>Warp Repeatability</td>
                <td>Contact Metrosemi for details</td>
            </tr>


            <tr>
                <td className='left-td'>Surface Roughness</td>
                <td>RMS range of 20-1000 A</td>
            </tr>


            <tr>
                <td className='left-td'>Polyimide Film and Epoxy Thickness Measurement</td>
                <td>Contact Metrosemi for details</td>
            </tr>


            <tr>
                <td className='left-td'>Bump Height Metrology</td>
                <td>Contact Metrosemi for details</td>
            </tr>

            <tr>
                <td className='left-td'>Dimensions (Main Equipment)</td>
                <td>413-200: 26(W) x 36(D) x 56°(H)
413-300: 32°(W) x 467(D) x 667(H)</td>
            </tr>

            <tr>
                <td className='left-td'>Weight (Gross)</td>
                <td>500 Ibs</td>
            </tr>

            <tr>
                <td className='left-td'>Power</td>
                <td>110 or 200VAC, 50/60 Hz, Single Phase, 3 wires</td>
            </tr>

            <tr>
                <td className='left-td'>Vacuum Required</td>
                <td>100 mm Hg</td>
            </tr>
            
            </table>
            Surface must be smooth (generally roughness &lt; 0.1 &mu;m RMS) <br/>
On 150&mu;m thick unpatterned double sided polished undoped Si wafer
            </div>

      </div>

    </div>
    
    </>
  );
}