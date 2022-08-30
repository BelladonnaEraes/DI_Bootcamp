import Personality from './Personality.js'
import Experience from './Experience.js'
import Eduandlang from './Eduandlang.js'
import {Routes, Route, Link } from "react-router-dom"


const Allparts=()=>{
  return(
    <>
    <Personality/>
    <Experience/>
    <Eduandlang/>
    </>
  )
}

export default Allparts
