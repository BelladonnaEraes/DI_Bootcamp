let largeNum = require('./main.js')

const b = 5;
const summ = largeNum.largeNumber+b
console.log(summ)
const timeNow = largeNum.time
console.log(timeNow)
let http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end(`<html><body><header>${timeNow}</header><p>My Module is:<br> ${summ}!</p><h1>Hi there at the frontend!</h1></body></html>`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`I am listening....`);
});