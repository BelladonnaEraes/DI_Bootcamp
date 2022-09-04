import {VALUE_INPUT,
        VALUE_INPUT1,
        NAME_PROJECT,
        NAME_PROJECT_URL,
        NAME_PROJECT_DESCRIPTION,
        ALL_PROJECTS,
        ADD_SKILL,
        ADD_SKILLS,
        POSISION_JOB,
        POSISION_CITY,
        POSISION_ORGANISATION,
        POSISION_YEARS,
        POSISION_DESCR,
        EXP_JOB,
        VALUE_EDUCATION_PROF,
        VALUE_EDUCATION_CITY,
        VALUE_EDUCATION_PLACE,
        VALUE_EDUCATION_YEARS,
        VALUE_INPUT2,
        VALUE_LANGUAGE,
        VALUE_LANGUAGE_LEVEL,
        LANG_ALL} from './actions.js'


const initState={
  formvalues:{},
  formvalues1:{},
  all_project:[
    {
      name_project:'',
      name_project_url:'',
      name_project_description:'',
    }
  ],
  exp_job:[
    {
      position:'',
      position_city:'',
      organisation:'',
      organisation_years:'',
      organisation_description:''
    }
  ],
  skills:[
    {skill:''}
  ],
  formvalues2:[
    {
      education_profession:'',
      education_city:'',
      education_place:'',
      education_years:''
    }
  ],
  langAll:[

  ]
}

export const reducer = (state=initState, action={}) => {
  switch (action.type){
    case VALUE_INPUT:
    return {...state, formvalues: action.payload}

    case VALUE_INPUT1:
    return {...state, formvalues1: action.payload}

    case NAME_PROJECT:
    return {...state, name_project: action.payload}

    case NAME_PROJECT_URL:
    return {...state, name_project_url: action.payload}

    case NAME_PROJECT_DESCRIPTION:
    return {...state, name_project_description: action.payload}

    case ALL_PROJECTS:
    console.log("all_project", state.all_project )
    state.all_project.push({name_project:state.name_project,
                            name_project_url:state.name_project_url,
                            name_project_description:state.name_project_description
                            })
    return {...state, all_project: [...state.all_project]}

    case ADD_SKILL:
    return {...state, skill: action.payload}

    case ADD_SKILLS:
    console.log("skills", state.skills )
    state.skills.push({skill:state.skill
                            })
    return {...state, all_project: [...state.all_project]}


    case POSISION_JOB:
    return {...state, position: action.payload}

    case POSISION_CITY:
    return {...state, position_city: action.payload}

    case POSISION_ORGANISATION:
    return {...state, organisation: action.payload}

    case POSISION_YEARS:
    return {...state, organisation_years: action.payload}

    case POSISION_DESCR:
    return {...state, organisation_description: action.payload}

    case EXP_JOB:
    
    console.log("exp_job", state.exp_job )
    state.exp_job.push({position:state.position,
                            position_city:state.position_city,
                            organisation:state.organisation,
                            organisation_years:state.organisation_years,
                            organisation_description:state.organisation_description})

    case VALUE_EDUCATION_PROF:
    return {...state, education_profession: action.payload}

    case VALUE_EDUCATION_CITY:
    return {...state, education_city: action.payload}

    case VALUE_EDUCATION_PLACE:
    return {...state, education_place: action.payload}

    case VALUE_EDUCATION_YEARS:
    return {...state, education_years: action.payload}

    case VALUE_INPUT2:
    console.log("formvalues2", state.formvalues2 )
    state.formvalues2.push({education_profession:state.education_profession,
                            education_city:state.education_city,
                            education_place:state.education_place,
                            education_years:state.education_years
                            })
    return {...state, formvalues2: [...state.formvalues2]}

    case VALUE_LANGUAGE:
    return {...state, languageVal: action.payload}

    case VALUE_LANGUAGE_LEVEL:
    return {...state, langLevel: action.payload}

    case LANG_ALL:
    console.log("langAll", state.langAll )
    state.langAll.push({languageVal:state.languageVal,
                        langLevel:state.langLevel})
    return {...state, langAll: [...state.langAll]}

     default:
     return {...state}
  }

}
