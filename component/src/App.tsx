import React from 'react';
import RadialMenu from './component/TogleBtn';
import VerticalMenu from './component/VerticalMenu';

const App = () => {


  const names = ["1", "2", "3", "4", "5","6"]
  const nameList = names.map((name) => (<VerticalMenu floors={name} />))

  return (
    <div className="app">

      <p>{nameList}</p>

    </div>
  );
};

export default App;