import React from 'react';
import Burger1 from '../src/assets/burger1.jpeg';
import Burger2 from '../src/assets/burger2.jpeg';
import Burger3 from '../src/assets/burger3.jpeg';
import Burger4 from '../src/assets/burger4.jpeg';
import Burger5 from '../src/assets/burger5.jpeg';
import './Burger.css';

const Burger = () => {

     
  return (
    <>
        <div className="outerbox">
            <div>
            <button className='fav'>fav</button>
                <img src={Burger1} alt="burger" className='content' />
                <p><b>Mushroom  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;90</b></p>
            </div>
            <div>
            <button className='fav'>fav</button>
                <img src={Burger2} alt="burger" className='content'/>
                <p><b>Mushroom  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;90</b></p>
            </div>
            <div>
            <button className='fav'>fav</button>
                <img src={Burger3} alt="burger" className='content'/>
                <p><b>Mushroom  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;90</b></p>
            </div>
            <div>
            <button className='fav'>fav</button>
                <img src={Burger4} alt="burger" className='content'/>
                <p><b>Mushroom  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;90</b></p>
            </div>
            <div>
            <button className='fav'>fav</button>
                <img src={Burger5} alt="burger" className='content'/>
                <p><b>Mushroom  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;90</b></p>
            </div>
          
        </div>
    </>
  )
}

export default Burger