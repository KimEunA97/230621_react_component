import React from 'react';
import RadialMenu from './component/TogleBtn';
import VerticalFloors from './component/VerticalFloors';

const App = () => {


  const names = ["1", "2", "3", "4", "5","6"]
  const nameList = names.map((name) => (<VerticalFloors floors={name} />))

  return (
    <div className="app">

      <p>{nameList}</p>

    </div>
  );
};

export default App;