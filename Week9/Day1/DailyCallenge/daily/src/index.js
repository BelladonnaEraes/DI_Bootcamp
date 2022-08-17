import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {reducer} from './reducers/index.js';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export const mylogger = (store) => (next) => (action) => {
   console.log("store", store)
   //store.dispatch({type:'MOVIE_DETAIL', payload:{title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4}})
   //console.log("action", action)
  // next(action)
   //console.log("next state", store.getState())
}


const store = createStore(reducer, applyMiddleware(mylogger, logger, thunk))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
</Provider>
  </React.StrictMode>
);

reportWebVitals();
