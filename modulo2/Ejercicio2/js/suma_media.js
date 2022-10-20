//Crea dos variables, una para suma y una para el contador, e inicialízalas en 0.
var suma = 0;
var contador = 0;
//Declara un bucle para hacer mientras (while).
//Dentro del bucle, en la parte de hacer, solicita al usuario “Introduce números hasta que uno sea número negativo”. Asigna el valor que el usuario va a introducir a la variable numero
do {
    var numero = parseInt(prompt('Introduce numeros hasta que uno sea número negativo'))
    //Valida si el dato introducido es numérico, si no es numérico, asigna 0 a la variable numero
    if (isNaN(numero)) {//in Not a Number = isNaN
        numero = 0;
        //En otro caso, pregunta si numero es mayor o igual a 0, si esto ocurre, suma a la variable suma el valor del número introducido e incrementa en uno al contador
    } else if (numero > 0) {
        //suma=suma+numero;
        suma += numero;
        contador++;
    }
    // Fuera de la validación, imprime en consola el valor de suma y el valor del contador
    console.log("la suma de todos los números es" + suma);
    console.log("valor de contador" + contador);
}
while(numero>0);
//Muestra con una alerta “La suma de todos los números es: ” el valor de suma.
alert("la suma de todos los numeros es: "+ suma +"\n"
+"los elementos ingresados son: " + contador +"\n"
+"la media de todos los numeros es: "+(suma/contador));
//A continuación, en la misma alerta, imprime el texto “La media de todos los números es: ” (realiza la división de suma entre el contador).