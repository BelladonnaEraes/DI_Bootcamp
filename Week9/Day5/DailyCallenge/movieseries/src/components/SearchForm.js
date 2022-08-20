import {connect} from 'react-redux'
import {handleKey} from '../redux/actions.js'

const SearchForm = (props)=>{
  return (
    <div>
    <h1>Search for a movie, TV series..</h1>
    <div><input  type="text" name='searchkey' onChange={props.handleChange}/></div>
    </div>
  )
}

const mapDispatchToProps=(dispatch)=>{
  return{
     handleChange:(e)=> dispatch(handleKey(e.target.value))
  }

}
export default connect (null, mapDispatchToProps)(SearchForm)
