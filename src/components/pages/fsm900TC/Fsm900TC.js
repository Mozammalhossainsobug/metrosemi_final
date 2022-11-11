import React from 'react';
import './Fsm900TC.css';
import img900TC from '../../../images/FSM-900TC.png';
import img900TCvac from '../../../images/fsm900TC-Vac Theory.png'
import { Link } from 'react-router-dom';

export default function Fsm900TC() {
  return (
    <div className='fsm900TC'>
      <h3>FSM 900TC-Vac</h3>
       <h5>STRESS & BOW HEIGHT MEASUREMENT SYSTEM WITH HIGH TEMPERATURE VACUUM CHAMBER UP TO 900°C WITH THERMAL DESORPTION SPECTROSCOPY.</h5>
       
       
      <div class='row row1'>

            <div class="col-sm-5">
            <h4>Features</h4>
            <div className='feature-list'>
                <li>Wafer bow and film stress measurement at elevated temperatures</li>
                <li>User programmable thermal cycle capability under inert gas up to 500 C or vacuum
environment up to 900C.</li>
                <li>Vacuum chamber for 200mm or 300mm wafer.</li>
                <li>Ability to measure small to large bow from less than a micron to over a millimeter
using FSM’s patented Micro-positioning detector.</li>
                <li> Complete with Ion Source, 1-100 AMU Range Faraday Cup detector and system controller fully integrated into FSM 900TC main unit.</li>
                <li>Whole wafer monitoring up to 100 channels for trend monitoring. (Measurement of outgases or thermally desorbed species during temperature run).</li>
                <li>Spectroscopic data is collected simultaneously with stress measurement</li>
                <li>FSM Patented automatic dual laser and auto laser power adjustment to measure almost any film including reflective and translucent films</li>
                <li>Windows 7, 8 &10 operating system.</li>
                <li>Software for basic stress, radius, and wafer bow measurement</li>
                <li> Display of stress or bow vs temperature.</li>
                <li>Coefficient of thermal expansion calculation of unknown films (requires 2 different
substrates or knowledge of film’s mechanical constants, see application notes
for requirements).</li>
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
                <img src={img900TC} width="350" height="450" />
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

      <div className='second-row-fsm900TC'>
      <h2>FSM 900TC-Vac Theory<br/>Bow Height Measurement and Stress Measurement</h2>

        <div class="row">
        <div className='col-sm-8'>
        FSM 900TC-Vac systems measure the radius of curvature by a laser triangulation technique which is represented by the schematic shown below. As the wafer is moved below the laser beam, the beam is deflected according to its curvature. The system determines the position z of the beam with a photodetector as a function of position x.<br/>
        <br/>
        <math>
                  R = 2L (dz/dx)<sup>-1</sup> <p>............................................ Eq(1)</p>
        </math>
        <br/><br/>
        From the measured data, the radius of curvature is calculated using the formula shown in Eq. (1).
R is the radius of the curvature, L refers to the beam path distance from the
wafer surface to the detector.  Knowing the
beam path, the radius of curvature can be determined from the slope of a dz vs.
dx plot.
The bow height H of a wafer with diameter D can be calculated using <br/><br/>
<math>H=D2/(2*R)........................................................Eq. (2)</math>  
<br/><br/>                                        
Stoney’s equation (3) gives the relation between the stress and the radius of curvature of the stressed wafer:   
<br/><br/>
<math>Stress=  E*Ts2 / [6*(1-ν)*R*Tf]........................................................Eq. (3)</math>
<br/><br/>
           

 

           Where, E is Young’s modulus, Ts is substrate thickness, Tf is film thickness, ν is Poisson ratio, and R is a curvature of stressed wafer. E/ (1-ν) is defined as the stress constant. For Si 180.5GPa is used in the following. The above equation assumes that the unstressed substrate is perfectly flat. In practice the stress is calculated using the change in bow height relative to the bare substrate. In this study we only show the measured bow height as a function of temperature. The measured
‘bow height’ displayed is a fit of the data taken across the entire wafer to a perfect sphere.
      </div>
      <div className='col-sm-4'>
      <img src={img900TCvac} width="350" height="300" />
      </div>


        </div>
      

      </div>

      <div className='div2-fsm900tc'>
                  <h3>FSM 900TC-Vac Integrated Metrology Chamber<br/>(200mm or 300mm Water Option)</h3>
                  <h5>Rapid Thermal Mechanical Characterization of Low K Dielectrics, Copper &
other Thin Films for Semiconductor, MEMS, Solar, LED, and FPD Applications (upto 900°C)</h5>
      </div>

      <div className='questionFsm900TC'>
  <h4>Why Vacuum Annealing Chamber?</h4>
  <p>With the drive towards smaller line width and
higher speed devices, process integration will
involve new thin film materials like low K,
copper and other novel materials. However,
several of these new materials are very sensitive to oxidation at elevated temperatures.
They are also prone to outgas, or exhibit physical and material changes upon heating.To help characterize these changes, the FSM-900TC-Vac offers sealed heating type chamber that simulates process conditions. It can operate either under a completely inert gas
environment (with a very low partial pressure of oxygen) or under high vacuum mode.</p>
<h4>Why integrated metrology?</h4>
<p>By incorporating multiple probes around this
chamber . Stress hysteresis, thermal desorption, film shrinkage and reflectivity changes in
the thin film can be simultaneously extracted.
This approach overcomes sample to sample
and tool variations for new material characterization.

By integrating these metrology data, FSM-900TC-Vac can quickly profile the thermal
stability and thermal loading capacity for new
materials. For example, the type of material
outgassing at specific temperature can be correlated or overlaid graphically with data from
film thickness/shrinkage, reflectivity and
stress hysteresis profiles. Probes are also
available to study resistivity changes from
monitoring grain growth or phase changes.
This novel integrated metrology approach can
dramatically speed up new material screening
and help compress the process integration cycle at the various technology nodes.</p>
</div>


      <div className='row-Azx400'>
            <div className='col-sm-6'>
            <h3>Specifications</h3>
                <div className='feature-list'>
                    <li>
                    Temperature range:Room temperstise to 900°C in vacuum
                    </li>
                   
                    <li>
                    Ramp rate; 1° to 35°C/min., programmable
                    </li>
 
                    <li>
                    Wafer size: 200 and 300mm
                    </li>
 
                    <li>
                    Vacuum: Turbo molecular dry Pump (operation up to 5 x 10° Torr)
                    </li>
                    
                    <li>
                    Inert gas: Nitrogen, argon, forming gas
                    </li>

                    <li>
                    4 Chamber type: Water-cooled vacuum cham-
ber with plated reflective inner
— and gold plated reflective inner
wal
                    </li>
                    <li>
                    Wafer sample stage: Easy sample loading
‘onto quartz susceptor
                    </li>
                    <li>
                    Footprint: 28" (W) x 58" (D)
                    </li>
                    <li>
                    Shipping weight: 400 Ibs.
                    </li>
                    <li>
                    Power requirement: 208V, 30A per phase, 3
phases, 5 wires with neutral and ground
                    </li>
 
                    
                </div>
            </div>
            
            
            
            <div className='col-sm-6'>
            <h3>CONFIGURATION</h3>

            <table class='table-configuration-fsm900TC'>
              <tr>
                  <td>
                  Film Stress
                  </td>
                  <td>
                  Standard
                  </td>

              </tr>
              <tr>
                  <td>
                  Vacuum Annealing Oven
                  </td>
                  <td>
                  Standard
                  </td>

              </tr>
              <tr>
                  <td>
                  Thermal Desorption
                  </td>
                  <td>
                  Standard
                  </td>

              </tr>
              <tr>
                  <td>
                  Film Thickness
                  </td>
                  <td>
                  Option
                  </td>

              </tr>
              <tr>
                  <td>
                  Reflectivity
                  </td>
                  <td>
                  Option
                  </td>

              </tr>
              <tr>
                  <td>
                  Sheet Resistance
                  </td>
                  <td>
                  Option
                  </td>

              </tr>
              <tr>
                  <td>
                  Temperature Range, 900°C
                  </td>
                  <td>
                  Standard
                  </td>

              </tr>
              <tr>
                  <td>
                  2D/3D Stress Mapping
                  </td>
                  <td>
                  Option
                  </td>

              </tr>
            </table>
 
                    
            
            </div>

      </div>

      
    </div>
  )
}
