import React from 'react';
import Quotes from './components/Quotes.js'
import './App.css';
import quotes from './QuotesDatabase.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: []
    }
  }

  getQuote = () => {
    this.setState({quote:quotes[Math.floor(Math.random()*quotes.length)]})
  }
  //console.log(quotes)

render(){
  console.log('quote',this.state.quote);
  return(
    <div>
      <div className="box">
        <Quotes data={this.state.quote} />

      <button onClick={this.getQuote}>New quote</button>
      </div>
    </div>
  )
}
}
export default App;
