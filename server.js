const http = require('http');

const hostname = '127.0.0.1';
const port = 2018;

const server = http.createServer((request,response)=>{
    responses.statusCode = 200;
    responses.getHeader('Content-Type','text/html');
    responses.write("<h1 style='color:cyan'>Hello</h1>");
    responses.end();
})

server.listen(port,hostname,() => {
    console.log(`server running at http://${hostname}:${port}/`);
});