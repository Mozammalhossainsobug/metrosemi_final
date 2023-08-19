import React from 'react';
import flimetrics from '../../images/flimetrics.png';
import precitec from '../../images/precitec.png';
import fsm from '../../images/fsm.png';
import amd from '../../images/amd.png';
import intel from '../../images/intel.png';
import mit from '../../images/mit.png';
import nasa from '../../images/nasa.png';
import sandia from '../../images/sandia.png';
import sandisk from '../../images/sandisk.png';
import sk from '../../images/sk.png';
import './OurPartner.css'

export default function OurPartner() {
  return (
    <div className='OurPartner'>
 
 <div class="text-center ">
      <h2 class="card-title div5-tittle">OUR PARTNERS</h2>
 </div>

 <div class="row  text-center">
            <div class="col-sm-4">
              <div class="card card5">
                <div class="card-body">
                <img src={flimetrics}  class="card-img-top partner-image" alt="Flimetrics Logo"/>
                  <h5 class="card-title card5-card-tittle">Filmetrics</h5>
                  <p class="card-text">Filmetrics® was founded in 1995 with the mission of making thin-film measurements simple and affordable.</p>
                  
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card card5">
                <div class="card-body">
                  <img src={precitec}  class="card-img-top partner-image" alt="Precitec Logo"/>
                  <h5 class="card-title card5-card-tittle">Precitec</h5>
                  <p class="card-text">The Precitec Group is the worldwide innovation and market leader in the development and manufacture of components and system solutions in the field of laser technology and optical metrology.</p>
                  
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card card5">
                <div class="card-body">
                  <img src={fsm} class="card-img-top partner-image" alt="FSM Logo"/>
                  <h5 class="card-title card5-card-tittle">FSM</h5>
                  <p class="card-text">Frontier Semiconductor (FSM), offers a range of advanced metrology products and solutions for semiconductor, LED, Solar, FPD, Data Storage and MEMS applications.</p>
                  
                </div>
              </div>
            </div>
           </div>
        </div>
  )
}
