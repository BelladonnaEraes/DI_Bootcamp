import express from 'express';
import { getUsers, register, login, logout } from '../controllers/Users.js';
import {Verifytoken} from  '../middleware/Verifytoken.js'

const router = express.Router();

router.get('/users',Verifytoken, getUsers);
router.post('/register', register);
router.post('/login', login);
router.delete('/logout', logout);
router.get('/token',Verifytoken, (req,res)=>{
  res.sendStatus(200)
});

export default router;
