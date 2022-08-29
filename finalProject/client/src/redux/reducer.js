import {VALUE_INPUT, VALUE_INPUT1, VALUE_INPUT2} from './actions.js'


const initState={
  formvalues:{},
  formvalues1:{},
  formvalues2:{}
}

export const reducer = (state=initState, action={}) => {
  switch (action.type){
    case VALUE_INPUT:
    console.log("this action", action.payload )
    return {...state, formvalues: action.payload}

    case VALUE_INPUT1:
    console.log("this action", action.payload )
    return {...state, formvalues1: action.payload}

    case VALUE_INPUT2:
    console.log("this action", action.payload )
    return {...state, formvalues2: action.payload}

     default:
     return {...state}
  }

}
