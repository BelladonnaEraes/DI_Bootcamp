const initialState = {
  searchkey:'',
  result: []
}

export const reducer = (state=initialState, action)=> {

    switch(action.type) {
      case 'SEARCH_KEY':
      return {...state, searchkey:action.paylod}
      default:
      return {...state}}
}
