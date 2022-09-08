import {useEffect,useState} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import axios from 'axios'




const Eachlist =(props)=>{

  const [resume, setResume] = useState([{}])
  const params = useParams();
  console.log(resume)

  useEffect(()=>{
  getData();
  },[])



  const getData = async() => {
  try{
    const result = await axios.get(`/readylist/${params.id}`);
    setResume(result.data);
    console.log('result.data=>',result.data)
  }
  catch(e){
    console.log(e);
  }
}

if(resume[0].json_data == null) {
  return ' not'
}
else{
  return(
    <div style={{margin:"100px"}}>
      <article >
        <h2 style={{textAlign: "left", fontSize: "16px"}}>{resume[0].json_data.formvalues.fname} {resume[0].json_data.formvalues.lname}</h2>
        <h3 style={{textAlign: "left",fontSize: "12px"}}>{resume[0].json_data.formvalues.profession}</h3>
        <p style={{textAlign: "left",fontSize: "11px"}}>{resume[0].json_data.formvalues.city} | {resume[0].json_data.formvalues.telephone} | {resume[0].json_data.formvalues.mail}</p>
        <p style={{textAlign: "left",fontSize: "11px"}}>
           <a style={{fontSize: "11px", textDecoration:'none'}} href={resume[0].json_data.formvalues.github} target="_blank" >Github</a> | <a
           style={{fontSize: "11px", textDecoration:'none'}} href={resume[0].json_data.formvalues.linkedin} target="_blank">Linkedin</a> | <a
           style={{fontSize: "11px", textDecoration:'none'}} href={resume[0].json_data.formvalues.portfolio} target="_blank">Portfolio</a> | <a
           style={{fontSize: "11px", textDecoration:'none'}} href={resume[0].json_data.formvalues.website} target="_blank">Website</a> | <a
           style={{fontSize: "11px", textDecoration:'none'}} href={resume[0].json_data.formvalues.blog} target="_blank">Blog</a>
        </p>
      </article>
      <article>
        <h3 style={{textAlign: "left",fontSize: "12px"}}>SUMMARY</h3>
        <p style={{textAlign: "left",fontSize: "11px"}}>{resume[0].json_data.formvalues1.summary}</p>
        <h3 style={{textAlign: "left",fontSize: "12px"}}>TECHNICAL SKILLS</h3>
        <div style={{textAlign: "left"}}>
        {
          resume[0].json_data.skills.filter((item,i)=>i>0).map((item, i)=>{
            return(
              <>
              <span style={{fontSize: "11px"}} key={i}>{item.skill},</span>
              </>
            )
          })
        }
        </div>
      </article>
      <article>
        <h3 style={{textAlign: "left",fontSize: "12px"}}>TECHNICAL PROJECTS</h3>
        <div>
        {
          resume[0].json_data.all_project.filter((item,i)=>i>0).map((item, i)=>{
            return(
              <>
                <div key={i}>
                  <div style={{textAlign: "left",fontSize: "11px"}}><strong>{resume[0].json_data.name_project}</strong> - <a style={{fontSize: "11px", textDecoration:'none'}}  href={resume[0].json_data.name_project_url} target="_blank">Github</a></div>
                  <p style={{textAlign: "left",fontSize: "11px", marginLeft:"10px"}}>{resume[0].json_data.name_project_description}</p>
                </div>
              </>
            )
          })
        }
        </div>
        <h3 style={{textAlign: "left",fontSize: "12px"}}>EXPERIENCE</h3>
        <div>
        {
          resume[0].json_data.exp_job.filter((item,i)=>i>0).map((item,i)=>{
            return(
              <>
                <div key={i}>
                  <div style={{textAlign: "left",fontSize: "11px"}}><strong>{item.position}</strong>  {item.position_city}</div>
                  <p style={{textAlign: "left",fontSize: "11px"}}>{item.organisation} {item.organisation_years}</p>
                  <p style={{textAlign: "left",fontSize: "11px"}}>{item.organisation_description}</p>
                </div>
              </>
            )
          })
        }
        </div>
      </article>
      <article>
        <h3 style={{textAlign: "left",fontSize: "12px"}}>EDUCATION</h3>
          <div>
            {
              resume[0].json_data.formvalues2.filter((item,i)=>i>0).map((item, i)=>{
                return(
                  <>
                    <div key={i}>
                      <div style={{textAlign: "left",fontSize: "11px"}}><strong>{item.education_profession}</strong>  {item.education_city}</div>
                      <p style={{textAlign: "left",fontSize: "11px"}}>{item.education_place} {item.education_years}</p>
                    </div>
                  </>
                )
              })
            }
          </div>
      </article>
      <article>
      <h3 style={{textAlign: "left",fontSize: "12px"}}>LANGUAGES</h3>
        <div>
          {
            resume[0].json_data.langAll.map((item, i)=>{
              return(
                <>
                <div key={i} style={{textAlign: "left",fontSize: "11px"}}><strong>{item.languageVal}</strong> {item.langLevel}</div>
                </>
              )
            })
          }
        </div>
      </article>
    </div>

  )
}

}

export default Eachlist
