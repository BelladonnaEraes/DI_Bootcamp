import Country from './Country.js'
import {connect} from 'react-redux'
import {getValue} from '../redux/actions.js'
import React from "react"
import TextField from '@mui/material/TextField';

class Personality extends React.Component {
  constructor(){
  super()
  this.state={
    formvalues:{
      fname:'',
      lname:'',
      profession:'',
      city:'',
      telephone:'',
      mail:'',
      github:'',
      portfolio:'',
      website:'',
      blog:''
    }
  }
}

handleChange=(e)=>{
  this.state.formvalues[e.target.name]=e.target.value;
  this.setState({
    formvalues:{...this.state.formvalues}
  })
}
handleSubmit=(e)=>{
  e.preventDefault();
  console.log(this.state.formvalues)
  this.props.getValue(this.state.formvalues)
}
  render(){
    return(
    <>
    <h1>Step 1: Personal information</h1>
    <form onSubmit={this.handleSubmit}>
    <label>First name</label>
    {/*<TextField id="standard-basic" label="Standard" variant="standard" />*/}
    <input onChange={(e)=>this.handleChange(e)} name='fname' type='text'/>
    <label>Last name</label>
    <input onChange={(e)=>this.handleChange(e)} name='lname' type='text'/><br/>
    <label>Profession</label>
    <input onChange={(e)=>this.handleChange(e)} name='profession' type='text'/><br/>
    <label onChange={(e)=>this.handleChange(e)} name='city'>City</label>
    <input/><br/>
    <label >Telephone number</label>
    <Country/><input onChange={(e)=>this.handleChange(e)} name='telephone'/><br/>
    <label>E-mail</label>
    <input onChange={(e)=>this.handleChange(e)} name='mail'/><br/>
    <label>Github</label>
    <input onChange={(e)=>this.handleChange(e)} name='github'/><br/>
    <label> LinkedIn</label>
    <input onChange={(e)=>this.handleChange(e)} name='linkedin'/><br/>
    <label> Personal portfolio</label>
    <input onChange={(e)=>this.handleChange(e)} name='portfolio'/><br/>
    <label> Website URL</label>
    <input onChange={(e)=>this.handleChange(e)} name='website'/><br/>
    <label> Blog url</label>
    <input onChange={(e)=>this.handleChange(e)} name='blog'/><br/>
    <input type="submit" value="Next step" />
    </form>
    </>
  )
}
}
const mapDispatchToProp = (dispatch) => {
  return {
    getValue:(obj) => dispatch(getValue(obj)),
  }
}

export default connect(null,mapDispatchToProp)(Personality)
