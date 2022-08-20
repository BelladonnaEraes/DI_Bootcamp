import './App.css';
import Navbar from './components/Navbar.js'
import Post from './components/Post.js'
import Connector from './components/Connector.js'


import {Routes, Route, Link} from "react-router-dom"
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
       <Route path='/post_id' element={<Connector/>}/>
      </Routes>
    </div>
  );
}

export default App;
