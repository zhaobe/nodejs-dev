var http = require("http");

http.createServer(function (request, response) {
    //send HTTP header, 200 HTTP Status: OK
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    //send repsonse body
    response.end('Hello World\n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');