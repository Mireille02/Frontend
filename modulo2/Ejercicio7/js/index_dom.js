//Para poder probar el funcionamiento, es necesario importar en el archivo que controla el funcionamiento del DOM (index_dom.js) la función hamburgerMenu de “ruta_del_archivo/nombre_archivo.js”
import hamburgerMenu from "./dom/menu_hamburguesa.js";//importa el archivo menu_hamburguesa
import { digitalClock, alarm } from "./dom/reloj.js";//importa reloj.js

//Crea una constante y asígnale la clase document
const d=document;

//Indícale a JavaScript que la carga del documento, con addEventListener, habilite la función hamburgerMenu
d.addEventListener("DOMContentLoaded",(e) => {
    hamburgerMenu(".panel-btn",".panel",".menu a");//el punto es porque son clases
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("./varios/alarma.mp3","#activar-alarma","#desactivar-alarma")
}
)
