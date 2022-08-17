import {connect} from 'react-redux'


const MovieDetails=(props)=> {
  return (
    <>
    <div>
      <h1>Movie Details</h1>
      <h4>{props.movie.title}</h4>
      <p>{props.movie.releaseDate}</p>
      <p>{props.movie.rating}</p>
    </div>
    <div>

    </div>
    </>
  )
}
const mapStateToProps = (state) =>{
  return {
    movie:state.movie,
    
  }
}
export default connect(mapStateToProps)(MovieDetails)
