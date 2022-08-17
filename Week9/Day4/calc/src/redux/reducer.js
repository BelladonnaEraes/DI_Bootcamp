import {FIRST_NAME, SECOND_NAME, RESULTS} from './actions.js'



const initState = {
  fname:'',
  sname:'',
  result: {}
}

export const reducer = (state=initState, action) => {
  switch (action.type) {
    case FIRST_NAME:
      return {...state, fname:action.payload}
      case SECOND_NAME:
        return {...state, fname:action.payload}
        case RESULTS:
          return {...state, results:action.payload}
    default:
      return {...state}
  }

}
