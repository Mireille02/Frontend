const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_db'
});

function createTable() {
    connection.connect((error) => {
        if (error) throw error;
        var sql = "CREATE TABLE carros (nombre VARCHAR(100), modelo VARCHAR(50))";
        connection.query(sql, function(err, result){
            if (err) throw err;
            console.log("La tabla se ha creado satisfactoriamente")
            insertRecords();
        })
    })
}

function insertRecords() {
    var sql = "INSERT INTO carros (nombre, modelo) VALUES ('Ford Mustang', '2019'), ('Lamborghini', '2022')";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Registros insertados correctamente');
        getInfo();
    });
}

function getInfo () {
    var sql = "SELECT * FROM carros";
    connection.query(sql, (error, result, fields) => {
        if (error) throw error;
        console.log('result', result)
    })
    connection.end();
}

createTable();