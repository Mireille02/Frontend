//Solicita dos números al usuario y asígnalos a las variables numero1 y numero2 respectivamente.
var numero1 = parseInt(prompt('Introduce el primer número', 0));
var numero2 = parseInt(prompt('Introduce el segundo número', 0));

//Imprime en el documento html con la etiqueta h1
document.write("<h1>De " + numero1 + " a " + numero2 + " están estos números:</h1>")

//Crea un bucle para recorrer desde el valor de la variable numero1 hasta el valor de la variable numero2.
for (let i = numero1; i <= numero2; i++) {
    document.write(i+'<br>');
}
//Dentro del bucle, imprime en el html desde el valor de numero1, incrementando de uno en uno, hasta llegar a numero2.
document.write("<h2> Los números pares de este intervalo son: </h2>")

//Modifica el ejercicio anterior para mostrar en la consola solamente los números impares que hay entre los dos números introducidos por el usuario. 
//Puedes hacerlo utilizando while y el operador modal(%)
while (numero1 <= numero2) {
    if (numero1 % 2 != 0) {
        documento.write(numero1+'<br>');
    }
    numero1++;
}
