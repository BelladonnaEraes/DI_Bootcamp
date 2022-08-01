const http = require("http")

const server = http.createServer((req, res)=> {
	res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(user));

})

server.listen(8080)
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }