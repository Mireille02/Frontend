var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    if (req.sethod === "GET") {
        res.writeHead(200,{"Content-Type": "text/html"});
        fs.createReadStream("./public/form.html","utf-8").pipe(res)
        //console.log("Llamado via Método GET")
    } else if (req.method === "POST") {
        //console.log("Llamado via Método POST")
        var data = "";
        req.on("data", function(chunk){
            data += chunk; // es el caché
        });
        req.on("end", function(){
            res.writeHead(200,{"Content-Type": "text/html"});
            res.end(`${data}`)
        });
    };  
});

server.listen(3000);