import React, { useState } from "react";
import "./App.css";
import PieMenu from "./component/PieMenu";

function Circle() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [1, 2, 3, 4, 5]; // 메뉴 아이템을 나타내는 데이터 배열

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`menu ${isOpen ? "open" : ""}`}>
      {menuItems.map((item) => (
        <div className="menuItem" key={item}>
          {item}
        </div>
      ))}
      <button className="toggleButton" onClick={toggleMenu}>
        {isOpen ? "Close" : "Open"}
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <PieMenu></PieMenu>
    </div>
  );
}

export default App;
