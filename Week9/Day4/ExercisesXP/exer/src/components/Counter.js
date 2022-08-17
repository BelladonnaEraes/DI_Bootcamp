import {connect} from 'react-redux'
import {increase, dectease} from '../actions'


const Counter =(props)=>{
  return (
    <>
    <h2>Counter</h2>
    <div><button onClick={()=>props.d()}>-</button>
    {props.c}
    <button onClick={()=>props.i()}>+</button></div>
    <button>Increment if odd</button>

    </>
  )
}
const mapStateToProps=(state)=>{
  return {
    c:state.counter_reducer.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    i:()=>dispatch(increase()),
    d:()=>dispatch(dectease())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
