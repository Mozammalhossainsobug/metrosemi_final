import React from 'react';
import '../../../App.css';
import './Main_HomePage.css';
import { Image } from 'react-bootstrap';
import img1 from '../../../images/EmbeddedImage-1.png';
import wifistyle1 from '../../../images/wifitelsyte1.jpg';
import icicon from '../../../images/icicon.png';
import rotary from '../../../images/rotary-e1488772122805.png';
import AZX400 from '../../../images/AZX400.png';
import F20s from '../../../images/F20s.png';
import FSM413C2C from '../../../images/FSM 413C2C.png';
import FSM128L from '../../../images/FSM-128L.png';
import FSM500TC from '../../../images/FSM-500TC.png';
import FSM900TC from '../../../images/FSM-900TC.png';
import flimetrics from '../../../images/flimetrics.png';
import precitec from '../../../images/precitec.png';
import fsm from '../../../images/fsm.png';
import amd from '../../../images/amd.png';
import intel from '../../../images/intel.png';
import mit from '../../../images/mit.png';
import nasa from '../../../images/nasa.png';
import sandia from '../../../images/sandia.png';
import sandisk from '../../../images/sandisk.png';
import sk from '../../../images/sk.png';
import { Link } from 'react-router-dom';


import F20Series from '../F20 series/F20Series';

 
 
