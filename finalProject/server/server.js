import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import readylist_router from './routes/Readylist.js'
import cookieParser from 'cookie-parser';
import autorization_router from './routes/Autorization.js'

dotenv.config();

const app = express();

app.listen(process.env.PORT||8080, ()=>{
  console.log(`run on port ${process.env.PORT||8080}`);
})
app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(autorization_router);
app.use(readylist_router);
