import db from '../connections/db.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


export const Register = async (req,res) => {
  const {username, email, password} = req.body;

  console.log(req.body);

  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);
  req.body.password = hash;

  db('users_auto')
  .insert(req.body)
  .returning('*')
  .then(data=>{
    res.json(data)
  })
  .catch(e=>{
    console.log(e);
    res.status(404).json({msg:'Email Exist'})
  })
}




export const Login = (req,res) =>{
  const {email,password} = req.body;
  db('users_auto')
  .select('user_id','username','email','password')
  .where({email:email})
  .then(async data => {
    if(data.length === 0){
      return res.status('404').json({msg:'Email not exist'})
    }
    const match = await bcrypt.compare(password,data[0].password);

    if(!match) return res.status('400').json({msg:'Wrong password'})

    const id = data[0].user_id;
    const mail = data[0].email;
    const name = data[0].username;

    const token = jwt.sign({id,mail,name},process.env.ACCESS_TOKEN_SECRET,{
      expiresIn: '3000000000s'
    });

    res.cookie('token', token, {
      httpOnly:true,
      maxAge: 3000000000 * 1000
    });

    res.json(token)

  })
  .catch(e=>{
    res.status(404).json({msg:'Something went wrong try later'})
  })
}
