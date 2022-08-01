const http = require('http')
const server = http.createServer((req, res) =>{
	res.end("Hello")
})
server.listen(3000, () =>{
	console.log('running on port 3000')
})

const requestListener = function (req, res) {
    res.end(`<html><body><h1>This is my first response</h1><h1>This is my second response</h1><p>This is my third response</p></body></html>`);
};