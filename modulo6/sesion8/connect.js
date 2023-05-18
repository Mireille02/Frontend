var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_db"
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT* FROM carros", function (err, result, fields) {
        if (err) throw err;
        for (let carrosIndex in result) {
            let carros = result[carrosIndex];
            console.log('nombre', carros.nombre)
            console.log('modelo', carros.modelo)
           // console.log('typeof', typeof user.id)
        }
    })
}) 