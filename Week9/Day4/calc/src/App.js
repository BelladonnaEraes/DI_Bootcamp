import React from 'react'

import But from './components/But.js'
import Fname from './components/Fname.js'
import Sname from './components/Sname.js'
import Result from './components/Result.js'
import './App.css';
const App =()=>{

  return (
    <div className="App">
      <header className="App-header">
        <Fname />
        <Sname />
        <But />
        <Result/>
      </header>
    </div>
  );

}

export default App;
