import React from 'react';
import './Mojito.css';
import Mojito1 from '../assets/mojito1.jpg';
import Mojito2 from '../assets/mojito2.jpg';
import Mojito3 from '../assets/mojito3.jpg';
import Mojito4 from '../assets/mojito4.jpg';
import Mojito5 from '../assets/mojito5.jpg';

const Mojito = () => {
  return (
    <>
         <div className="outerbox">
        <div>
        <button className='fav'>fav</button>
          <img src={Mojito1} alt="Mojito" className="content" />
          <p>
          Mojito
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x20B9;70
          </p>
        </div>
        <div>
        <button className='fav'>fav</button>
          <img src={Mojito2} alt="Mojito" className="content" />
          <p>
          Mojito
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x20B9;70
          </p>
        </div>
        <div>
        <button className='fav'>fav</button>
          <img src={Mojito3} alt="Mojito" className="content" />
          <p>
          Mojito
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x20B9;70
          </p>
        </div>
        <div>
        <button className='fav'>fav</button>
          <img src={Mojito4} alt="Mojito" className="content" />
          <p>
          Mojito
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x20B9;70
          </p>
        </div>
        <div>
        <button className='fav'>fav</button>
          <img src={Mojito5} alt="Mojito" className="content" />
          <p>
          Mojito
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x20B9;70
          </p>
        </div>
      </div>
    </>
  )
}

export default Mojito