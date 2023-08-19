import React from 'react';
import './Lower500TC.css';

export default function Lower500TC() {
  return (
    <div className='Lower500TC'>
    
      <div className='comparison-table'>
      <div class="container">
  <h2>Comparison FSM128NT, FSM 500TC and FSM500mc-VAC</h2>
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">Topic</div>
      <div class="col col-2">128NT</div>
      <div class="col col-3">500TC</div>
      <div class="col col-4">500mc-VAC</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Topic">T range</div>
      <div class="col col-2" data-label="128NT">Room temperature</div>
      <div class="col col-3" data-label="500TC">Room temperature<br/>up to 500C</div>
      <div class="col col-4" data-label="500mc-VAC">Room temperature<br/>up to 500C</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Topic">Environment</div>
      <div class="col col-2" data-label="128NT">Ambient</div>
      <div class="col col-3" data-label="500TC">Inert gas</div>
      <div class="col col-4" data-label="500mc-VAC">Inert gas Vacuum</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Topic">2D and 3D Stress Mapping</div>
      <div class="col col-2" data-label="128NT">Automatic wafer rotation</div>
      <div class="col col-3" data-label="500TC">Manual wafer rotation</div>
      <div class="col col-4" data-label="500mc-VAC">Automatic wafer rotation optional</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Topic">Turn-around time</div>
      <div class="col col-2" data-label="128NT">Minutes</div>
      <div class="col col-3" data-label="500TC">Heating and cooling cycle typically hours (depending on process)</div>
      <div class="col col-4" data-label="500mc-VAC">Heating and cooling cycle typically hours (depending on process)</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Topic">Options</div>
      <div class="col col-2" data-label="128NT">Substrate thickness</div>
      <div class="col col-3" data-label="500TC">Reflectivity</div>
      <div class="col col-4" data-label="500mc-VAC">
          Thermal Desorption Spectroscopy (TDs)<br/>
          Reflectivity<br/>
          Film Thickness<br/>
          Resistivity<br/>
      
      </div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Topic">Typical Application</div>
      <div class="col col-2" data-label="128NT">Fast process control<br/>Stress Mapping</div>
      <div class="col col-3" data-label="500TC">Process Development Annealing studies,CTE</div>
      <div class="col col-4" data-label="500mc-VAC">Process Development Annealing outgassing studies, CTE</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Topic">Facilities</div>
      <div class="col col-2" data-label="128NT">Power</div>
      <div class="col col-3" data-label="500TC">Power, gas, exhaust</div>
      <div class="col col-4" data-label="500mc-VAC">Power, gas, exhaust</div>
    </li>
          </ul>
        </div>
      </div>

    </div>
  )
}
