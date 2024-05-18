import React from 'react';
import './Spicalshakes.css';
import Spicalshakes1 from '../assets/spicalshakes1.jpg';
import Spicalshakes2 from '../assets/spicalshakes2.jpg';
import Spicalshakes3 from '../assets/spicalshakes3.jpg';
import Spicalshakes4 from '../assets/spicalshakes4.jpg';
import Spicalshakes5 from '../assets/spicalshakes5.jpg';

const Spicalshakes = () => {
  return (
    <>
    <div>
     <div className="outerbox">
            <div>
            <button className='fav'>fav</button>
                <img src={Spicalshakes1} alt="Spical" className='content'/>
                <p>Spical Shakes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>
            <div>
           <button className='fav'>fav</button>
                <img src={Spicalshakes2} alt="Spical" className='content'/>
                <p>Spical Shakes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>
            <div>
            <button className='fav'>fav</button>
                <img src={Spicalshakes3} alt="Spical" className='content'/>
                <p>Spical Shakes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>
            <div>
            <button className='fav'>fav</button>
                <img src={Spicalshakes4} alt="Spical" className='content'/>
                <p>Spical Shakes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>
            <div>
            <button className='fav'>fav</button>
                <img src={Spicalshakes5} alt="Spical" className='content'/>
                <p>Spical Shakes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>

        </div>
    </div>
    </>
  )
}

export default Spicalshakes