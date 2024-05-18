import React from 'react';
import './MenuBar.css';

import Burgerr from '../src/assets/burger.png';
import Breadomlet from '../src/assets/breadomlet.png';
import Falooda from '../src/assets/Falooda.png';
import Juice from '../src/assets/Juice.png';
import Magi from '../src/assets/Magi.png';
import Mojito from '../src/assets/Mojito.png';
import OreaShakes from '../src/assets/oreo.png';
import Shakes from '../src/assets/shakes.png';
import SpecialShakes from '../src/assets/SpecialShakes.png';
import { Link, Outlet, } from 'react-router-dom';


const MenuBar = () => {

  return (
    <>
    <div>
      <h1>REFIX</h1>
    </div>
   
        <div className="container">
          <div className='item'>
           <Link to={'burger'}>
              <img src={Burgerr} alt="burger"  className='imggg'/>
              <p> <b> Burger </b> </p>
              </Link> 
          </div>
          <div className='item'>
           <Link to={'breadomlet'}>
              <img src={Breadomlet} alt="BreadOmlet" className='imggg'/>
              <p> <b>BreadOmlet</b> </p>
              </Link>
          </div>

          <div className='item'>
            <Link to={'falooda'}>
              <img src={Falooda} alt="Falooda" className='imggg'/>
              <p><b>Falooda</b></p>
              </Link>
          </div>
          <div className='item'>
            <Link to={'juice'}>
              <img src={Juice} alt="Juice"  className='imggg'/>
              <p><b>Juice</b></p>
              </Link>
          </div>
          <div  className='item'>
            <Link to={'magi'}>
              <img src={Magi} alt="Magi"  className='imggg'/>
              <p><b>Magi</b></p>
              </Link>
          </div>
          <div className='item'>
            <Link to={'mojito'}>
              <img src={Mojito} alt="Mojito"  className='imggg'/>
              <p><b>Mojito</b></p>
              </Link>
          </div>
          <div className='item'>
            <Link to={'orea'}>
              <img src={OreaShakes} alt="OreaShakes"  className='imggg'/>
              <p><b>OreaShakes</b></p>
              </Link>
          </div>
       
          <div className='item'>
            <Link to={'shakes'}>
              <img src={Shakes} alt="Shakes"  className='imggg' />
              <p><b>Shakes</b></p>
              </Link>
          </div>
          <div className='item'>
            <Link to={'spical'}>
              <img src={SpecialShakes} alt="SpecialShakes"  className='imggg'/>
              <p><b>SpecialShakes</b></p>
              </Link>
           
          </div>
        
        
        </div>
        <Outlet/>
    </>
  )
}

export default MenuBar