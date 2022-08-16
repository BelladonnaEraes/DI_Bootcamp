
import './App.css';
import MovieDetails from './components/MovieDetails.js'
import MovieList from './components/MovieList.js'
function App() {
  return (
    <div className="App">

      <div><MovieList/></div>
      <div><MovieDetails/></div>

    </div>
  );
}

export default App;
