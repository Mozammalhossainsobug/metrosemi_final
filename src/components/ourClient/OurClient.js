import React from 'react';
import './OurClient.css';
import amd from '../../images/amd.png';
import intel from '../../images/intel.png';
import mit from '../../images/mit.png';
import nasa from '../../images/nasa.png';
import sandia from '../../images/sandia.png';
import sandisk from '../../images/sandisk.png';
import sk from '../../images/sk.png';

export default function OurClient() {
  return (
    <div className='ourClient'>
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
                            <img src={mit} class="card-img-top" alt="MIT"/>
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-4">
                          <div class="card card6">
                            <div class="card-body">
                            <img src={amd} class="card-img-top" alt="AMD"/>
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-4">
                          <div class="card card6">
                            <div class="card-body">
                            <img src={sandia}  class="card-img-top" alt="Sandia"/>
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
                             <img src={amd}  class="card-img-top" alt="AMD"/>
                             </div>
                           </div>
                         </div>

                         <div class="col-sm-4">
                           <div class="card card6">
                             <div class="card-body">
                             <img src={mit}  class="card-img-top" alt="MIT"/>
                             </div>
                           </div>
                         </div>

                         <div class="col-sm-4">
                           <div class="card card6">
                             <div class="card-body">
                             <img src={sandisk} class="card-img-top" alt="SANDISK"/>
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
                             <img src={intel}  class="card-img-top" alt="FSM 413C2C"/>
                             </div>
                           </div>
                         </div>

                         <div class="col-sm-4">
                           <div class="card card6">
                             <div class="card-body">
                             <img src={nasa}  class="card-img-top" alt="F20s"/>
                             </div>
                           </div>
                         </div>

                         <div class="col-sm-4">
                           <div class="card card6">
                             <div class="card-body">
                             <img src={sk}  class="card-img-top" alt="F20s"/>
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
    <span class="sr-only ">Next</span>
  </a>
</div>

</div>
  )
}
