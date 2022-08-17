export const FIRST_NAME = 'FIRST_NAME'
export const SECOND_NAME = 'SECOND_NAME'
export const RESULTS = 'RESULTS'

export const getFirstName = (text)=> {
  return {
    type: 'FIRST_NAME',
    payload:text
  }
}

export const getSecondName = (text) => {
  return {
    type: 'SECOND_NAME',
    payload:text
  }
}

export const getResult = (result_obj) => {
  return {
    type: 'RESULTS',
    payload:result_obj
  }
}
