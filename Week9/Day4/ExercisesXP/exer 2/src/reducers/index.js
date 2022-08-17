import {AGE_UP, AGE_DOWN} from '../actions/index.js'

const initialState = {
  age:20
}

export const reducer =(state=initialState, action={}) =>{
  switch (action.type){
    case AGE_UP:
    return {...state, age: state.age+action.payload}

    case AGE_DOWN:
     return {...state, age: state.age-1}

     default:
     return {...state}
  }

}
