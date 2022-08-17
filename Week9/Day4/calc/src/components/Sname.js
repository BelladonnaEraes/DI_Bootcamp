import {connect} from 'react-redux'
import {getFirstName} from '../redux/actions.js'

const Sname =(props)=>{
  return(
    <>
      <input text="text" name='sname' onChange={props.handleChange}/>
    </>
  )
}
const mapDispatchToProps =(dispatch) => {
  return {
    handleChange:(e) => dispatch(getFirstName(e.target.value))
  }
}

export default connect(null, mapDispatchToProps) (Sname)
