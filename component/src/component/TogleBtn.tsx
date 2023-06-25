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
        Menu
      </button>
      {isOpen && (
        <div className="menu-items">
          <div className="menu-item item-top">Item 1</div>
          <div className="menu-item item-right">Item 2</div>
          <div className="menu-item item-bottom">Item 3</div>
          <div className="menu-item item-left">Item 4</div>
        </div>
      )}
    </button>
    </div>
  );
};

export default RadialMenu;
