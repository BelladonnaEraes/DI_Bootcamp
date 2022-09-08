import express from 'express';
const router = express.Router();

import {Register, Login} from '../controllers/Autorization.js';

router.post('/signup', Register);
router.post('/signin', Login);

export default router;
