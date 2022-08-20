import Home from "./Home.js"
import About from "./About.js"
import Contact from "./Contact.js"
import {Routes, Route, Link } from "react-router-dom"


const Navbar=()=>{
  return(
    <>
    <nav>
       <div class="nav-wrapper">
         <Link to='/' href="#!" class="brand-logo">My blog</Link>
         <ul class="right hide-on-med-and-down">
           <li><Link to='/home'>Home</Link></li>
           <li><Link to='/about'>About</Link></li>
           <li><Link to='/contact'>Contact</Link></li>
         </ul>
       </div>
       <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<><Contact/></>}/>
     </Routes>
      </nav>
    </>)
}

export default Navbar
