import {connect} from 'react-redux';
import {getNameProj, getNameProjUrl, getNameProjDesc, getAllProj} from '../redux/actions.js';
import React from "react"
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import './stylecomponents.css'

const Projects=(props)=>{

  console.log("Projects", props.all_project )

  return(
    <>
    <h4>Technical project</h4><br/>
    <Input placeholder="Name" onChange={(e)=>props.getNameProj(e.target.value)} name='name_project' type='text' style={{margin:'10px'}} />
    <Input placeholder="Url" onChange={(e)=>props.getNameProjUrl(e.target.value)} name='name_project_url' type='text' style={{width:'40%'}}/><br/>
    <TextField
         id="standard-multiline-static"
         label="Description"
         placeholder="Tell about your project"
         multiline rows={4}
         variant="standard"
         style={{margin:'10px',width:'43%'}}
         onChange={(e)=>props.getNameProjDesc(e.target.value)} name='name_project_description' type='text'
       /><br/>
     <Button onClick={()=>props.getAllProj()} variant="text" style={{margin:'10px'}}>Add project</Button>
    </>
  )
}
const mapStateToProps=(state)=>{
  return {
    all_project:state.all_project
  }
}
const mapDispatchToProp= (dispatch) => {
  return {
  getNameProj: (val)=>dispatch(getNameProj(val)),
  getNameProjUrl: (val)=>dispatch(getNameProjUrl(val)),
  getNameProjDesc: (val)=>dispatch(getNameProjDesc(val)),
  getAllProj: ()=>dispatch(getAllProj())
}
}

export default connect(mapStateToProps, mapDispatchToProp)(Projects)
