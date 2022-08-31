import logo from './logo.svg';
import './App.css';
import Customers from './components/Customers.js'
import Customer from './components/Customer.js'
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
<>
      <Routes>
        <Route part='/' element={<Customers/>}/>
        <Route part='/data/:id' element={<Customer/>}/>
        </Routes>
</>

  );
}

export default App;
