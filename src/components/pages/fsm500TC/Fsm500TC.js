import React from 'react';
import './Fsm500TC.css';
import Upper500TC from "../fsm500TC/Upper500TC/Upper500TC.js"
import Lower500TC from './Lower500TC/Lower500TC';
import Lower500TC2 from './Lower500TC2/Lower500TC2';

export default function Fsm500TC() {
  return (
    <>
      <Upper500TC/>
      <Lower500TC/>
      <Lower500TC2/>
    </>
  )
}
