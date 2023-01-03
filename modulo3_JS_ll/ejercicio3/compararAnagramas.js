/*Ejemplo 3*/
/*(function () {
    let anagrama1 = 'Sopa';
    let anagrama2 = 'Paso';

    document.write(anagrama1.toLowerCase() + "<br/>");
    document.write(anagrama1.toLowerCase().split("") + "<br/>");
    document.write(anagrama1.toLowerCase().split("").sort() + "<br/>");

    document.write(anagrama2.toLowerCase() + "<br/>");
    document.write(anagrama2.toLowerCase().split("") + "<br/>");
    document.write(anagrama2.toLowerCase().split("").sort() + "<br/>");
    

    if (anagrama1.toLowerCase().split("").sort().join("") ===
        anagrama2.toLowerCase().split("").sort().join(""))
        document.write('Es un anagrama');
    else
        document.write('No es un anagrama');

})*/


/*Ejercicio 2*/
(function () {
    let correo = 'mire.flor4@gmail.com';
    
    document.write(correo.split("@").sort());

})();

//split = divide la palabra en letras, en las comillas se ponen con qué se va a separar
//sort = mantiene la cadena ordenada
//join = junta los elementos a una sola cadena