import {INCREASE_COUNT, DECREASE_COUNT, EVEN_ODD} from '../actions/index.js'
import {combineReducers} from 'redux'


const initialState = {
  count:0,
}

export const counter_reducer =(state=initialState, action={}) =>{
  switch (action.type){
    case INCREASE_COUNT:
    return {...state, count: state.count+action.payload}

    case DECREASE_COUNT:
     return {...state, count: state.count-1}
  }
}
export const evenodd_reducer =(state=initialState, action={}) =>{
  switch (action.type){
     case EVEN_ODD:
     return {...state, count: action.payload % 2 === 0 ? (count: state.count-1) : (count: state.count+1)}
     default:
     return {...state}
  }
}
export const reducer = combineReducers(
  {
    counter_reducer,
    evenodd_reducer
  }
)
