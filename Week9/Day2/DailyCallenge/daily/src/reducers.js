
import {CHANGE_SEARCH_FIELD} from './constants.js'
const intialState = {
  searctTxt:''
}

export const searchRobot = (state=intialState, action={})=>{
  switch(action.type){
    case CHANGE_SEARCH_FIELD:
    return Object.assign({}, state, {searctTxt: action.payload})
    default:
    return state
  }
}
