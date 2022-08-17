export const AGE_UP ='AGE_UP'
export const AGE_DOWN ='AGE_DOWN'


export const increase = () => {
  return {
    type:AGE_UP,
    payload:1

  }
}

export const dectease =() => {
  return {
    type:AGE_DOWN
  }
}
