import Language from './Language.js'

const Eduandlang =()=>{
  return(
    <>
    <h1>Step 3: Education and language information</h1>
    <form>
    <lable>Education</lable><br/>
    <lable>Name of </lable><input/><br/>
    <lable>Country and city </lable><input/><br/>
    <lable>Name of education place </lable><input/><br/>
    <lable>Years of studiyng </lable><input/><br/>
    <lable>Language</lable><br/>
    <Language/><br/>
    <input type="submit" value="Finish" />
    </form>
    </>
  )
}

export default Eduandlang
