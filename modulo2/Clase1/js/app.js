var numero = 100; //se declara la variable
var nombre = 'NOMBRE';
var numeroLetra = '100';

function saludo() { //sale en forma de aviso en html
    let nombre="Mireille";
    alert("Hola mi nombre es:" + nombre);
    alert("Hola Mundo. Hola JavaScript"); //es puro texto
    alert("El nuemero es" + (numero + numero)); //texto y número se concatena, hay que separarlos con parentésis para que en este caso haga la operación
    alert(numero + numeroLetra) //son sólo números
}
console.log("el nombre es " + nombre);//manda los mensajes a la consola

function saludo1() {
    alert("Hola Mundo. Hola JavaScript");
}

let saludo='hola'; //local
var saludo1='hola'; //si pueden hacer cambio de valor en el tiempo
const saludo2='hola'; //son constantes, se usan más dentro de las clases
const pi = 3.141592;
const home ='www.google.com';

//Declarando variables
let i,y,x, suma, $hola, miVariableNueva;
suma = x+y;
x = 10;
y = 5;

//var es para variables de tipo global y se usa dentro o fuera de una función
//var van a ir fuera de las funciones
//let son variables de tipo locales que van dentro de una función
//todas las variables que vayan dentro de una función van a ser let

//En JavaSript no importa si se usan doble comillas o comillas simples