import {createContext, useState} from 'react';
import Allparts from './components/Allparts.js'
import Readylist from './components/ready/Readylist.js'
import Eachlist from './components/ready/Eachlist.js'
import Register from './components/Register.js'
import Signin from './components/Signin.js'
import {Routes, Route, Link } from "react-router-dom"
import './components/stylecomponents.css'


export const AppContext = createContext(null);


function App() {
  const [token, setToken] = useState('');
  return (
  <AppContext.Provider value={{token,setToken}}>
    <div>

      <nav style={{padding:'20px', backgroundColor:'DodgerBlue'}}>
      <Link to='/home' style={{margin:'10px',textDecoration:'none',fontSize:'20px', color:'white'}}><strong>Home</strong></Link>
      <Link to='/readylist' style={{margin:'10px',textDecoration:'none',fontSize:'20px', color:'white'}}><strong>My resumes</strong></Link>
      <Link to='/signup' style={{margin:'10px',textDecoration:'none',fontSize:'20px', color:'white'}}><strong>Register</strong></Link>
      <Link to='/signin' style={{margin:'10px',textDecoration:'none',fontSize:'20px', color:'white'}}><strong>Login</strong></Link>
      </nav>

      <Routes>
        <Route path='/readylist' element={<Readylist />} />
        <Route path='/readylist/:id' element={<Eachlist />} />
        <Route path='/home' element={<Allparts/>} />
        <Route path='/signup' element={<Register/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
