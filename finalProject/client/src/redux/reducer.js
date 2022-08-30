import {VALUE_INPUT, VALUE_INPUT1, VALUE_INPUT2, VALUE_LANGUAGE, VALUE_LANGUAGE_LEVEL, LANG_ALL} from './actions.js'


const initState={
  formvalues:{},
  formvalues1:{},
  formvalues2:{},
  langAll:[
    {languageVal:'',langLevel:''}
  ]
}

export const reducer = (state=initState, action={}) => {
  switch (action.type){
    case VALUE_INPUT:
    return {...state, formvalues: action.payload}

    case VALUE_INPUT1:
    return {...state, formvalues1: action.payload}

    case VALUE_INPUT2:
    return {...state, formvalues2: action.payload}

    case VALUE_LANGUAGE:
    return {...state, languageVal: action.payload}

    case VALUE_LANGUAGE_LEVEL:
    return {...state, langLevel: action.payload}

    case LANG_ALL:
    console.log("this state", state.langAll )
    state.langAll.push({languageVal:state.languageVal,langLevel:state.langLevel})
    return {...state, langAll: [...state.langAll]}
     default:
     return {...state}
  }

}
