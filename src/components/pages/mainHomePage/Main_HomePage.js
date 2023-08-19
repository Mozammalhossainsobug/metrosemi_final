import React from 'react';
import '../../../App.css';
import './Main_HomePage.css';
import { Image } from 'react-bootstrap';
import img1 from '../../../images/EmbeddedImage-1.png';
import OurVisionMissionGoal from '../../ourVisionMissionGoal/OurVisionMissionGoal';
import OurProduct from '../../ourProduct/OurProduct';
import OurPartner from '../../ourPartner/OurPartner';
import OurClient from '../../ourClient/OurClient';

import { Link } from 'react-router-dom';


import F20Series from '../F20 series/F20Series';

 
 
function Main_HomePage() {
  return (
    <>
    <div  class="text-center">
    <img srcSet={`${img1} 320w, ${img1} 680w, ${img1} 960w`} class="img-fluid bigPic" alt="Responsive image" />
    </div>
    <OurProduct/>
    <OurPartner/>
    <OurClient/>
    </>
    

  );
}
 
export default Main_HomePage;

