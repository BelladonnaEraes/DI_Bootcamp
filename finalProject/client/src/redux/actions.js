export const VALUE_INPUT='VALUE_INPUT'
export const VALUE_INPUT1='VALUE_INPUT1'
export const NAME_PROJECT ='NAME_PROJECT'
export const NAME_PROJECT_URL='NAME_PROJECT_URL'
export const NAME_PROJECT_DESCRIPTION='NAME_PROJECT_DESCRIPTION'
export const ALL_PROJECTS='ALL_PROJECTS'
export const ADD_SKILL='ADD_SKILL'
export const ADD_SKILLS='ADD_SKILLS'
export const POSISION_JOB='POSISION_JOB'
export const POSISION_CITY='POSISION_CITY'
export const POSISION_ORGANISATION='POSISION_ORGANISATION'
export const POSISION_YEARS='POSISION_YEARS'
export const POSISION_DESCR='POSISION_DESCR'
export const EXP_JOB='EXP_JOB'
export const VALUE_EDUCATION_PROF='VALUE_EDUCATION_PROF'
export const VALUE_EDUCATION_CITY='VALUE_EDUCATION_CITY'
export const VALUE_EDUCATION_PLACE='VALUE_EDUCATION_PLACE'
export const VALUE_EDUCATION_YEARS='VALUE_EDUCATION_YEARS'
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
export const getNameProj =(value)=>{
  return{
    type:NAME_PROJECT,
    payload:value
  }
}
export const getNameProjUrl =(value)=>{
  return{
    type:NAME_PROJECT_URL,
    payload:value
  }
}
export const getNameProjDesc =(value)=>{
  return{
    type:NAME_PROJECT_DESCRIPTION,
    payload:value
  }
}
export const getAllProj =()=>{
  return{
    type:ALL_PROJECTS
  }
}
export const getSkill =(value)=>{
  return{
    type:ADD_SKILL,
    payload:value
  }
}
export const getSkills =()=>{
  return{
    type:ADD_SKILLS,
  }
}

export const getPosision =(value)=>{
  return{
    type:POSISION_JOB,
    payload:value
  }
}
export const getPosCity =(value)=>{
  return{
    type:POSISION_CITY,
    payload:value
  }
}
export const getPosOrg =(value)=>{
  return{
    type:POSISION_ORGANISATION,
    payload:value
  }
}
export const getPosDescr =(value)=>{
  return{
    type:POSISION_DESCR,
    payload:value
  }
}
export const getPosYears =(value)=>{
  return{
    type:POSISION_YEARS,
    payload:value
  }
}
export const getExpJob =()=>{
  return{
    type:EXP_JOB,
  }
}

export const getEduCityuProf =(value)=>{
  return{
    type:VALUE_EDUCATION_PROF,
    payload:value
  }
}
export const getEduCity =(value)=>{
  return{
    type:VALUE_EDUCATION_CITY,
    payload:value
  }
}
export const getEduPlace =(value)=>{
  return{
    type:VALUE_EDUCATION_PLACE,
    payload:value
  }
}
export const getEduYears =(value)=>{
  return{
    type:VALUE_EDUCATION_YEARS,
    payload:value
  }
}
export const getValue2 =()=>{
  return{
    type:VALUE_INPUT2
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
