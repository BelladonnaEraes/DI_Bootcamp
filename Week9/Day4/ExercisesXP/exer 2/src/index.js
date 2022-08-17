import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import  {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger';
import {reducer} from './reducers/index.js'


export const logAction = (action) => {
  console.log(action);

}

const store = createStore(reducer,applyMiddleware(logger))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
