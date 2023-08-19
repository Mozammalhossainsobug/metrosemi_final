import React from 'react';
import { Link } from 'react-router-dom';


import AZX400 from '../../images/AZX400.png';
import F20s from '../../images/F20s.png';
import FSM413C2C from '../../images/FSM 413C2C.png';
import FSM128L from '../../images/FSM-128L.png';
import FSM500TC from '../../images/FSM-500TC.png';
import FSM900TC from '../../images/FSM-900TC.png';
import './OurProduct.css';


export default function OurProduct() {
  return (
    <> 
    <div class = "OurProduct4">
    <div class="text-center ">
      <h2 class="card-title div4-tittle">OUR PRODUCTS</h2>
 </div>

 <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
 <div class="carousel-inner">
   <div class="carousel-item active" data-bs-interval="10000">
   <div class="row  text-center">
            <div class="col-sm-4">
              <div class="card card4">
                <div class="card-body">
                <img src={FSM128L} class="card-img-top" alt="FSM 128L"/>
                  <h5 class="card-title card-tittle-Product">FSM 128L</h5>
                  <p class="card-text">Film stress and wafer bow measurement for wafers up to 300mm diameter. 2D/3D stress mapping standard. Semi-automated system with convenient wafer loading.</p>
                  <Link className="btn btn-primary" to="fsm128L">Read More</Link>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="card card4">
                <div class="card-body">
                <img src={FSM500TC} class="card-img-top" alt="FSM 500TC"/>
                  <h5 class="card-title card-tittle-Product">FSM 500TC</h5>
                  <p class="card-text">Stress Hysteresis Measurement up to 500C for thermal property and stability tests of thin films during thermal cycling up to 500 degrees C in inert gas.</p>
                  <Link className="btn btn-primary" to="fsm500TC">Read More</Link>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="card card4">
                <div class="card-body">
                <img src={FSM900TC} class="card-img-top" alt="FSM 900TC"/>
                  <h5 class="card-title card-tittle-Product">FSM 900TC</h5>
                  <p class="card-text">Rapid Thermal Mechanical Characterization of novel materials. Simultaneous extraction of stress hysteresis, thermal desorption during thermal cycling up to 900C.</p>
                  <Link className="btn btn-primary" to="fsm900TC">Read More</Link>
                </div>
              </div>
            </div>
      
   </div>        
   </div>

   <div class="carousel-item" data-bs-interval="10000">
   <div class="row  text-center">
            <div class="col-sm-4">
              <div class="card card4">
                <div class="card-body">
                <img src={FSM413C2C} class="card-img-top" alt="FSM 413C2C"/>
                  <h5 class="card-title card-tittle-Product">FSM 413C2C</h5>
                  <p class="card-text">Thickness and total thickness variation (TTV) mapping system. TTV & Thickness,  Roughness of wafer, thick layers, wafers on tape & bonded wafers.</p>
                  <Link className="btn btn-primary" to="fsm413C2C">Read More</Link>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="card card4">
                <div class="card-body">
                <img src={F20s} class="card-img-top" alt="F20s"/>
                  <h5 class="card-title card-tittle-Product">F50</h5>
                  <p class="card-text">The Filmetrics® F50 family of products can map film thickness as quickly as two points per second. A motorized R-Theta stage accepts standard and custom chucks for samples up to 450mm in diameter.</p>
                  <Link className="btn btn-primary" to="f20Series">Read More</Link>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="card card4">
                <div class="card-body">
                <img  src={AZX400} class="card-img-top" alt="F20s"/>
                <h5 class="card-title card-tittle-Product">AZX 400</h5>
                  <p class="card-text">AZX 400 sequential wavelength dispersive X-ray fluorescence (WDXRF) spectrometer was specifically designed to handle very large and/or heavy samples.</p>
                  <Link className="btn btn-primary" to="azx400">Read More</Link>
                </div>
              </div>
            </div>
      
   </div>   
   </div>

 </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Previous</span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Next</span>
         </button>
 </div>

</div>
</>
 
  )
}
