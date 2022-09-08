import {useState, useContext} from 'react';
import Input from '@mui/material/Input';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {AppContext} from '../App.js'
import Button from '@mui/material/Button';


const Signin =(props)=>{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg,setMsg] = useState('')
  const {setToken} = useContext(AppContext)
  const navigate = useNavigate();

  const signin = async (e) => {
    e.preventDefault();
    try{
      const result = await axios.post('/signin',{
        email,password
      });
      console.log(result.data);
      if(result.status==200){
        setToken(result.data)
        navigate('/home')
      }
    }
    catch(e){
      setMsg(e.response.data.msg)
    }
  }
  return(
    <>
    <form onSubmit={signin} style={{marginTop:'10%'}}>
    <Input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} name='email' type='text' style={{margin:'30px', width:'30%'}} /><br/>
    <Input placeholder="Password" onChange={(e)=>setPassword(e.target.value)} name='password' type='text' style={{margin:'30px', width:'30%'}} /><br/>
    <Button type="submit" value='Login' variant="contained" style={{margin:'20px'}}>Login</Button>
    </form>
    <div>{msg}</div>
    </>
  )
}

export default Signin
