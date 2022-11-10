//En el archivo js del menú hamburguesa, exporta por default una función que se llame hambugerMenu, la cual va a recibir como parámetros el botón que activa (llamémosle panelBtn) y el panel (que es el elemento que se va a mover)
export default function hamburgerMenu(panelBtn, panel, menuLink){
    //Como se va a utilizar la delegación de eventos del DOM, y para poder trabajar más fácilmente, declara una constante y asígnale la clase document.
    const d=document;
    //Asigna, mediante la delegación de eventos, el evento click al document. Indícale que, si el evento que lo origina coincide con el selector que se está enviando en panelBtn, intercambia la clase is-active al elemento panel
    d.addEventListener("click",(e)=>{
        //template strings
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active");//es para que se de click en el botón
            d.querySelector(panelBtn).classList.toggle("is-active");//para que el botón se convierta en X
        }
        //. En el cuerpo de la clase, agrega otro condicional para la delegación de eventos y valida que, si el objeto generó el evento, revisa que su selector coincida con lo que venga en la variable menuLink, se le quite la clase is-active tanto al panelBtn para que regrese del tache a líneas como al panel para que el menú desaparezca
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");//va a quitar el "is-active"
            d.querySelector(panelBtn).classList.remove("is-active");//va a quitar el "is-active"
        }
    });
}