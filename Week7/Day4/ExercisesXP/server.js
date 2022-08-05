/*
1.npm init -y - packige.json
2.expresss -
3.nodemon - live server
4.const express =require('express')
5.init express
6.create routes
7.knex & pg - connect to database
*/

console.log("Hello, world!!!")

const express = require('express')
const knex= require('knex')
const bcrypt = require('bcrypt')
const app = express()


const db = knex ({
	  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 5432,
    user : 'postgres',
    password : '1111',
    database : 'dvdrental'
  }
})

app.use('/static', express.static(__dirname+ '/public')) /// or same way
// to extract the data from the body
app.use(express.json())
app.use(express.urlencoded({extended:true}));

/*app.get('/login', (req,res) =>{
	res.sendFile(__dirname+ '/public/login.html')
	})*/
app.get('/userlogin', (req,res) => {
	console.log(req.query)
	res.json(req.query)
	//res.json({msg: 'OK', status: '200'})
})

//app.get('/login', (req,res) =>{
//	res.send('login page')
//	})

app.get('/register', (req,res) =>{
	res.send('register page')
	})

app.post('/login',(req, res) => {
	console.log(req.body)
	//req.json({msg:'OK'})
})

app.listen(4000,() => {
	console.log("I am running 4000...")
})

app.post('/register',async (req,res)=>{
  console.log(req.body);
  db('myusers')
  const salt = await bcrypt.getSalt();
  const hashPassword = await bcrypt.hash(req.body.password, salt)
  .insert({email:req.body.email}, hashPassword)
  .returning('*')
  .then(data => {
    res.json(data)
  })
  .catch(e => {
    console.log(e);
    res.json({msg:'Email exist'})
  })
})

function seveUser(email, password) {

	return db('myusers')
	.insert({email:email, password:password})
	.returning('*')
}


