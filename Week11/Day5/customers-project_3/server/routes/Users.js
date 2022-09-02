import express from 'express';
const router = express.Router();

import {Register, Loggin} from '../controllers/Users.js';

router.post('/signup', Register);
router.post('/signin', Loggin);


export default router;
