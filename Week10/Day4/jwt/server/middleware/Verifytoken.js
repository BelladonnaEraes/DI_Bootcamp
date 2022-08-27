import jwt from 'jsonwebtoken'

import User from '../models/UsersModel.js'

export const Verifytoken = (req, res, next)=> {
  const accessToken = req.cookies||req.headers['x-access-token'];
  if (accessToken==null) return res.sentStatuse(401)
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, async(err, decode)=>{
    if(err)return res.sendStatus(403);
    try{
      const user = await Users.findAll({
        where:{
          email:decoded.email
        }
      })
      await next()
    }catch(e){

    }
    return res.sendStatus(403)
      next();
  })
}
