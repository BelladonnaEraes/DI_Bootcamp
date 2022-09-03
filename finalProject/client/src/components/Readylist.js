import {connect} from 'react-redux'
import './readylist.css'

const Readylist =(props)=>{
  console.log(props.langAll[1]&&props.langAll[1].languageVal)
  return (
    <>
      <article>
        <h2>{props.formvalues.fname} {props.formvalues.lname}</h2>
        <h3>{props.formvalues.profession}</h3>
        <p>{props.formvalues.city} | {props.formvalues.telephone} | {props.formvalues.mail}</p>
        <p><a href="{props.formvalues.github}" target="_blank">Github</a>|
           <a href="{props.formvalues.linkedin}" target="_blank">Linkedin</a>|
           <a href="{props.formvalues.portfolio}" target="_blank">Portfolio</a>|
           <a href="{props.formvalues.website}" target="_blank">Website</a>|
           <a href="{props.formvalues.blog}" target="_blank">Blog</a>
        </p>
      </article>
      <article>
        <h3>SUMMARY</h3>
        <p>{props.formvalues1.summary}</p>
        <h3>TECHNICAL SKILLS</h3>
        <p>{props.formvalues1.skills}</p>
      </article>
      <article>
        <h3>TECHNICAL PROJECTS</h3>
        <p><strong></strong>-<a href="{props.formvalues.github}" target="_blank">Github</a></p>
        <h3>TECHNICAL SKILLS</h3>
        <p>{props.all_project[1]&&props.all_project[1].name_project}</p>
        <h3>EXPERIENCE</h3>
        <p>{props.exp_job[1]&&props.exp_job[1].position}</p>
      </article>

      <div><strong>{props.langAll[1]&&props.langAll[1].languageVal}</strong> <em>{props.langAll[1]&&props.langAll[1].langLevel}</em></div>
      <div>
      {
        props.langAll.map((item)=>{
          return
          (
          <>
            <div>{item.languageVal} <em>{item.langLevel}</em></div>
          </>
          )
        })
      }
      </div>
    </>
  )
}
const mapStateToProps=(state)=>{
  return {
    formvalues:state.formvalues,
    formvalues1:state.formvalues1,
    formvalues2:state.formvalues2,
    langAll:state.langAll,
    all_project:state.all_project,
    exp_job:state.exp_job
  }
}

export default connect(mapStateToProps)(Readylist)
