import {connect} from 'react-redux'
import {useState,useEffect,useContext} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {AppContext} from '../../App'
import jwt_decode from 'jwt-decode'


const Readylist =(props)=>{
  const [resume, setResume] = useState([]);
  console.log(resume);
  const {token} = useContext(AppContext);
  // const [token1, setToken]=useState({})


  useEffect(()=>{
  showResume()
},[])

  const showResume = async () => {
    try{
      const decode = jwt_decode(token);
      const user_id = decode.id
      console.log('user_id',user_id)
      const results = await axios.get(`/allreadylist/${user_id}`);
      if(results.status === 200){
        console.log('result', results.data)
      setResume(results.data)
      }
    }
    catch(e){
      console.log(e);
    }
  }


  return (
    <>

      <article>
      {
        resume.map((item,i)=>{
          return(
            <>
            <Link to={`/readylist/${item.id}`} style={{textDecoration:'none'}}>
            <h1>Resume {item.json_data.formvalues.name_resume}</h1>
            </Link>
            </>
          )
        })
      }
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
