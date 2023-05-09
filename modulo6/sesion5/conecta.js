const mysql = require('mysql');

const conn = mysql.createConnection({
    Host: "localhost",
    User: "root",
    Password: "",
    Database: "employees"
})

conn.connect ((error) => {
    if (error) throw error;
    console.log ('DB connect success')
    conn.query ("SELECT* FROM users", (error, result, fields) =>{
        if (error) throw error;
        console.log('result', result)
    })
})

/*connection.connect((error) => {
    if (error) throw error;
    console.log('Conectado a la base de datos con ID: ' + connection.threadId);
    conection.query('SELECT * FROM libros', (error, results, fields) => {
        if(error) throw error;
        console.log('Los resultados de la consulta son: ', results);
    })
})*/
