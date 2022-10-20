import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main_HomePage from './components/Main_HomePage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
      <Router>
         <Home />
        <Routes>
        <Route exact path="/" component={Home} />   
        </Routes>
      </Router>
    
  );
}

export default App;