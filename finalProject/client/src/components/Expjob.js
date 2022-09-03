import {connect} from 'react-redux';
import {getPosision,getPosCity,getPosOrg, getPosDescr, getPosYears,getExpJob} from '../redux/actions.js';
import React from "react"
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';



const Expjob =(props)=>{


  return(
    <>
    <h4>Experience</h4><br/>
    <Input placeholder="Job position" onChange={(e)=>props.getPosision(e.target.value)} name='position' type='text' style={{margin:'10px',width:'20%'}}/>
    <Input placeholder="Location" onChange={(e)=>props.getPosCity(e.target.value)} name='position_city' type='text' style={{margin:'10px',width:'20%'}}/><br/>
    <Input placeholder="Name of organisation" onChange={(e)=>props.getPosOrg(e.target.value)} name='organisation' style={{margin:'10px',width:'20%'}}/>
    <Input placeholder="Years" onChange={(e)=>props.getPosYears(e.target.value)} name='organisation_years' type='text' style={{margin:'10px',width:'20%'}}/><br/>
    <TextField
         id="standard-multiline-static"
         label="Description"
         placeholder="Tell about your work experience"
         multiline rows={4}
         variant="standard"
         style={{margin:'10px',width:'43%'}}
         onChange={(e)=>props.getPosDescr(e.target.value)} name='organisation_description' type='text'
       /><br/>
       <Button onClick={()=>props.getExpJob()} variant="text" style={{margin:'10px'}}>Add experience</Button><br/>
       </>
  )
}
const mapDispatchToProp= (dispatch) => {
  return {
  getPosision: (val)=>dispatch(getPosision(val)),
  getPosCity: (val)=>dispatch(getPosCity(val)),
  getPosOrg: (val)=>dispatch(getPosOrg(val)),
  getPosDescr: (val)=>dispatch(getPosDescr(val)),
  getPosYears: (val)=>dispatch(getPosYears(val)),
  getExpJob: ()=>dispatch(getExpJob())
}
}

export default connect(null, mapDispatchToProp)(Expjob)
