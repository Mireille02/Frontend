console.log(cuadrado(5));

function cuadrado(numero) {
    let resultado = numero * numero;
    console.log(resultado);
}
cuadrado(5);

//constante: un valor que no cambia durante todo el programa
const cuadrado2 = function (numero) {
    return numero * numero;
};
//funcion anónima
//variables globales
//let variable locales (dentro de una función)
//const son variables constantes, pero también se utilizan en funciones expresadas / anónimas

console.log(cuadrado2(350));
console.log(cuadrado2(35));

(function () {
    var nombre = "Juan";
})();
console.log(nombre);
// Devuelve Uncaught ReferenceError: nombre is not defined

const alumnos = {
    personas: [],
    agrega(...personas) {
        this.personas.push(...personas);
    },
    saludo(i) {
        return `Hola mi nombre es ${this.personas[i]}`;
    }
};
alumnos.agrega('Hugo', 'Paco', 'Luis');
alumnos.saludo(0); // => 'Hola mi nombre es Hugo'

const saludo = (nombre) => {
    return `Hola ${nombre}`;
}
console.log(saludo('Pedro')) // => Devuelve Hola Pedro
// Compactando un poco más el código.
const salu2 = (nombre) => `Hola ${nombre}`;
console.log(salu2('Pedro')); // => Devuelve Hola Pedro

//Variables definidas en ámbito global
var numero1 = 5,
    numero2 = 4,
    nombre = 'Jordan';
//Función definida en ámbito global
function multiplica() {
    return numero1 * numero2;
}
multiplica(); //Regresa 20
console.log(multiplica())
//Funciones anidadas
function getMarcador() {
    //Variables definidas en ámbito local
    let numero1 = 10,
        numero2 = 7;

    function agregar() {
        return nombre + ' anotó ' + (numero1 + numero2);
    }
    return agregar();
}
getMarcador(); // Devuelve "Jordan anotó 17"
