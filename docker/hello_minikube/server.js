var http = require('http');

var handleRequest = function(req, res) {
    console.log(`recieved request from${req.url}`)
    res.writeHead(200);
    res.end('hello world!');
}

var www = http.createServer(handleRequest);
www.listen(8080);