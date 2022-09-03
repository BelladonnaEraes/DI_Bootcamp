import {connect} from 'react-redux'
import {getValue} from '../redux/actions.js'
import React from "react"
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import './stylecomponents.css'

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
      linkedin:'',
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
    <Input placeholder="First name" onChange={(e)=>this.handleChange(e)} name='fname' type='text' style={{margin:'10px',width:'20%'}}/>
    <Input placeholder="Last name" onChange={(e)=>this.handleChange(e)} name='lname' type='text' style={{margin:'10px',width:'20%'}}/><br/>
    <Input placeholder="Profession" onChange={(e)=>this.handleChange(e)} name='profession' type='text' style={{margin:'10px',width:'20%'}}/>
    <Input placeholder="City" onChange={(e)=>this.handleChange(e)} name='city' style={{margin:'10px',width:'20%'}}/><br/>
    <Input placeholder="Telephone number" onChange={(e)=>this.handleChange(e)} name='telephone' style={{margin:'10px',width:'20%'}}/>
    <Input placeholder="E-mail" onChange={(e)=>this.handleChange(e)} name='mail' style={{margin:'10px',width:'20%'}}/><br/>
    <Input placeholder="Github" onChange={(e)=>this.handleChange(e)} name='github' style={{margin:'10px',width:'43%'}}/><br/>
    <Input placeholder="LinkedIn" onChange={(e)=>this.handleChange(e)} name='linkedin' style={{margin:'10px',width:'43%'}}/><br/>
    <Input placeholder="Personal portfolio" onChange={(e)=>this.handleChange(e)} name='portfolio' style={{margin:'10px',width:'43%'}}/><br/>
    <Input placeholder="Website URL" onChange={(e)=>this.handleChange(e)} name='website' style={{margin:'10px',width:'43%'}}/><br/>
    <Input placeholder="Blog url" onChange={(e)=>this.handleChange(e)} name='blog' style={{margin:'10px',width:'43%'}}/><br/>
    <Button type="submit" variant="text" style={{margin:'10px'}}>Next step</Button>
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
