import React from 'react';
import './Fsm128.css';
import { Link } from 'react-router-dom';
import UpperPart from './upperPart/UpperPart';
import LowerPart from './lowerPart/LowerPart';
import Comparison from './comparison/comparison';

export default function Fsm128() {
  return (
    <>
        <UpperPart/>
        <LowerPart/>
        <Comparison/>
    </>
  )
}
