import Personality from './Personality.js'
import Experience from './Experience.js'
import Eduandlang from './Eduandlang.js'
import './stylecomponents.css'
import Button from '@mui/material/Button';
import {connect} from 'react-redux'
import {getAlldata} from '../redux/actions.js'
import {useContext} from 'react'
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import {AppContext} from '../App'

const Allparts=(props)=>{
const {token} = useContext(AppContext);
  const saveAll = (e)=>{
    e.preventDefault()
    const decode = jwt_decode(token);
    const user_id = decode.id
    console.log('json_data',props.json_data)
    props.getAlldata(user_id)

  }

  return(
    <>
    <Personality/>
    <Experience/>
    <Eduandlang/>
    <Button type="submit"
            variant="contained"
            style={{margin:'10px'}}
            onClick={saveAll}>Finish</Button>
    </>
  )
}

const mapStateToProps=(state)=>{
  return {
      json_data:state.json_data
  }
}
const mapDispatchToProp = (dispatch) => {
  return {
     getAlldata:(id) => dispatch(getAlldata(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Allparts)
