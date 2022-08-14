import React from 'react'
import Cards from './components/Cards.js';
import './App.css';

class App extends React.Component() {
  constructor(){
    super()
    this.state = {
      display:'block'
    }}
    hide=() =>{
  this.setState({display:'none'})
    }
  render(){
  return (
    <div className="App">
      <header className="App-header" style={{display:this.state.display}}>
      <Cards />
      <button onClick={this.hide}>Hide</button>
      </header>
    </div>
  );
}
}

export default App;
