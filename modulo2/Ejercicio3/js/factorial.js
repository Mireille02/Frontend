function factorial(numero) {
    if (numero === undefined) {
        return console.warn("No ingresaste un numero");
    } if (typeofnumero != "number") {
        return console.error(`El valor de ${numero} ingresado NO es un número`);
    } if (numero === 0) {
        return console.error("El numero no puede ser 0");
    } if (Math.sign(numero) === -1) {
        return console.log(Math.sign(numero))//para ver que signo tiene el número
        return console.error("El numero no puede ser negativo");
    } else {
        let factorial = 1;
        for (let i = numero; i > 1; i--) {
            factorial *= i;
        }
        return console.log(Math.sign(numero));
        return console.info(`El factorial del numero ${numero} es ${factorial}`);
    }
}

function factorial1(numero) {
    let factorial = 1;
    for (let i = numero; i > 1; i--) {
        factorial *= i;
    }
    return console.info(`El factorial del numero ${numero} es ${factorial}`);
}