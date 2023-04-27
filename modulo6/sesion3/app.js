var http = require('http');
var dt = require('./fechaTiempo');

http.createServer(function (req, res) {
    // res.write("The date and time are currently: " + dt());
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    dt();
    res.end();
}).listen(8080);