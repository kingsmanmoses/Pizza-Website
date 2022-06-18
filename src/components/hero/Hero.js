import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import './hero.css';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="herocont">
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <div className="herocontent">
          <div className="heroitems">
            <h1>Greatest Pizza Ever</h1>
            <p>Ready in 60 Seconds</p>
            <button className="herobtn">Place Order</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
