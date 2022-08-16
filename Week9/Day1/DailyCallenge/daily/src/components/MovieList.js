import {connect} from 'react-redux'
import {detail} from '../actions/index.js';


const MovieList=(props)=> {
  return (
    <div>
      <h1>Movie List</h1>
      {
        props.movies.map((movie,i)=>{
          return(
            <div key={i}>
             {movie.title}<button onClick={()=>props.m(movie)}>Details</button>

            </div>
          )
        })
      }
    </div>
  )
}

const mapStateToProps =(state)=>{
   return {
     movies: state.movies
   }
}
const mapDispatchToProps = (dispatch) => {
  return {
    m: (obj) => dispatch(detail(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
