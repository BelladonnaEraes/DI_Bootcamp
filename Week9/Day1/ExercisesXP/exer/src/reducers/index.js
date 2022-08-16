import {INCREASE_COUNT, DECREASE_COUNT, EVEN_ODD} from '../actions/index.js'
import {combineReducers} from 'redux'

const initialState = {
  count:0,
  evenodd:''
}

export const counter_reducer =(state=initialState, action={}) =>{
  switch (action.type){
    case INCREASE_COUNT:
    return {...state, count: state.count+1}
    case DECREASE_COUNT:
     return {...state, count: state.count-1}
     default:
     return {...state}
  }
}
export const evenodd_reducer =(state=initialState, action={}) =>{
  switch(action.type) {
    case EVEN_ODD:
     return {...state, evenodd: action.payload % 2 === 0 ? 'ODD':'EVEN'}

    default:
    return {...state, evenodd: state.count % 2 === 0 ? 'EVEN':'ODD'}

}
}


export const reducer = combineReducers(
  {
    counter_reducer,
    evenodd_reducer
  }
)