function Main_HomePage() {
  return (
    <>
    <div  class="text-center">
    <Image src={img1} class="img-fluid bigPic" alt="Responsive image" />
    </div>
 
 
    <div class="div2 text-center">
        <div class="card-body card1">
            <h5 class="card-title mt-2 ">OUR VISION</h5>
            <h6 class="card-subtitle mb-2 text-muted">We at MetroSemi are driven to earn our customers trust and fascination with our commitment to <br />quality, dependability and cost competitiveness.</h6>
        </div>
    </div>
   
 
    <div class = "div3">
      <div class="card-group card-group2">
            <div class="card card2">
                <Image src={wifistyle1} class="card-img-top icon" alt="..."/>
               <div class="card-body">
               <h5 class="card-title">Quality statement</h5>
               <p class="card-text">We will take proactive measures to ensure consistent quality. We will seek remedies so that no error is repeated.</p>  
               </div>
           </div>
 
 
        <div class="card card2">
             <Image src={icicon} class="card-img-top icon" alt="..."/>
            <div class="card-body">
                 <h5 class="card-title">Quality mission</h5>
                 <p class="card-text">Be second to none in whatever we undertake.</p>
            </div>
        </div>
 
 
        <div class="card card2">
          <Image src={rotary} class="card-img-top icon" alt="..."/>
             <div class="card-body">
               <h5 class="card-title">Quality Policy</h5>
               <p class="card-text">MetroSemi follows “Excellence in Customer Service and Integrity in the Quality Process”</p>
               
             </div>
        </div>
     </div>
 
  </div>
 
  <div class="div2 text-center">
    <div class="card-body">
        <h5 class="card-title mt-2 ">OUR CORE VALUES</h5>
        <h6 class="card-subtitle mb-2 text-muted">We believe that business is not a zero-sum game. We seek the win-win-win equation for our customers,<br/> suppliers and employees, recognizing that we are one community.</h6>
    </div>
  </div>
 
   
  <div class = "div4">
 
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
                       <Image src={FSM128L} class="card-img-top" alt="FSM 128L"/>
                         <h5 class="card-title">FSM 128L</h5>
                         <p class="card-text">Film stress and wafer bow measurement for wafers up to 300mm diameter. 2D/3D stress mapping standard. Semi-automated system with convenient wafer loading.</p>
                         <a href="#" class="btn btn-primary">Read More</a>
                       </div>
                     </div>
                   </div>

                   <div class="col-sm-4">
                     <div class="card card4">
                       <div class="card-body">
                       <Image src={FSM500TC} class="card-img-top" alt="FSM 500TC"/>
                         <h5 class="card-title">FSM 500TC</h5>
                         <p class="card-text">Stress Hysteresis Measurement up to 500C for thermal property and stability tests of thin films during thermal cycling up to 500 degrees C in inert gas.</p>
                         <a href="#" class="btn btn-primary">Read More</a>
                       </div>
                     </div>
                   </div>

                   <div class="col-sm-4">
                     <div class="card card4">
                       <div class="card-body">
                       <Image src={FSM900TC} class="card-img-top" alt="FSM 900TC"/>
                         <h5 class="card-title">FSM 900TC</h5>
                         <p class="card-text">Rapid Thermal Mechanical Characterization of novel materials. Simultaneous extraction of stress hysteresis, thermal desorption during thermal cycling up to 900C.</p>
                         <a href="#" class="btn btn-primary">Read More</a>
                       </div>
                     </div>
                   </div>
             
          </div>        
          </div>

          <div class="carousel-item" data-bs-interval="2000">
          <div class="row  text-center">
                   <div class="col-sm-4">
                     <div class="card card4">
                       <div class="card-body">
                       <Image src={FSM413C2C} class="card-img-top" alt="FSM 413C2C"/>
                         <h5 class="card-title">FSM 413C2C</h5>
                         <p class="card-text">Thickness and total thickness variation (TTV) mapping system. TTV & Thickness,  Roughness of wafer, thick layers, wafers on tape & bonded wafers.</p>
                         <a href="#" class="btn btn-primary">Read More</a>
                       </div>
                     </div>
                   </div>

                   <div class="col-sm-4">
                     <div class="card card4">
                       <div class="card-body">
                       <Image style={{ width: 300, height: 300 }} src={F20s} class="card-img-top" alt="F20s"/>
                         <h5 class="card-title">F20s</h5>
                         <p class="card-text">F20s are general-purpose film thickness measurement instruments, and are used in thousands of applications worldwide. Thickness  measured in less than a second.</p>
                         <a class="btn btn-primary">
                         Read More
                         </a>
                       
                       </div>
                     </div>
                   </div>

                   <div class="col-sm-4">
                     <div class="card card4">
                       <div class="card-body">
                       <Image style={{ width: 300, height: 300 }} src={AZX400} class="card-img-top" alt="F20s"/>
                       <h5 class="card-title">AZX 400</h5>
                         <p class="card-text">AZX 400 sequential wavelength dispersive X-ray fluorescence (WDXRF) spectrometer was specifically designed to handle very large and/or heavy samples.</p>
                         <a href="#" class="btn btn-primary">Read More</a>
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

  <div class="div5">
 
 <div class="text-center ">
      <h2 class="card-title div5-tittle">OUR PARTNERS</h2>
 </div>

 <div class="row  text-center">
            <div class="col-sm-4">
              <div class="card card5">
                <div class="card-body">
                <Image src={flimetrics} style={{ width: 300, height: 200 }} class="card-img-top partner-image" alt="Flimetrics Logo"/>
                  <h5 class="card-title card5-card-tittle">FSM 128L</h5>
                  <p class="card-text">Film stress and wafer bow measurement for wafers up to 300mm diameter. 2D/3D stress mapping standard. Semi-automated system with convenient wafer loading.</p>
                  
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card card5">
                <div class="card-body">
                  <Image src={precitec} style={{ width: 300, height: 200 }} class="card-img-top partner-image" alt="Precitec Logo"/>
                  <h5 class="card-title card5-card-tittle">FSM 500TC</h5>
                  <p class="card-text">Stress Hysteresis Measurement up to 500C for thermal property and stability tests of thin films during thermal cycling up to 500 degrees C in inert gas.</p>
                  
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card card5">
                <div class="card-body">
                  <Image src={fsm} style={{ width: 300, height: 200 }} class="card-img-top partner-image" alt="FSM Logo"/>
                  <h5 class="card-title card5-card-tittle">FSM 900TC</h5>
                  <p class="card-text">Rapid Thermal Mechanical Characterization of novel materials. Simultaneous extraction of stress hysteresis, thermal desorption during thermal cycling up to 900C.</p>
                  
                </div>
              </div>
            </div>
        </div>
 </div>


 <div class="div6">
    <div class="text-center ">
        <h2 class="card-title div4-tittle">OUR CLIENTS</h2>
    </div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
     <ol class="carousel-indicators">
       <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
       <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
       <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
     </ol>
     <div class="carousel-inner">
         <div class="carousel-item active">
         <div class="row  text-center">
                        <div class="col-sm-4">
                          <div class="card card6">
                            <div class="card-body">
                            <Image src={mit} style={{ width: 300, height: 250 }} class="card-img-top" alt="MIT"/>
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-4">
                          <div class="card card6">
                            <div class="card-body">
                            <Image src={amd} style={{ width: 300, height: 250 }} class="card-img-top" alt="AMD"/>
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-4">
                          <div class="card card6">
                            <div class="card-body">
                            <Image src={sandia} style={{ width: 300, height: 250 }} class="card-img-top" alt="Sandia"/>
                            </div>
                          </div>
                        </div>
             
          </div>  
          </div>
          <div class="carousel-item">
          <div class="row  text-center">
                         <div class="col-sm-4">
                           <div class="card card6">
                             <div class="card-body">
                             <Image src={amd} style={{ width: 300, height: 250 }} class="card-img-top" alt="AMD"/>
                             </div>
                           </div>
                         </div>

                         <div class="col-sm-4">
                           <div class="card card6">
                             <div class="card-body">
                             <Image src={mit} style={{ width: 300, height: 250 }} class="card-img-top" alt="MIT"/>
                             </div>
                           </div>
                         </div>

                         <div class="col-sm-4">
                           <div class="card card6">
                             <div class="card-body">
                             <Image src={sandisk} style={{ width: 300, height: 250 }} class="card-img-top" alt="SANDISK"/>
                             </div>
                           </div>
                         </div>
             
                </div>  
          </div>
          <div class="carousel-item">
          <div class="row  text-center">
                         <div class="col-sm-4">
                           <div class="card card6">
                             <div class="card-body">
                             <Image src={intel} style={{ width: 300, height: 250 }} class="card-img-top" alt="FSM 413C2C"/>
                             </div>
                           </div>
                         </div>

                         <div class="col-sm-4">
                           <div class="card card6">
                             <div class="card-body">
                             <Image src={nasa} style={{ width: 300, height: 250 }} class="card-img-top" alt="F20s"/>
                             </div>
                           </div>
                         </div>

                         <div class="col-sm-4">
                           <div class="card card6">
                             <div class="card-body">
                             <Image src={sk} style={{ width: 300, height: 250 }} class="card-img-top" alt="F20s"/>
                             </div>
                           </div>
                         </div>
             
          </div>  
          </div>
       </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

</div>

   
   
    </>
  );
}
 
export default Main_HomePage;

