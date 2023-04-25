const fs = require('fs')

fs.createReadStream("nodejs.txt")
    .pipe(process.stdout)

//corriente de lectura
//const Stream = require('stream')
//const readableStream = new Stream.Readable()

//corriente de escritura
//var fs = require('fs');
//var readableStream = fs.createReadStream('doc1.txt');
//var writableStream = fs.createWriteStream('doc2.txt');
//readableStream.setEncoding('utf8');
//readableStream.on('data', function(chunk) { writableStream.write(chunk); });