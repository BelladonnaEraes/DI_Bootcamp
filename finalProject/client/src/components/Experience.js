import {connect} from 'react-redux'
import {getValue1} from '../redux/actions.js'
import React from "react"
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Projects from './Projects.js'
import Expjob from './Expjob.js'
class Experience extends React.Component{
  constructor(){
  super()
  this.state={
    formvalues1:{
      summary:'',
      skills:''
    }
  }
}

handleChange=(e)=>{
  this.state.formvalues1[e.target.name]=e.target.value;
  this.setState({
    formvalues1:{...this.state.formvalues1}
  })
}
handleSubmit=(e)=>{
  e.preventDefault();
  console.log(this.state.formvalues1)
  this.props.getValue1(this.state.formvalues1)
}
  render(){
  return(
    <>
    <h1>Step 2: Experience information</h1>
    <form onSubmit={this.handleSubmit}>
    <Projects/>
    <Expjob />
    <TextField
         id="standard-multiline-static"
         label="Summary"
         placeholder="Tell about yourself"
         multiline rows={4}
         variant="standard"
         style={{margin:'10px',width:'43%'}}
         onChange={(e)=>this.handleChange(e)} name='summary' type='text'
       /><br/>
      <Input placeholder="Technical skills" onChange={(e)=>this.handleChange(e)} name='skills' type='text' style={{margin:'10px',width:'43%'}}/><br/>
      <Button type="submit" variant="text" style={{margin:'10px'}}>Next step</Button>
    </form>
    </>
  )
}
}
const mapDispatchToProp = (dispatch) => {
  return {
    getValue1:(obj) => dispatch(getValue1(obj)),
  }
}

export default connect(null,mapDispatchToProp)(Experience)
