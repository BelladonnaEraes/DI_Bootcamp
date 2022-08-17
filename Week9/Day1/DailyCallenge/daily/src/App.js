
import './App.css';
//import MovieDetails from './components/MovieDetails.js'
//import MovieList from './components/MovieList.js'
//import {detail} from '../actions/index.js';

import {connect} from 'react-redux'
import {getUsers} from './actions/index.js';
function App(props) {

  return (
    <div onClick={()=>props.dispatch(getUsers())} className="App">
      <button>Push</button>
      <div>
        Search: <input type="text" />
      </div>
      {
        props.users.map((item,i)=>{
          return(
            <div key={item.id}>
             {item.name}
            </div>
          )
        })
      }
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    users:state.users
  }
}

export default connect(mapStateToProps) (App);
