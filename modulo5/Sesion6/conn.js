const mysql = require('mysql');

// Crea una conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'Discos'
});

// Conecta a la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos: ' + error.stack);
    return;
  }
  console.log('Conectado a la base de datos con ID: ' + connection.threadId);

  //Consultas
  //let query = "SELECT MIN(Anio_De_Publicacion) from Discos";
  let query ='select * from discos where anio_de_publicacion = (select min(anio_de_publicacion from discos)';
});

// Realiza una consulta a la base de datos
connection.query('SELECT * FROM discos', (error, results, fields) => {
  if (error) throw error;
  console.log('Los resultados de la consulta son: ', results);
});

// Cierra la conexión a la base de datos cuando haya terminado de usarla
connection.end((error) => {
  if (error) {
    console.error('Error al cerrar la conexión a la base de datos: ' + error.stack);
    return;
  }
  console.log('Conexión a la base de datos cerrada.');

  
});