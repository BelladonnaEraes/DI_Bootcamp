/*const http = require('http')

const server = http.createServer((req, res) =>{
	console.log()
	res.end('Hello')
})


server.listen(5000, () =>{
	console.log('running on port 5000')
})*/


const express = require('express')
const {products} = require('./data.js')
const app = express()
app.use('/', express.static(__dirname))

app.listen(4000, () =>{
	console.log('runninsg on port 4000')
})

app.get('/api',(req,res) => {
	res.send('api route')
})

app.get('/api/products',(req,res) => {
	res.json(products)
})

app.get('/api/products/search', (req,res) =>{
	const name = req.query.q;
	const filterProdacts = products.filter(item =>{
		return item.name.toLowerCase().includes(name.toLowerCase())
	})
	res.json(filterProdacts)
	})

/*app.get('/api/products/:a/:b', (req,res) => {
	console.log(req.params)
	res.json({msg:"OK"})
})*/
app.get('/api/products/:id', (req,res) => {
	const pid = req.params.id;
	const product = products.find(item => {
		return item.id ==pid
		
	}
)res.json(products)
})













