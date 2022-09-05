import Personality from './Personality.js'
import Experience from './Experience.js'
import Eduandlang from './Eduandlang.js'
import './stylecomponents.css'
import Button from '@mui/material/Button';
import {connect} from 'react-redux'
import {getAlldata} from '../redux/actions.js'


const Allparts=(props)=>{

  const saveAll =(e)=>{
    e.preventDefault()
    console.log('alldata',props.alldata)
    props.getAlldata()
  }

  return(
    <>
    <Personality/>
    <Experience/>
    <Eduandlang/>
    <Button type="submit"
            variant="text"
            style={{margin:'10px'}}
            onClick={saveAll}>Finish</Button>
    </>
  )
}

const mapStateToProps=(state)=>{
  return {
      alldata:state.alldata
  }
}
const mapDispatchToProp = (dispatch) => {
  return {
     getAlldata:() => dispatch(getAlldata())
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Allparts)
