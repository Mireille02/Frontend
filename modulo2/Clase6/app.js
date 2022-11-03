function interseccion(a, b) {
    var resultado = [];
    for (var i = 0; i < a.length; ++) {
        for (var j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                resultado.push(a[i]);
                break;
            }
        }
    }
    return resultado.sort();
}

const intersection = (a, b) => a.filter(value => b.index0f(value) > -1).sort();

const hola = () => 4
console.log("Hola Mundo"); // Hola Mundo

["A", "B", "C"].forEach((e, i) => console.log("i=", i, "list=", e));

const arreglo = [1, 2, 3];
const mapeo = arreglo.map(function (elemento) {
    return elemento + 1;
}); // mapeo es [2, 3, 4]
const reducido = arreglo.reduce(function (elem1, elem2) {
    return elem1 + elem2;
}); // reducido es 6
const filtrado = arreglo.filter(function (elemento) {
    return elemento !== 1;
}); // filtrado is [2, 3]
console.log(mapeo);
console.log(reducido);
console.log(filtrado);

const sumar = (x, y) => console.log(x + y);
setTimeout(() => sumar(2, 2), 1000);
sumar(4, 4);

//Impura
const tiempo = () => Date.now();
tiempo();//1664171354245
tiempo();//1664171354251
//Pura
const suma = (a, b) => (a + b);
suma(2, 5);// =>7
suma(2, 5);// =>7

var variable_global = 5
const funcion = (x) => {
    variable_global = 10; //Cambio de valor
    return x + variable_global;
}
funcion(3); //13

const cadena = "Este string es inmutable"
const cadena1 = cadena.slice(5, 11)
const cadena2 = cadena1.toUpperCase()
console.log(cadena) // "Este string es inmutable"
console.log(cadena1) // "string"
console.log(cadena2) // "STRING"

const arreglo1 = { a: 1, b: 2, c: 3 }
const nuevoArreglo = { ...arreglo1, c: 4, d: 5 }
// nuevoArreglo queda { a: 1, b: 2, c: 4, d: 5}