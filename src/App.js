import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import ContactUs from './components/pages/contact-us/ContactUs';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import F20Series from './components/pages/F20 series/F20Series';
import Azx400 from './components/pages/azx400/Azx400';
import Main_HomePage from './components/pages/mainHomePage/Main_HomePage';
import Fsm413C2C from './components/pages/fsm413C2C/Fsm413C2C';
import Fsm413SA from './components/pages/fsm413SA/Fsm413SA';
import Fsm413MOT from './components/pages/fsm413MOT/Fsm413MOT';
import Fsm128L from './components/pages/fsm128/Fsm128';
import Fsm500TC from './components/pages/fsm500TC/Fsm500TC';
import Fsm900TC from './components/pages/fsm900TC/Fsm900TC';
import Raman360 from './components/pages/raman-360/Raman360';
import TopContact from './components/topContact/TopContact';
import Lower500TC2 from './components/pages/fsm500TC/Lower500TC2/Lower500TC2';


function App() {
  return (
      <>
      <Router>
        <TopContact/>
        <Navbar/>
        
        <Routes>
        <Route exact path="/" element={<Main_HomePage />}></Route>
        <Route path="/f20Series" element={<F20Series />}></Route>
        <Route path="/azx400" element={<Azx400 />}></Route>
        <Route path="/fsm413C2C" element={<Fsm413C2C />}></Route>
        <Route path="/fsm413SA" element={<Fsm413SA />}></Route>
        <Route path="/fsm413MOT" element={<Fsm413MOT />}></Route>
        <Route path="/fsm128L" element={<Fsm128L />}></Route>
        <Route path="/fsm500TC" element={<Fsm500TC />}></Route>
        <Route path="/fsm900TC" element={<Fsm900TC />}></Route>
        <Route path="/raman360" element={<Raman360 />}></Route>
        <Route path="/contactUs" element={<ContactUs />}></Route>
        </Routes>
        <Footer />

      </Router>
      </>
      

  );
}

export default App;