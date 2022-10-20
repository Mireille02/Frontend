//Crea la variable numero1 y asígnale el valor que el usuario va a introducir a través de un promt, puedes realizarlo mediante la siguiente instrucción:
var numero1 = parseInt(prompt('Introduce el primer número',0));
//Crea una segunda variable numero2 que diga lo mismo, pero la cadena deberá desplegar “Introduce el segundo número”.
var numero2 = parseInt(prompt('Introduce el segundo número',0));

/*Imprime en la consola los valores de las variables numero1 y numero2.
Crea una sentencia if en la que compares si el número 1 es igual al número 2, en caso de que sean iguales, presenta en una alerta la cadena “Los 
números son iguales”. Para el alert, puedes hacerlo con esta instrucción:*/
if(numero1 === numero2){
    alert("Los numeros son iguales");
}

/*En caso de que no se cumpla la condición, evalúa si el número 1 es mayor al número 2. Si es verdadero, genera dos alertas que tengan la cadena:
a. “EL NÚMERO MAYOR ES” +numero1
b. “EL NÚMERO MENOR ES” +numero2*/
if(numero1 === numero2){
    alert("Los numeros son iguales");
}else if(numero1 > numero2){
    alert("El número mayor es" + numero1);
    alert("El número menor es" + numero2);
}

//En caso de que no se cumpla la condición, evalúa si el número 2 es mayor al número 1 y agrega las alertas correspondientes como en el caso anterior
if(numero1 === numero2){
    alert("Los numeros son iguales");
}else if(numero1 > numero2){
    alert("El número mayor es" + numero1);
    alert("El número menor es" + numero2);
}else if(numero2 > numero1){
    alert("El número mayor es" + numero2);
    alert("El número menor es" + numero1);
}

//En caso de que no se cumpla ninguna de las condiciones anteriores, genera la alerta “INTRODUCE NÚMEROS CORRECTOS”.
if(numero1 === numero2){
    alert("Los numeros son iguales");
}else if(numero1 > numero2){
    alert("El número mayor es" + numero1);
    alert("El número menor es" + numero2);
}else if(numero2 > numero1){
    alert("El número mayor es" + numero2);
    alert("El número menor es" + numero1);
}else{
    alert("Introduce los números correctos");
}

//Ahora, haz una validación para que la aplicación verifique si los valores introducidos son numéricos, en caso contrario, volverá a pedirlos.
if(!isNaN(numero1) || !isNaN(numero2)){
    var numero1 = parseInt(prompt('Introduce el primer número',0));  
    var numero2 = parseInt(prompt('Introduce el segundo número',0));
}

if(numero1 === numero2){
    alert("Los numeros son iguales");
}else if(numero1 > numero2){
    alert("El número mayor es" + numero1);
    alert("El número menor es" + numero2);
}else if(numero2 > numero1){
    alert("El número mayor es" + numero2);
    alert("El número menor es" + numero1);
}else{
    alert("Introduce los números correctos");
}
