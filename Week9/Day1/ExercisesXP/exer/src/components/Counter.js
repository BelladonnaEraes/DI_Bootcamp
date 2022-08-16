import {connect} from 'react-redux'
import {increase, dectease, evenodd} from '../actions'


const Counter =(props)=>{
  return (
    <>
    <h2>Counter</h2>
    <div><button onClick={()=>{props.d();
    props.e(props.c)}}>-</button>
    {props.c}
    <button onClick={()=>{props.i();
    props.e(props.c)}}>+</button></div>
    {props.evenodd}
    </>
  )
}
const mapStateToProps=(state)=>{
  return {
    c:state.counter_reducer.count,
    evenodd: state.evenodd_reducer.evenodd
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    i:()=>dispatch(increase()),
    d:()=>dispatch(dectease()),
    e:(count)=>dispatch(evenodd(count))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
