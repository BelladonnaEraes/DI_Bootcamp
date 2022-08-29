import Language from './Language.js'
import {connect} from 'react-redux'
import {getValue2} from '../redux/actions.js'
import React from "react"

  class Eduandlang extends React.Component{
    constructor(){
    super()
    this.state={
      formvalues2:{
        education_profession:'',
        education_city:'',
        education_place:'',
        education_years:''
      }
    }
  }

  handleChange=(e)=>{
    this.state.formvalues2[e.target.name]=e.target.value;
    this.setState({
      formvalues2:{...this.state.formvalues2}
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state.formvalues2)
    this.props.getValue2(this.state.formvalues2)
  }
    render(){
  return(
    <>
    <h1>Step 3: Education and language information</h1>
    <form onSubmit={this.handleSubmit}>
    <label>Education</label><br/>
    <label>Name of profession</label><input onChange={(e)=>this.handleChange(e)} name='education_profession' type='text'/><br/>
    <label>Country and city </label><input onChange={(e)=>this.handleChange(e)} name='education_city' type='text'/><br/>
    <label>Name of education place </label><input onChange={(e)=>this.handleChange(e)} name='education_place' type='text'/><br/>
    <label>Years of studiyng </label><input onChange={(e)=>this.handleChange(e)} name='education_years' type='text'/><br/>
    <label>Language</label><br/>
    <Language/><br/>
    <input type="submit" value="Finish" />
    </form>
    </>
  )
}
}
const mapDispatchToProp = (dispatch) => {
  return {
    getValue2:(obj) => dispatch(getValue2(obj)),
  }
}

export default connect(null,mapDispatchToProp)(Eduandlang)
