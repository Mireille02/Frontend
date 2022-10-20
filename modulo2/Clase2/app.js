/*if(a===b && b===c){ // && = And
    ...
}

if(a===b || b===c){ // || = Or
    ..
}*/

var a = 3.141592;
var b = 3.141592;

if (a === b) {
    console.log("los valores son iguales");
} else {
    console.log("los valores son iguales");
}
console.log("esto ya no esta dentro de la condición");

const hora = 19;
let saludo;
if (hora < 12) {
    saludo = "Buenos días";
}
if (hora < 20) {
    saludo = "Buenas tardes";
}
if (hora >= 20) {
    saludo = "Buenas noches";
}
console.log(saludo) // Buenas tardes


if (hora < 12) {
    saludo = "Buenos días";
} else if (hora < 20) {
    saludo = "Buenas tardes";
}
else {
    saludo = "Buenas noches";
}
console.log(saludo) // Buenas tardes

var dia = 3;
switch (dia) {
    case 1:
        text = "Domingo";
        break;
    case 2:
        text = "Lunes";
        break;
    case 3:
        text = "Martes";
        break;
    case 4:
        text = "Miércoles";
        break;
    case 5:
        text = "Jueves";
        break;
    case 6:
        text = "Viernes";
        break;
    case 7:
        text = "Sábado";
        break;
    default:
        text = "Error";
}
console.log(text); // Martes

const speed = 120
let message;
if (speed > 100) {
    message = "Estas yendo muy rápido!";
} else {
    message = "Bien, vas debajo del límite";
}
console.log(message); // Estas yendo muy rápido!

const velocidad = 120;
let mensaje = velocidad > 100 ? "Estas yendo muy rápido!" : "Bien, vas debajo del limite" // sólo con else y el if se pueden sustituir con :
console.log(mensaje); //Estas yendo muy rápido

var nuevaCadena = undefined;
var nuevCadenaVacia = "";

var i = 1; //inicialización
while (i < 11) {// condición de permanencia
    console.log(i);
    i++; //actualización de la variable de control
}

var x = 0;
do {
    console.log(x);
    x++;
} while (x < 10); // Regresa: 0 1 2 3 4 5 6 7 8 9

var x
for (var x = 0; x <= 11; x++) {
    console.log(x)
} // Regresa 0 1 2 3 4 5 6 7 8 9

let datos = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
for (let element of datos) {
    sum += element;
}
console.log(sum);// Regresa 45

//un objeto esta compuesto por ciertas características: un valor y una clave de ese valor (diccionario)
var libro = {
    titulo: "Javascript",
    autor: "David Flanagan",
    numPaginas: 1245,
    editorial: "O’Really",
    precio: "10.45"
};
console.log('------')
let prop;
for (let prop in libro) {
    console.log("la propiedad " + prop + " contiene: " + book[prop]);
}//Regresa:
    //La propiedad título contiene: Javascript
    //la propiedad autor contiene: David Flanagan
    //la propiedad precio contiene: 11.45

    console.log('------')
    for (let i = 0; i < 10; i++) {
        if (i === 3) break //break rompe la secuencia
        console.log('Number: ${i}')
    }

    console.log('------')
    for (let i = 0; i < 10; i++) {
        if (i === 3) continue //da continuidad a la secuencia
        console.log('Number: ${i}')
    }
       