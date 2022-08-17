import {connect} from 'react-redux'
import {increase, dectease} from '../actions'


const Counter =(props)=>{
  return (
    <>
    your age {props.c}
    <div><button onClick={()=>props.d()}>Age Down</button>

    <button onClick={()=>props.i()}>Age Up</button></div>

    </>
  )
}
const mapStateToProps=(state)=>{
  return {
    c:state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    i:()=>dispatch(increase()),
    d:()=>dispatch(dectease())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
