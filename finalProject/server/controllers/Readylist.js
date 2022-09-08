import db from '../connections/db.js'
import dotenv from 'dotenv';


export const PushResume = async (req,res) =>{

  const json_data = req.body

  console.log(req.body);

  db('users_data')
  .insert(req.body)
  .returning('*')
  .then(data=>{
    res.json(data)
  })
  .catch(e=>{
    console.log(e);
  })
}

export const getAllData =(req, res)=>{
  console.log("req.params.id", req.params.id)
  db('users_data')
  .select('id', 'user_id', 'json_data')
  .where({user_id:req.params.id})
  .then(data=>{
    console.log("data", data)
    res.json(data)
  })
  .catch(e=>{
    console.log(e);
    res.status(404).json({msg:'not found'})
  })
}

export const getEachResume = (req,res) =>{
  db('users_data')
  .select( 'id', 'user_id', 'json_data')
  .where({id:req.params.id})
  .then(rows=>{
    res.json(rows)
  })
  .catch(e=>{
    console.log(e);
    res.status(404).json({msg:'not found'})
  })
}
