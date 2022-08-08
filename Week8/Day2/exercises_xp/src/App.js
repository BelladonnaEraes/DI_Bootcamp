import React from 'react';
import './App.css';
import Car from './components/Car.js';
function App() {
//{/*const carinfo = {name: "Ford", model: "Mustang"};*/}
  return (
    <div className="App">
      <header className="App-header">
        <Car  />{/*model={carinfo.model}*/}
      </header>
    </div>
  );
}

export default App;
