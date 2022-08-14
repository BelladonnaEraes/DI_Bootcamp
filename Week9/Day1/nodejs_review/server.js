const express = require('express')
const dotenv =require('dotenv')
const knex =require('knex')
//const bp =require('body-parser') if i have not app.use(express.urlencoded({extended:true}))
dotenv.config()
const db = knex({
  client: 'pg',
  connection: {
    host: '10.100.102.7:56229',
    post: 5432,
    user: 'postgres',
    password: '11111',
    database: 'dvdrental'
  }
})


const products = [
  {id:1, name:"IPhon", price:5000},
  {id:2, name:"IWhach", price:500},
  {id:3, name:"IPuck", price:500000000}
]
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(process.env.PORT||5050, ()=> {
console.log(`I am 5050`)
})


const logger =(req, res, next) =>{
  console.log(req.url)
  console.log(req.params)
  console.log(req.query)
  next()
}
//app.use('/products', logger)

const auth = (req, res, next) => {
  const user = req.query.user
  if(user==='admin'){
    next()
  }else{
    res.status(401).json({msg:'Unauth'})
  }
}

app.get('/mid/:id', (req, res)=> {

  res.json(products)
})
app.get('/products', auth, (req, res)=> {

  res.json(products)
})
app.post('/products', (req, res)=> {
  res.json(products)
})
app.put('/products', (req, res)=> {
  res.json(products)
})
app.delete('/products', (req, res)=> {
  res.json({id:req.params.id, data:req.body, q:req.query})
})
