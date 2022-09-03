import Allparts from './components/Allparts.js'
import './App.css';
import Readylist from './components/Readylist.js'
import {Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <div className="App">

      <header className="App-header">
      <Link to='/' style={{margin:'10px'}}>Home</Link>
      <Link to='/readylist' style={{margin:'10px'}}>Ready list</Link>
      </header>

      <Routes>
        <Route path='/readylist' element={<Readylist />} />
        <Route path='/' element={<Allparts/>} />
      </Routes>
    </div>

  );
}

export default App;
