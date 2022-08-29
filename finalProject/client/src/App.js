import Allparts from './components/Allparts.js'
import './App.css';
import {connect} from 'react-redux'
import Readylist from './components/Readylist.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Readylist />
      <Allparts/>
      </header>
    </div>
  );
}

export default App;
