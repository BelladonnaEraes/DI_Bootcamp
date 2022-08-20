import {connect} from 'react-redux'


const SearchBut = (props)=>{
     const handleClick = () => {
    const searchkey = props
    console.log(searchkey)
  }
fetch(`http://www.omdbapi.com/?apikey=14600d9e&t=${searchkey}&plot=full`)
    .then(response => response.json())
    .then(response=> {
      console.log(response)
    })
    .catch(err=> console.log(err))
  return (
    <div>
    <div><button onClick={handleClick}>Search</button></div>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return{
    searchkey:state.searchkey
  }
}

export default connect(mapStateToProps)(SearchBut)
