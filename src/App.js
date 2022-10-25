import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import ContactUs from './components/pages/contact-us/ContactUs';
import Footer from './components/Footer';
import Main_HomePage from './components/Main_HomePage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Product from './components/product/Product';

function App() {
  return (
      <>
        <Navbar />
        <ContactUs />
        <Footer />
      </>
      
    
  );
}

export default App;