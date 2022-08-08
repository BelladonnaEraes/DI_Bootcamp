import logo from './logo.svg';
import './exercise.css';

const Exercise4 =() => {
  return (
  <div>  <div>
     <h1>This is a Header</h1>
     <p className='para'>This is paragraph</p>
     <a
     href="https://reactjs.org"
     target="_blank"
     rel="noopener noreferrer">This ia a link</a>
     <h3>This is a Form:</h3>
     <lable>Enter your name</lable>
     <imput/>
     <h6>Here is an Image:</h6>
      <img src={logo}  alt="logo" />
     </div></div>
   )
}

export default Exercise4
