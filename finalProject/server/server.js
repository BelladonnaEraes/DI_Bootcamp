import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import readylist_router from './routes/Readylist.js'
import cookieParser from 'cookie-parser';
import autorization_router from './routes/Autorization.js'
import path from 'path'
dotenv.config();

const app = express();

app.listen(process.env.PORT||8080, ()=>{
  console.log(`run on port ${process.env.PORT||8080}`);
})

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(autorization_router);
app.use(readylist_router);


const __dirname = path.resolve()
app.use('/', express.static(path.join(__dirname, 'client/build')))
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'./client/build', 'index.html'))
})
