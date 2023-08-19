import React from 'react';
import { Link } from 'react-router-dom';
import './TopContact.css';

export default function TopContact() {
  return (
    <div class="topContact fixed-top">
    <i class="fa-brands fa-whatsapp"></i>&nbsp;(+1)408-4302470
    &nbsp;&nbsp;&nbsp;
    <i class="fa-solid fa-envelope"></i>&nbsp;alam@metrosemi.com
    <div class="position-absolute top-0 end-0">
    <Link className='link' to='/contactUs'>Contact Us</Link>
    </div>
    </div>

  )
}
