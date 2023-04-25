const fs = require('fs')
const {Transform} = require("stream")

 const rs = fs.createReadStream("nodejs.txt"); //corriente de lectura
 const ws = fs.createWriteStream('Primercopia.txt'); //corriente de escritura
 const ws1 = fs.createWriteStream('Segundaacopia.txt'); //segunda corriente de escritura
 const mayusculas = fs.createWriteStream('mayusculas.txt');

 rs.pipe(ws);
 rs.pipe(ws1);

 const uppercase = new Transform({ transform(chunk, encoding, callback)//cambia a mayúsculas el texto 
    {callback(null, chunk.toString().toUpperCase());},});

 rs.pipe(uppercase).pipe(mayusculas);   

