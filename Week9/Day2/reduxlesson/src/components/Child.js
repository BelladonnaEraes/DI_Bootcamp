import {connect} from 'react-redux'

const Child =(props)=> {
  return (
    <>
    <h1>Hello</h1>
    <p>from Child {props.proporty}</p>
    <p>from Child {props.proporty2}</p>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    proporty:state.prop_one,
    proporty2:state.prop_two
  }
}

export default connect(mapStateToProps)(Child)
