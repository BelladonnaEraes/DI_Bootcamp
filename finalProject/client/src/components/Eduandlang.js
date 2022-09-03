import Language from './Language.js'
import {connect} from 'react-redux'
import {getValue2, getEduCityuProf, getEduCity, getEduPlace, getEduYears} from '../redux/actions.js'
import React from "react"
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const Eduandlang =(props)=>{


console.log("Eduandlang", props.formvalues2 )
  return(
    <>
    <h1>Step 3: Education and language information</h1>
    <form>
          <h4>Education</h4><br/>
          <Input placeholder="Name of profession"
                 onChange={(e)=>props.getEduCityuProf(e.target.value)}
                 name='education_profession' type='text'
                 style={{margin:'10px',width:'45%'}}/><br/>
          <Input placeholder="Location"
                 onChange={(e)=>props.getEduCity(e)}
                 name='education_city'
                 type='text'
                 style={{margin:'10px',width:'45%'}}/><br/>
          <Input placeholder="Name of education place"
                 onChange={(e)=>props.getEduPlace(e)}
                 name='education_place'
                 type='text'
                 style={{margin:'10px',width:'45%'}}/><br/>
          <Input placeholder="Years of studiyng"
                 onChange={(e)=>props.getEduYears(e)}
                 name='education_years'
                 type='text'
                 style={{margin:'10px',width:'45%'}}/><br/>
                 <div>{props.formvalues2[1]&&props.formvalues2[1].education_profession}</div>
          <Button onClick={()=>props.getValue2()}
                  variant="text"
                  style={{margin:'10px'}}>Add education</Button>
          <div>

          {
            props.formvalues2.map(item=>{
              return
              (
              <div>
                <div>{item.education_profession}</div>
                <div>{item.education_city}</div>
                <div>{item.education_place}</div>
                <div>{item.education_years}</div>
              </div>
              )
            })
          }
            </div>
          <h4>Language</h4><br/>
          <Language/><br/>
          <Button type="submit"
                  variant="text"
                  style={{margin:'10px'}}>Finish</Button>
      </form>
    </>
  )
}
const mapStateToProps=(state)=>{
  return {
    formvalues2:state.formvalues2
  }
}
const mapDispatchToProp = (dispatch) => {
  return {
    getEduCityuProf: (val)=>dispatch(getEduCityuProf(val)),
    getEduCity: (val)=>dispatch(getEduCity(val)),
    getEduPlace: (val)=>dispatch(getEduPlace(val)),
    getEduYears: (val)=>dispatch(getEduYears(val)),
    getValue2:() => dispatch(getValue2()),
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Eduandlang)
