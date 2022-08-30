export const VALUE_INPUT='VALUE_INPUT'
export const VALUE_INPUT1='VALUE_INPUT1'
export const VALUE_INPUT2='VALUE_INPUT2'
export const VALUE_LANGUAGE='VALUE_LANGUAGE'
export const VALUE_LANGUAGE_LEVEL='VALUE_LANGUAGE_LEVEL'
export const LANG_ALL='LANG_ALL'

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
export const getLanguage =(value)=>{
  return{
    type:VALUE_LANGUAGE,
    payload:value
  }
}
export const getLanguageLavel =(value)=>{
  return{
    type:VALUE_LANGUAGE_LEVEL,
    payload:value
  }
}

export const getLangAll=()=>{
  return{
    type:LANG_ALL
  }
}
