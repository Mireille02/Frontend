//Crea la función contar caracteres.
//Como parámetro, asigna un valor por defecto (cadena vacía ="") para que, si no se pasa alguna cadena, le sea asignado este valor
function contarCaracteres (cadena=""){
    let cuentaCadena=cadena.length();
    if(cuentaCadena===0){
        console.log("No ingresa ninguna cadena");
    }else{
        console.log(`La cadena ${cadena} tiene ${CuentaCadena} caracteres`);
    }
}

//Utiliza una validación para que, si no se pasa ningún carácter, se ponga un menaje de warning en la consola indicando “No ingresaste ninguna cadena”. En caso contrario, indicar con el texto: “La cadena ${cadena} tiene ${numero} caracteres”
const contarCaracteres1 = (cadena="") => {
    if(!cadena){
        console.warn("No ingresaste ninguna cadena");
    }else{
        console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`);
    }
}

//Declara una función anónima en una variable llamada pelicula
const pelicula = function(nombre=""){
    console.log(`El nombre de la pelicula es ${nombre}`);
}

//Callback
//Crea una función que se llame sumame, a la que le pases como argumento dos números enteros
function sumame(numero1, numero2){
    let suma = numero1 + numero2;
    console.log(suma);
}

function sumame(numero1, numero2, sumarYmostrar, sumarPorDos){
    let suma = numero1 + numero2;
    console.log(suma);
    sumarYmostrar(suma);
    sumarPorDos(suma*2);
}
sumame1(12,43,function(resultado){
    console.log('La suma es ', resultado);
},function(resultado2){
    console.log('la suma por dos es ',resultado2)
}
);

