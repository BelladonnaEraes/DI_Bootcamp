
//import './App.css';

import {Routes, Route, Link } from "react-router-dom"
import Header from './components/Header.js';
import Favlist from './components/Favlist.js';
import Body from './components/Body.js';
function App() {
  return (
    <div>
      <header >
      <div className='navbar'>
      <div className='linknavbar'>
      <div><Link to='/'>Home</Link></div>
      <div><Link to='/favlist'>Favorites</Link></div>
      </div>
      <div>My fav weather app</div>
      <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='/favlist' element={<Favlist/>}/>
      </Routes>
      </div>
      </header>
    </div>
  );
}

export default App;
