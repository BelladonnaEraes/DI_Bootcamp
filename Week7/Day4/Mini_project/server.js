const express = require('express')
const app = express()
const knex = require('knex');
const db = knex({
  client:'pg',
  connection:{
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'shoppinglist'
  }
})


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.listen(5003, ()=>{
	console.log("I am listening the port 5003")
})

app.use('/', express.static(__dirname+'/public'))



app.get('/shoplist',(req,res)=>{
  console.log(req.query.name);
  res.sendFile(__dirname+'/public/index.html')
  
})

app.post('/shoplist', async (req,res)=>{
  console.log(req.body);
  saveProducts(req.body.name, req.body.quantity)
  .then(data => {
    res.json(data)
  })
  .catch(e => {
    console.log(e);
  })
})

function saveProducts(name,quantity) {
  return db('products')
  .insert({product_name:name, quantity:quantity})
  .returning('*')
}












