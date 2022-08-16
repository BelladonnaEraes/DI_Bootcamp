import React, {Component} from 'react'
import User from './User'
import './App.css';
import Search from './Search'
import {connect} from 'react-redux'
import {setSearchField} from './actions.js'



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searctTxt: ''
    }
    console.log('constructor');
  }

  getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      this.setState({users:data})
    })
    .catch(e=>{
      console.log(e);
    })
  }

  componentDidMount(){
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      this.setState({users:data})
    })
    .catch(e=>{
      console.log(e);
    })
  }

  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate', prevState, this.state);
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({searctTxt:event.target.value})
  }

  render(){
    const filterUsers = this.state.users.filter(item => {
      return item.name.toLowerCase().includes(this.state.searctTxt.toLowerCase())
    })

    return(
      <div>

        <Search myhandler={this.handleChange}/>
        <div>
        {
          filterUsers.map(item =>{
            return <User data={item} key={item.id}/>
          })
        }
        </div>
      </div>
    )
  }
}
const mapStateToProps =(state)=>{
   return {
       searctTxt: state.searchRobot.searctTxt
   }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (event) => dispatch(setSearchField(event.target.value))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
