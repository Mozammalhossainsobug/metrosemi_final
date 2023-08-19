import React from 'react';
import wifistyle1 from '../../images/wifitelsyte1.jpg';
import icicon from '../../images/icicon.png';
import rotary from '../../images/rotary-e1488772122805.png';
import './OurVisionMissionGoal.css';


export default function OurVisionMissionGoal() {
  return (
    <div  class="ourVisionMissionGoal">
      <div class=" text-center">
        <div class="card-body card1">
            <h5 class="card-title mt-2 ">OUR VISION</h5>
            <h6 class="card-subtitle mb-2 ">We at MetroSemi are driven to earn our customers trust and fascination with our commitment to <br />quality, dependability and cost competitiveness.</h6>
        </div>
    </div>
   
 
    <div class = "div3">
      <div class="card-group card-group2">
            <div class="card card2">
               <img src={wifistyle1} class="card-img-top" alt="..."/>
               <div class="card-body">
               <h5 class="card-title">Quality statement</h5>
               <p class="card-text">We will take proactive measures to ensure consistent quality. We will seek remedies so that no error is repeated.</p>  
               </div>
           </div>
 
 
        <div class="card card2">
            <img src={icicon} class="card-img-top" alt="..."/>
            <div class="card-body">
                 <h5 class="card-title">Quality mission</h5>
                 <p class="card-text">Be second to none in whatever we undertake.</p>
            </div>
        </div>
 
 
        <div class="card card2">
            <img src={rotary} class="card-img-top" alt="..."/>
             <div class="card-body">
               <h5 class="card-title">Quality Policy</h5>
               <p class="card-text">MetroSemi follows “Excellence in Customer Service and Integrity in the Quality Process”</p>
               
             </div>
        </div>
     </div>
 
  </div>
 
  <div class="ourVisionMissionGoal text-center">
    <div class="card-body card1">
        <h5 class="card-title mt-2 ">OUR CORE VALUES</h5>
        <h6 class="card-subtitle mb-2">We believe that business is not a zero-sum game. We seek the win-win-win equation for our customers,<br/> suppliers and employees, recognizing that we are one community.</h6>
    </div>
  </div>
 
    </div>
  )
}
