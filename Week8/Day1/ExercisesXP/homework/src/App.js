//import logo from './logo.svg';

import './App.css';
import 'tachyons'
import Exercise4 from './Exercise4.js';
import 'tachyons'
const user = {
first_name: 'Bob',
last_name: 'Dylan',
fav_animals : ['Horse','Turtle','Elephant','Monkey']
};
function App() {

return (
<div className="App">
     <header className="App-header">
     < Exercise4/>
     <div>
        <h3>{user.first_name}</h3>
        <h3>{user.last_name}</h3>
          <ul>{user.fav_animals.map((item,i) => (

          <li key={i}>{item}</li>

      ))
      }  </ul>
     </div>
     </header>
</div>
);

  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
