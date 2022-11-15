//Para poder probar el funcionamiento, es necesario importar en el archivo que controla el funcionamiento del DOM (index_dom.js) la función hamburgerMenu de “ruta_del_archivo/nombre_archivo.js”
import hamburgerMenu from "./dom/menu_hamburguesa.js";//importa el archivo menu_hamburguesa
import { digitalClock, alarm } from "./dom/reloj.js";//importa reloj.js
import { shortcuts, moveBall } from "./dom/teclado.js";//importa teclado.js
import { countDown } from "./dom/cuenta_regresiva.js";//importa cuenta_regresiva.js

//Crea una constante y asígnale la clase document
const d = document;

//Indícale a JavaScript que la carga del documento, con addEventListener, habilite la función hamburgerMenu
d.addEventListener("DOMContentLoaded", (e) => {//importa un evento
    hamburgerMenu(".panel-btn", ".panel", ".menu a");//el punto es porque son clases
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("./varios/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    countDown("countdown",
    "Dec 25, 2022 00:00:00",
    "Feliz Navidad!!");
}
)

//Ejercicio 8
let now = new Date().getTime();
console.log("ahora");
//Para desencadenar el evento, utiliza addEventListener y pásale como parámetros el tipo de evento del teclado que se está escuchando (“keydown”) y, como segundo parámetro, envíale una función flecha en la que invoques a la función shortcuts que recibe como parámetro al evento.
d.addEventListener("keydown", (e) =>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})
