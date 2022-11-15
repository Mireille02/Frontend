//Asigna a la constante d la clase document
//Crea las variables "x" y "y"
const d = document;
let x = 0, y = 0;

//exporta la función moveBall
export function moveBall(e, ball, stage) {
    //crea las variables del DOM (van con el $)
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();

    console.log(e.keyCode);
    console.log(e.key);
    console.log(limitsBall);
    console.log(limitsStage);
    console.log("algo");

    //para mover la pelota
    switch (e.keyCode) {
        case 37: //tecla izquierda
            if (limitsBall.left > limitsStage.left) {
                e.preventDefault();
                x--;
            }
            break;
        case 38://tecla arriba
            if (limitsBall.top > limitsStage.top) {
                e.preventDefault();
                y--;
            }
            break;
        case 39://tecla derecha
            if (limitsBall.right < limitsStage.right) {
                e.preventDefault();
                x++;
            }
            break;
        case 40://tecla abajo
            if (limitsBall.bottom < limitsStage.bottom) {
                e.preventDefault();
                y++;
            }
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}

//se exporta la función shortcuts
export function shortcuts(e) {
    //Imprime en la consola el tipo de evento recibido
    console.log(e.type);//el tipo que recibí
    //Imprime en la consola también el evento recibido
    console.log(e.key);//que tecla recibí
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e.altKey);
    console.log(e);//recibe el evento

    //Valida si las teclas presionadas son la “a” y la tecla “alt”
    if (e.ctrlKey && e.key === "a") {
        alert("Haz lanzado una alerta con el teclado");
    }
    //Valida si las teclas presionadas son la “c” y la tecla “alt”
    if (e.ctrlKey && e.key === "c") {
        alert("Haz lanzado una confirmación con el teclado");
    }
    //Valida si las teclas presionadas son la “p” y la tecla “alt”
    if (e.altKey && e.key === "p") {
        alert("Haz lanzado un aviso con el teclado");
    }
}