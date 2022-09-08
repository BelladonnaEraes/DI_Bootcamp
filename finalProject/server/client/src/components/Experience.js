import {connect} from 'react-redux'
import {getValue1} from '../redux/actions.js'
import React from "react"
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Projects from './Projects.js'
import Expjob from './Expjob.js'
import MultipleSelectChip from './Skills.js'
import './stylecomponents.css'


class Experience extends React.Component{
  constructor(){
  super()
  this.state={
    formvalues1:{
      summary:''
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
    <h3 style={{margin:'30px'}}><i>Step 2: Experience information</i></h3>
    <form onSubmit={this.handleSubmit}>
    <Projects/>
    <Expjob />
    <MultipleSelectChip/>
    <TextField
         id="standard-multiline-static"
         label="Summary"
         placeholder="Tell about yourself"
         multiline rows={4}
         variant="standard"
         style={{margin:'10px',width:'43%'}}
         onChange={(e)=>this.handleChange(e)} name='summary' type='text'
       /><br/>
      <Button type="submit" variant="contained" style={{margin:'20px'}}>Next step</Button>
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
