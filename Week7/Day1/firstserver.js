const http = require('http');

const server = http.createServer((req,res)=>{
  console.log('this is from inside the server');
  res.end('hello my first server 12345')
})
server.listen(3000)