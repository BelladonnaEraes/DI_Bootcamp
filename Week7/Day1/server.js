const app = require('./app.js')

app.getData()
.then(data => {
	console.log(data)
})