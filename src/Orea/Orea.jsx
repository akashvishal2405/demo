import React from 'react';
import './Orea.css';
import Orea1 from '../assets/orea1.jpg';
import Orea2 from '../assets/orea2.jpg';
import Orea3 from '../assets/orea3.jpg';
import Orea4 from '../assets/orea4.jpg';
import Orea5 from '../assets/orea5.jpg';

const Orea = () => {
  return (
    <>
        <div className="outerbox">
            <div>
            <button className='fav'>fav</button>
                <img src={Orea1} alt="Orea" className='content'/>
                <p>OreaShakes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>
            <div>
            <button className='fav'>fav</button>
                <img src={Orea2} alt="Orea" className='content'/>
                <p>OreaShakes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>
            <div>
            <button className='fav'>fav</button>
                <img src={Orea3} alt="Orea" className='content'/>
                <p>OreaShakes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>
            <div>
            <button className='fav'>fav</button>
                <img src={Orea4} alt="Orea" className='content'/>
                <p>OreaShakes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>
            <div>
            <button className='fav'>fav</button>
                <img src={Orea5} alt="Orea" className='content'/>
                <p>OreaShakes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>

        </div>
    </>
  )
}

export default Orea;
