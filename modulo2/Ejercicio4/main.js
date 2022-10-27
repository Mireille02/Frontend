//Crea el objeto juego, el cual tendrá en su interior tres arreglos:
const juego = {
    opciones: {
        0: "✂️",
        1: "🖐️",
        2: "🤜"
    },
    nombreJugadores: {
        jugador1: "jugador1",
        jugador2: "Computadora"
    },
    scores: {
        puntosJ1: 0,
        puntosJ2: 0
    }
};

//Crea una función flecha para solicitar el nombre del usuario, a través de una ventana de mensaje del navegador, y asígnala a la variable pedirNuevoNombre.
var pedirNuevoNombre = () => {
    return window.prompt("Ingresa el nombre del jugador");
}

//Crea una función expresada que permita asignar el nombre proporcionado por el usuario al , nómbrala cambiarNombre. Esta función recibirá como parámetro el nuevo nombre proporcionado por el usuario y tendrá que realizar lo siguiente:
//a. Validar, a través de expresiones regulares, que el nombre contenga letras y números. En caso de que solo contenga números o caracteres especiales, deberá asignar el nombre por defecto declarado en el objeto.
//b. En cada caso imprime un mensaje de bienvenida: 
//i. En caso de que el nombre cumpla con las condiciones, imprime: "Bienvenid@ " + nombre del jugador + " !"
//ii. En caso de que el nombre no sea aceptado, imprime: "Mejor te llamaré... " + nombre por defecto declarado en el objeto
var cambiarNombre = (nuevoNombre) => {
    if (/^[a-zA-Z]+/.test(nuevoNombre)) { //test es para evaluar
        juego.nombreJugadores.jugador1 = nuevoNombre;
        console.log("Bienvenido" + nuevoNombre + "🙋‍♂️!");
    } else {
        console.log("Mejor te llamaré" + juego.nombreJugadores.jugador1)
    }
}

//Crea una función que genere un número aleatorio
//a. El valor de este aleatorio deberá estar entre 0 y 2, puedes realizarlo utilizando el método random de la función Math, redondéalo al entero menor utilizando el método floor de la función Math. 
//b. Asígnalo a la variable aleatorio. 
//c. Regresa el valor de esa variable convertido en cadena
function aleatorio() {
    var numeroAleatorio = Math.floor(Math.random() * 3);//con el punto se llama un método en este caso el método Random
    return numeroAleatorio.toString();
}

//Crea una función expresada llamada imprimirManoAleatoria, la cual deberá tomar el número de la variable aleatorio y, con base en las opciones del objeto juego, regresará el ícono piedra, papel o tijera, respectivamente, obtenido desde el objeto
var imprimirManoAleatoria = () => {
    return juego.opciones[aleatorio()];
}

//Crea una función expresada llamada imprimirResultado. La funcionalidad de esta será imprimir el resultado del juego, comparando si gana el jugador 1 o el jugador 2, con base en los siguientes criterios
//Si el jugador 2 tiene más juegos ganados que el jugador 1, imprimir en la consola la cadena: “Fin del juego gana “ + nombre del jugador 2 +”Game Over 
//Si el jugador 1 tiene más juegos ganados que el jugador 2, imprimir en la consola la cadena: “Fin del juego gana “ + nombre del jugador 1 +” ”.
var imprimirResultado = (puntosJugador1, puntosJugador2) => {
    if (puntosJugador1 > puntosJugador2) {
        console.log("Fin del Juego. Gano" + juego.nombreJugadores.jugador1 + "🙋‍♂️🙌");
    } else {
        console.log("Fin del juego. GanO:" + juego.nombreJugadores.jugador2 + "👾🙌");
    }
}

//Crea una función para saber quién gana, tomando como parámetro un 0 para empate, 1 para jugador1 y 2 para jugador2. Asigna la función gana a la variable resultado
var resultadoGana = (gana) => {
    switch (gana) {
        case 0:
            console.log("🥊" + juego.nombreJugadores.jugador1 + " :[" + juego.scores.puntosJ1 + "]" +
                juego.nombreJugadores.jugador2 + " :[" + juego.scores.puntosJ2 + "🥊");
            break;
        case 1:
            console.log("🥊" + juego.nombreJugadores.jugador1 + " :[" + juego.scores.puntosJ1 + "]" +
                juego.nombreJugadores.jugador2 + " :[" + juego.scores.puntosJ2 + "]");
            break;
        default:
            console.log(juego.nombreJugadores.jugador1 + " :[" + juego.scores.puntosJ1 + "]" +
                juego.nombreJugadores.jugador2 + " :[" + juego.scores.puntosJ2 + "]");
            break;
    }
}

//Crea una función expresada para evaluar quién gana, la cual recibirá como parámetros la elección del jugador1 y del jugador2. Nombra a esta función evalua.
let evalua = (jugador1Hand, jugador2Hand) => {
    let gana = 0;
    if (jugador1Hand === jugador2Hand) {
        console.log("\t" + jugador1Hand + "VS" + jugador2Hand + " empatan");
    } else if (jugador1Hand === juego.opciones["0"] && jugador2Hand === juego.opciones["1"]
        || jugador1Hand === juego.opciones["1"] && jugador2Hand === juego.opciones["2"]
        || jugador1Hand === juego.opciones["2"] && jugador2Hand === juego.opciones["0"]
    ) {
        console.log("\t" + jugador1Hand + "gana a" + jugador2Hand);
        juego.scores.puntosJ1++;
        gana = 1;
    } else {
        console.log("\t" + jugador2Hand + "gana a" + jugador1Hand);
        juego.scores.puntosJ2++;
        gana = 2;
    }
    resultadoGana(gana);
}

//Crea en una expresión la función principal para el programa y nómbrala main
let main = () => {
    while((juego.scores.puntosJ1 == 3 || juego.scores.puntosJ2 != 3)){
        //while(juego.scores.puntosJ1 || juego.scores.puntosJ2 !=3){
        let jugador1Hand = imprimirManoAleatoria();
        let jugador2Hand = imprimirManoAleatoria();
        console.log("\t\t🃏" + juego.nombreJugadores.jugador1 + " " + jugador1Hand);
        console.log("\t\t🃏" + juego.nombreJugadores.jugador2 + " " + jugador2Hand);
        evalua(jugador1Hand, jugador2Hand);
        if (juego.scores.puntosJ1 == 3 || juego.scores.puntosJ2 == 3) {
            imprimirResultado(juego.scores.puntosJ1, juego.scores.puntosJ2);
            break;
        }
    }
}

//A jugar
cambiarNombre(pedirNuevoNombre());//una variable pasa como parámetro de otra variable
console.log("🏁 Que comience el juego 🏁");
main();


