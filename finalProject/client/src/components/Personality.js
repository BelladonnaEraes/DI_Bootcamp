import Country from './Country.js'


const Personality=()=>{
  return(
    <>
    <h1>Step 1: Personal information</h1>
    <form>
    <lable>First name</lable>
    <input/>
    <lable>Last name</lable>
    <input/><br/>
    <lable>Profession</lable>
    <input/><br/>
    <lable>Country and city</lable>
    <input/><br/>
    <lable>Telephone number</lable>
    <Country/><input/><br/>
    <lable>E-mail</lable>
    <input/><br/>
    <lable>Github</lable>
    <input/><br/>
    <lable> LinkedIn</lable>
    <input/><br/>
    <lable> Personal portfolio</lable>
    <input/><br/>
    <lable> Website URL</lable>
    <input/><br/>
    <lable> Blog url</lable>
    <input/><br/>
    <button>Next step</button>
    </form>
    </>
  )
}
export default Personality
