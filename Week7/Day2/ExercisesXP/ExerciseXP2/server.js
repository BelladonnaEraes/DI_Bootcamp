const express = require('express')
const app = express();
const {user1} = require('./moduls/data.js');


app.use('/', express.static(__dirname+'public'));




app.listen(4001, () => console.log('It is running 4001'))


app.get('/', (req, res) => {
	res.json(user1)
})

app.get('/id/:id', (req, res) => {
    console.log("req.params: ", req.params)
    res.send(`id ${req.params.id}!`)
})