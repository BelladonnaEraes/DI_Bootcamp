export const VALUE_INPUT='VALUE_INPUT'
export const VALUE_INPUT1='VALUE_INPUT1'
export const VALUE_INPUT2='VALUE_INPUT2'


export const getValue =(value)=>{
  return{
    type:VALUE_INPUT,
    payload:value
  }
}
export const getValue1 =(value)=>{
  return{
    type:VALUE_INPUT1,
    payload:value
  }
}
export const getValue2 =(value)=>{
  return{
    type:VALUE_INPUT2,
    payload:value
  }
}
