import './App.css'
import React from 'react';
import Person from './components/Person.js';
import superheroes from './superheroes.json'
import 'tachyons'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      heroes: superheroes.superheroes,
      score: 0,
      topscore: 0,
      firstclick: 0
    }}


    handlClick=(e)=>{
      let score = this.state.score
      let firstclick = this.state.firstclick
      console.log(score)
      this.setState({
          firstclick: firstclick+2
      });
      firstclick > 1  ? this.setState({
          score: 0
        }) : this.setState({
            score: score+1
          })
    }
    render(){
    return(
      <>
    <header>Superheroes Memory Game</header>
    <p>Score {this.state.score}</p>
    <p>First click {this.state.firstclick}</p>
        <section>
        {
          this.state.heroes.map((item,i) =>{
            return <div onClick={this.handlClick} key={i} id={i} className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <Person data={item}/></div>
          })
        }
        </section>
        </>
    )
  }
}


export default App;
