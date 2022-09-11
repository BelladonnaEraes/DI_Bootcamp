import {connect} from 'react-redux';
import Input from '@mui/material/Input';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';


const Register =()=>{
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg,setMsg] = useState('')
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();
  const togglePassword = () => {
  setPasswordShown(!passwordShown);
};


  const register = async (e) => {
    e.preventDefault();
  try{
      const result = await axios.post('/signup',{
        username,email,password
      });
      if(result.status==200){
      navigate('/signin')
  }
  }
  catch(e){
      setMsg(e.response.data.msg)

}
  }
  return(
    <>
    <form onSubmit={register} style={{marginTop:'10%'}}>
    <Input placeholder="Name" onChange={(e)=>setUsername(e.target.value)} name='username' type='text' style={{margin:'30px', width:'30%'}} /><br/>
    <Input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} name='email' type='text' style={{margin:'30px', width:'30%'}} /><br/>
    <Input placeholder="Password" onChange={(e)=>setPassword(e.target.value)} name='password' type={passwordShown ? "text" : "password"} style={{margin:'30px', width:'20%'}} /><Button onClick={togglePassword}>Show</Button><br/>
    <Button type="submit" value='Register' variant="contained" style={{margin:'20px'}}>Register</Button>
    </form>
    <div>{msg}</div>
    </>
  )
}

export default Register
