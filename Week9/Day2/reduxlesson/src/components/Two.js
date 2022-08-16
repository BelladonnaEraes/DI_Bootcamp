import {connect} from 'react-redux'
import {changeOne} from '../redux/actions.js'
const Two =(props)=> {
  return(
    <>
    <h1>Two</h1>
    Change the state One
    <input onChange={(e)=>props.ef(e.target.value)}/>
    </>
  )
}

const mapDispatchToProp = (dispatch) => {
 return {
  ef: (val) => dispatch(changeOne(val))
  }
}
export default connect(null, mapDispatchToProp)(Two)
