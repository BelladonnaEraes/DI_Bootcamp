export const INCREASE_COUNT ='INCREASE_COUNT'
export const DECREASE_COUNT ='DECREASE_COUNT'


export const increase = () => {
  return {
    type:INCREASE_COUNT,
    payload:1

  }
}

export const dectease =() => {
  return {
    type:DECREASE_COUNT
  }
}
