import React from 'react'
import {connect} from 'react-redux'
import Child from './components/Child.js'
import {handleChangeAction, handleClickAction} from './redux/actions.js'
import One from './components/One.js'
import Two from './components/Two.js'


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      property_one:'One1',
      property_two:'One2'
    }
  }
  inInput =(e)=> {
    this.setState({
      property_one:e.target.value
    })
  }
  inInput2 =() => {
    this.setState({
      property_two:this.state.property_one
    })
  }
    render(){
      return(
        <>
        <div>
          <div>This is property one {this.state.property_one}</div>
          <div>This is prop_one one {this.props.property_two}</div>
        {  /*<input onChange = {this.inInput}/>*/}
          <input onChange = {this.props.ab}/>
          {/*<div>This is property two {this.state.property_two}</div>*/}
          <div>This is prop_one two {this.props.a}</div>
          <div>This is prop_one two {this.props.b}</div>
          {/*<button onClick = {this.inInput2}>Push</button>*/}
          <button onClick = {()=>this.props.aa()}>Push</button>
          <Child />
        </div>
        <div>
          <One />
        </div>
        <div>
           <Two />
        </div>
        </>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    a:state.prop_one,
    b:state.prop_two
  }
}
const mapDispatchToProp = (dispatch) => {
  return {
    ab:(e) => dispatch(handleChangeAction(e.target.value)),
    aa:(e) => dispatch(handleClickAction())
  }
}
export default connect(mapStateToProps, mapDispatchToProp)(App);
