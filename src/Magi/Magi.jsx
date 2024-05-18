import React from 'react';
import './Magi.css';
import Magi1 from '../assets/magi1.jpg';
import Magi2 from '../assets/magi2.jpg';
import Magi3 from '../assets/magi3.jpg';
import Magi4 from '../assets/magi4.jpg';
import Magi5 from '../assets/magi5.jpg';

const Magi = () => {
  return (
    <>
         <div className="outerbox">
            <div>
            <button className='fav'>fav</button>
                <img src={Magi1} alt="Magi" className='content'/>
                <p>Magi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>
            <div>
            <button className='fav'>fav</button>
                <img src={Magi2} alt="Magi" className='content'/>
                <p>Magi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>
            <div>
            <button className='fav'>fav</button>
                <img src={Magi3} alt="Magi" className='content'/>
                <p>Magi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>
            <div>
            <button className='fav'>fav</button>
                <img src={Magi4} alt="Magi" className='content'/>
                <p>Magi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>
            <div>
            <button className='fav'>fav</button>
                <img src={Magi5} alt="Magi" className='content'/>
                <p>Magi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>

        </div>
    </>
  )
}

export default Magi