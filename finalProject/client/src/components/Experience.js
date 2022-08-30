import {connect} from 'react-redux'
import {getValue1} from '../redux/actions.js'
import React from "react"

class Experience extends React.Component{
  constructor(){
  super()
  this.state={
    formvalues1:{
      summary:'',
      skills:'',
      name_project:'',
      name_project_url:'',
      name_project_description:'',
      position:'',
      position_city:'',
      organisation:'',
      organisation_years:'',
      organisation_description:''
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
      <label >Summary</label><br/>
      <textarea onChange={(e)=>this.handleChange(e)} name='summary' type='text'></textarea><br/>
      <label>Technical skills</label><br/>
      <input onChange={(e)=>this.handleChange(e)} name='skills' type='text'/> <br/>
      <label>Technical project</label><br/>
      <label>Name</label><input onChange={(e)=>this.handleChange(e)} name='name_project' type='text'/>
      <label>Url</label><input onChange={(e)=>this.handleChange(e)} name='name_project_url' type='text'/>
      <label>Description</label><textarea onChange={(e)=>this.handleChange(e)} name='name_project_description' type='text'></textarea><br/>
      <label>Experience</label><br/>
      <label>Job position</label><input onChange={(e)=>this.handleChange(e)} name='position' type='text'/>
      <label>Contry and city</label><input onChange={(e)=>this.handleChange(e)} name='position_city' type='text'/><br/>
      <label>Name of organisation</label><input onChange={(e)=>this.handleChange(e)} name='organisation' type='text'/>
      <label>Years</label><input onChange={(e)=>this.handleChange(e)} name='organisation_years' type='text'/>
      <label>Description</label>
      <button>Add more</button>
      <textarea onChange={(e)=>this.handleChange(e)} name='organisation_description' type='text'></textarea><br/>
      <input type="submit" value="Next step" />
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
