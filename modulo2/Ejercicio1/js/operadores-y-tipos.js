var numero1 = 7;
var numero2 = 15;

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;

alert("El resultado de la suma es:" + suma +"\n"+
"El resultado de la resta es:" + resta +"\n"+
"El resultado de la multiplicacion es:" + multiplicacion +"\n"+
"El resultado de la division es:" + division);

//"\n" es para dar un enter entre cada párrafo

var numero_entero = 24;
var cadena_texto = "Hola 'que' tal";
var verdader_o_falso = true;
var numero_falso = "33"; //se maneja como texto
var suma = numero_entero + Number(numero_falso); //con number conviertes una variable de texto a una variable de tipo entero
var suma1 = toString(numero_entero) + 9;
var numero_string = numero_entero.toString();

console.log("Tipo de dato de la variable numero_entero:" +typeof numero_entero)
console.log("Tipo de dato de la variable cadena_texto:" +typeof cadena_texto)
console.log("Tipo de dato de la variable verdadero_o_falso:" +typeof verdadero_o_falso)
console.log("Tipo de dato de la variable numero_falso:" +typeof numero_falso)
