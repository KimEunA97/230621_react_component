import React, { useState } from 'react';

const RadialMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="radial-menu">
      <button className="menu-toggle" onClick={toggleMenu}>
        Menu
      </button>
      {isOpen && (
        <div className="menu-items">
          <button className="menu-item">Item 1</button>
          <button className="menu-item">Item 2</button>
          <button className="menu-item">Item 3</button>
          <button className="menu-item">Item 4</button>
        </div>
      )}
    </div>
  );
};

export default RadialMenu;
