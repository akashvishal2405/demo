import React from 'react';
import './Falooda.css';
import Falooda1 from '../assets/falooda1.jpg';
import Falooda2 from '../assets/falooda2.jpg';
import Falooda3 from '../assets/falooda3.jpg';
import Falooda4 from '../assets/falooda4.jpg';
import Falooda5 from '../assets/falooda5.jpg';




const Falooda = () => {
  return (
    <>
          <div className="outerbox">
            <div>
               <button className='fav'>fav</button>
                <img src={Falooda1} alt="Falooda" className='content'/>
                <p>Falooda &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>
            <div>
            <button className='fav'>fav</button>
                <img src={Falooda2} alt="Falooda" className='content'/>
                <p>Falooda &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>
            <div>
            <button className='fav'>fav</button>
                <img src={Falooda3} alt="Falooda" className='content'/>
                <p>Falooda &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>
            <div>
            <button className='fav'>fav</button>
                <img src={Falooda4} alt="Falooda" className='content'/>
                <p>Falooda &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>
            <div>
            <button className='fav'>fav</button>
                <img src={Falooda5} alt="Falooda" className='content'/>
                <p>Falooda &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x20B9;70</p>
            </div>

        </div>
    </>
  )
}

export default Falooda