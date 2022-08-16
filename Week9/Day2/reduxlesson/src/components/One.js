import {connect} from 'react-redux'
const One =(props)=> {
  console.log(props)
  return(
    <>
    <h1>One</h1>
    Display a state from store: {props.one}
    </>
  )
}
const mapStateToProps = (state) => {
  return{
    one:state.one_one
  }
}
export default connect(mapStateToProps)(One)
