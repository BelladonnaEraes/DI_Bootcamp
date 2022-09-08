import express from 'express';
import {Verify} from '../middlewares/Autorization.js'
const router = express.Router();

import {PushResume, getAllData, getEachResume} from '../controllers/Readylist.js';


router.post('/home',Verify, PushResume);
router.get('/allreadylist/:id',Verify, getAllData)
router.get('/readylist/:id',Verify, getEachResume)

export default router;
