import React from 'react';
import imgRaman360 from '../../../images/raman-360.png';
import { Link } from 'react-router-dom';
import "./Raman360.css"

export default function Raman360() {
  return (
    <div className='raman360'>
      <h3>RAMAN-360</h3>
       <p className='p-raman360'>Micro Raman system  for lattice level strain and material composition measurement. High spectral resolution (0.02 cm-1) and sub micron lateral resolution. Measurement of through silicon via (TSV) keep out zone, local stress and composition profiling.  Fully automated C2C system.The inelastic scattering of photons in visible and NIR and UV with change of frequency of scattered photon in the range of 100 – 5000 cm-1 is commonly referred as Raman spectroscopy, and it has been recognized as an effective tool for investigation of vibrational properties of semiconductor crystals since early 1970s.<br/><br/>
       Our engineering teams have further extended this well proven technology to study of structures with complicated strain configurations involving strain varying as function of the distance from the surface of device, where both diagonal and off-diagonal strain components play important role – as it takes place in novel strain silicon epi-layers and devices, SiGe structures, localized oxidation of silicon (LOCOS) structures, and complicated micro-electro-mechanical (MEMs) devices.  It can be also used as an effective tool for characterization of the device during final back grinding and packaging steps. 

<br/><br/>FSM tool offers very high spectral resolution, multiple excitation sources, phase modulated thermoelectrically cooled (TEC) Charge Coupled Device (CCD) detector, and full automation needed by modern semiconductor device manufacturing.  

<br/><br/>For more information on FSM Raman metrology, its advantages and limitations, and solutions specific to your applications please contact us directly.</p>
       
      <div class='row row1'>

            <div class="col-sm-5">
            <h4>Features</h4>
            <div className='feature-list'>
                <li>Fully automated Raman Stross Measurement for 200 and 300mm Wafers</li>
                <li>Dual Wavelength: UV (364 nm) and Blue (488nm)</li>
                <li>Penetration Depth: 10nm (UV), 500nm (Blue)</li>
                <li>Sub-Micron Spot Size for Local Stress Analysis</li>
                <li>Full Water Mapping and Local Area Mapping</li>
                <li>Software for stress, radius and wafer bow.</li>
                <li>Highest Spectral Resolution for optimal stress resolution</li>
            </div>
            <div class="btn-row1">
                <Link className='link' to='/contactUs'>
                    <button type="button" class="btn btn-danger">GET A QUOTE</button>
                </Link>
                <button type="button" class="btn btn-danger">GET A DATASHEET</button>
            </div>
            
            </div>

            <div class="col-sm-4">
                <img src={imgRaman360} width="350" height="300" />
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
