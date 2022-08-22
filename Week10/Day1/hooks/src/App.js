import {useState, useEffect} from 'react'
import './App.css';
import Count from './Count.js'
import Robofam from './Robofam.js'
import {Routes, Route, Link } from "react-router-dom"
import Posts from './Posts.js'

const App=()=> {
  const [name,setName] =useState('Blog')
// useEffect(()=>{
//   console.log('Hello')
// })

  return (
    <div className="App">
      <header className="App-header">
      <h1>Hooks</h1>
      {name}
      <div>
    {  /* <button onClick ={()=>setName('Belladonna')}>Change Name</button>
       <input type='text'/>*/
    }
      </div>
    {  //<Count />
    }
      <div ><Link to="/" style={{color:'white'}}>Home</Link></div>
      <Routes>

      <Route path ='/' element={<Robofam />}/>
      <Route path ='/posts/:id' element={<Posts/>}/>
      </Routes>
      </header>

    </div>
  );
}

export default App;
