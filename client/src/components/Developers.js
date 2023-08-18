import React from 'react';
import Chinmayi from './images/chinmayi.jpeg';
import Deeksha from './images/deeksha.jpeg';
import Dhiksha from './images/dhiksha.jpeg';
import Anita from './images/anita.jpeg'
import './style/Developers.css';

export default function Developers() {
  return (
    <div className='divbody'>
          <div className="head">
        <h1>DEVELOPERS</h1>
    </div>
<center>
    <section id="Developers">
        <div className="devs" id="d1">
            <img src={Chinmayi} alt='error'/>
            <div className="d-details">
                <p>CHINMAYI</p>
                <h4> 1BM21CS045</h4>
            </div>
         </div>

         <div className="devs" id="d2">
            <img src={Deeksha} alt='error'/>
            <div className="d-details">
                <p>DEEKSHA S</p>
                <h4>1BM21CS048</h4>  
            </div>
        </div>
        <div className="devs" id="d3">
            <img src={Dhiksha} alt='error'/>
            <div className="d-details">
                <p>DHIKSHA RATHIS</p>
                <h4>1BM21CS055</h4>
            </div>
        </div>
        <div className="devs" id="d4">
            <img src={Anita} alt='error'/>
            <div className="d-details">
                <p>ANITHA K J</p>
                <h4> 1BM22CS401</h4>
            </div>
         </div>
    </section>
    </center>
    </div>
  )
}
