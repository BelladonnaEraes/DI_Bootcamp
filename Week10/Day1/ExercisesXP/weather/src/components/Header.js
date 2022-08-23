import './header.css'
import {Routes, Route, Link } from "react-router-dom"
import Favlist from "./Favlist.js"
import Body from "./Body.js"
function App() {

const Header =()=> {
  return(
    <>
      <div className='navbar'>

      <div className='linknavbar'>

      <div><Link to='/'>Home</Link></div>
      <div><Link to='/favlist'>Favorites</Link></div>

    </div>
      <div>My fav weather app</div>

    </div>
      <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='/favlist' element={<Favlist/>}/>
      </Routes>
    </>
  )
}

export default Header
