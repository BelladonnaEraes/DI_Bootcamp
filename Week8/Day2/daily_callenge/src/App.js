import React from 'react';
import './App.css';
import 'tachyons'

  class App extends React.Component {
    constructor() {
      super();
      this.state = {
            languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ]
        }
}
add =()=> {// eslint-disable-next-line
  this.setState({votes:this.state.languages.votes+1})
}
render(){
return (
  <div className="App">
    <header className="App-header">
  <div>
   {
     this.state.languages.map((item,i)=>{
      return (<div key={i} className="b--solid flex br3 ma2 pa3">
      {item.votes} {item.name} <button id={i} onClick={this.add}>Click Here!</button></div>)
     })
   }

  </div>
  </header>
</div>
)}
}

export default App;
