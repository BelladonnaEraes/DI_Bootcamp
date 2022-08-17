import {connect} from 'react-redux'
import {getFirstName} from '../redux/actions.js'

const Fname =(props)=>{
  return(
    <>
     <input text="text" name='fname' onChange={props.handleChange}/>
    </>
  )
}
const mapDispatchToProps =(dispatch) => {
  return {
    handleChange:(e) => dispatch(getFirstName(e.target.value))
  }
}

export default connect(null, mapDispatchToProps) (Fname)
