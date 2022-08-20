import logo from './logo.svg';
import './App.css';
import Landing from "./components/Landing.js"
import React from 'react'


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      searchkey:'',
      result: []
    }
  }

render(){
  return (
    <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
        <Landing/>

    </div>
  );
}
}
export default App;
