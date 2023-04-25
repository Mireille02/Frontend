const API_ENDPOINT = "https://api.ipbase.com/v1/json/";

fetch(API_ENDPOINT)
.then(response => response.json())
.then(datosUbicacion => {
  // Imprimir los datos de la ubicación
  console.log(datosUbicacion);
  // Recuerda que podemos acceder a latitude y longitude, entre otros
  const latitud = datosUbicacion.latitude,
    longitud = datosUbicacion.longitude;
    
  console.log(`Tus coordenadas son ${latitud},${longitud}`);
});