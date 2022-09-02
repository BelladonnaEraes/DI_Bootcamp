import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import coustomers_router from './routes/Customers.js'
import users_router from './routes/Users.js'
import cookieParser from 'cookie-parser'
dotenv.config();

const app = express();

app.listen(process.env.PORT||8080, ()=>{
  console.log(`run on port ${process.env.PORT||8080}`);
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(coustomers_router);
app.use(users_router);
