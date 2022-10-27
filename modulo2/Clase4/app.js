//Objetos
const objeto={}; //Esto es un objeto vacío

const jugador={
    nombre:'Ryu',
    poder:10,
    vida:99,
};

console. log ( jugador.nombre) ; // muestra ''Ryu'' 
console. log ( jugador.life) ; // muestra ''99''

console. log ( jugador['npmbre'] ) ; // muestra ''Ryu'' 
console. log ( jugador['life']) ; // muestra 99 

const jugador1={};
jugador1.nombre='Ryu';
jugador1.poder=10; 
jugador1.vida=99; 

const usuario ={
    nombre: "Ryu",
    hablar: function(){return "Hola";}
};
    usuario.nombre; //Esta es una variable(propiedad) que devuelve "Ryu"
    usuario.hablar(); //Esta es una función(método), que se ejecuta y devuelve "Hola"

const objeto1={};
objeto1.toString(); //Devuelve "[object Object]" (representación textual de un objeto genérico)

const numero = 45.2;
numero.toString(); //Devuelve "45.2" (Método de variables de tipo object)
numero.toLocaleString(); //Devuelve "45.2" (Método de variables de tipo object)
numero.toFixed(3); //Devuelve "45.200" (Método de variables de tipo numérico)

const jugador2={
    nombre:"Ryu", //Nombre del jugador
    vida: 4, //Cantidad de vida actual
    totalVida: 6, //Maximo de vida posible
    toString: function(){
    return `${this.nombre} (${this.vida}/${this.totalVida})`;
    }
};
console.log("Mi jugador favorito es "+ jugador2); //"Mi jugador favorito es Ryu (4/6)"


let animal = 'perro';
let mascota = animal;
console.log("Mi jugador favorito es "+ jugador); //"Mi jugador favorito es Ryu (4/6)"

animal = 'dinosaurio';
console.log(mascota); //la salida es perro

let animal1 = {
    especie: 'perro'
    };
    let mascota1 = animal;
    animal1.especie = 'dinosaurio';
    console.log (mascota1.especie); //la salida es "dinosaurio"


//Arreglos
let arregloDeNumeros = [2, 3, 5, 7, 11];
let arregloDeCadenas = ["mango","manzana","uva","pera"];
let animal2 = {
especie: 'perro'
};

let mascota2 = animal;
animal.especie = 'dinosaurio';
console.log (mascota2.especie); //la salida es "dinosaurio"

const ArrayTipoMixto = [100, true, 'Frontend', {}];

let primero = ArrayTipoMixto[0]; //100
let ultimo = ArrayTipoMixto[ArrayTipoMixto.length -1]; //{}

const numeros = [1, 2, 3, 4, 5];
for (i = 0; i < numeros.length; i++) {
console.log(numeros[i]);
} 
//1
//2
//3
//4
//5

//programación funcional
numeros.forEach(function(numero) { //forEach para cada uno de los elementos
    console.log(numero);
});

numeros.forEach(numero => console.log(numero)); //función flecha

let fruta = ["mango", "manzana", "uva", "pera"];
    
//Push: sirve para añadir un elemento a un arreglo.
let nuevaLongitud = fruta.push('naranja'); // Añade "naranja" al final
console.log(fruta);
// ["mango","manzana","uva","pera","naranja"]

//Shift: se utiliza para eliminar el primer elemento.
let primer = fruta.shift(); //Elimina "mango" del inicio
console.log(fruta);
// ["manzana","uva","pera","naranja"]

//Pop: sirve para eliminar el último elemento.
let ultimo1 = fruta.pop(); // Elimina "naranja" del final
console.log(fruta);
// ["manzana","uva","pera"]

//Unshift: se utiliza para añadir un elemento al inicio del arreglo.
let principio = fruta.unshift('fresa'); // Añade "fresa" al principio
console.log(fruta);
// ["fresa","manzana","uva","pera"]

//Splice: sirve para eliminar un elemento mediante su posición.
let elementoEliminado = fruta.splice(1, 1);
console.log(fruta);
// ["fresa","uva","pera"