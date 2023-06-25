import React, { useState } from 'react';
import '../css/Togle.css'

const RadialMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="radial-menu">
        <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>

        </button>
        {isOpen && (

          <div className="menu-items">
            <img src="../img/X.png" />

            <div className="menu-item item-top">
            </div>
            <div className="menu-item item-right"></div>
            <div className="menu-item item-bottom"></div>
            <div className="menu-item item-left"></div>
          </div>
        )}
      </button>
    </div>
  );
};

export default RadialMenu;
