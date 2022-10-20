import React from 'react';
import  Navbar  from '../Navbar.js';
import '../../App.css';
import Footer from '../Footer.js';
import Main_HomePage from '../Main_HomePage';
import './Home.css';

function Home() {
  return (
    <>
      <Navbar />
      <Main_HomePage />
      <Footer />
    </>
  );
}

export default Home;