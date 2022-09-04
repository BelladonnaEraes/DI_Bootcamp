import {connect} from 'react-redux'


const Readylist =(props)=>{
  console.log(props.langAll[1]&&props.langAll[1].languageVal)
  return (
    <>
      <article>
        <h2>{props.formvalues.fname} {props.formvalues.lname}</h2>
        <h3>{props.formvalues.profession}</h3>
        <p>{props.formvalues.city} | {props.formvalues.telephone} | {props.formvalues.mail}</p>
        <p><a href={props.formvalues.github} target="_blank">Github</a>|
           <a href={props.formvalues.linkedin} target="_blank">Linkedin</a>|
           <a href={props.formvalues.portfolio} target="_blank">Portfolio</a>|
           <a href={props.formvalues.website} target="_blank">Website</a>|
           <a href={props.formvalues.blog} target="_blank">Blog</a>
        </p>
      </article>
      <article>
        <h3>SUMMARY</h3>
        <p>{props.formvalues1.summary}</p>
        <h3>TECHNICAL SKILLS</h3>
        <div>
        {
          props.skills.filter((item,i)=>i>0).map((item, i)=>{
            return(
              <>
              <span key={i}>{item.skill},</span>
              </>
            )
          })
        }
        </div>
      </article>
      <article>
        <h3>TECHNICAL PROJECTS</h3>
        <div>
        {
          props.all_project.filter((item,i)=>i>0).map((item, i)=>{
            return(
              <>
                <div key={i}>
                  <div><strong>{item.name_project}</strong>-<a href={item.name_project_url} target="_blank">Github</a></div>
                  <p>{item.name_project_description}</p>
                </div>
              </>
            )
          })
        }
        </div>
        <h3>EXPERIENCE</h3>
        <div>
        {
          props.exp_job.filter((item,i)=>i>0).map((item,i)=>{
            return(
              <>
                <div key={i}>
                  <div><strong>{item.position}</strong>  {item.position_city}</div>
                  <p>{item.organisation} {item.organisation_years}</p>
                  <p>{item.organisation_description}</p>
                </div>
              </>
            )
          })
        }
        </div>
      </article>
      <article>
        <h3>EDUCATION</h3>
          <div>
            {
              props.formvalues2.filter((item,i)=>i>0).map((item, i)=>{
                return(
                  <>
                    <div key={i}>
                      <div>{item.education_profession}  {item.education_city}</div>
                      <p>{item.education_place} {item.education_years}</p>
                    </div>
                  </>
                )
              })
            }
          </div>
      </article>
      <article>
      <h3>LANGUAGES</h3>
        <div>
          {
            props.langAll.filter((item,i)=>i>0).map((item, i)=>{
              return(
                <>
                <div key={i}><strong>{item.languageVal}</strong> {item.langLevel}</div>
                </>
              )
            })
          }
        </div>
      </article>
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
    exp_job:state.exp_job,
    skills:state.skills
  }
}

export default connect(mapStateToProps)(Readylist)
