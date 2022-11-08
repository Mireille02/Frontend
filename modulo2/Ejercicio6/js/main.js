const compose = (...functions) => data =>
    functions.reduceRight((value, func) => func(value), data)

 //Crea cuatro variables en el archivo main.js para acceder a los inputs, una por cada input (descripcion, calorias, carbohidratos y proteina)
 /*let descripcion = document.getElementById('descripcion').value; //trae el elemento que trae el id descripcion del HTML
 let calorias = document.getElementById('calorias').value;//input
 let carbohidratos = document.getElementById('carbohidratos').value;
 let proteina = document.getElementById('proteina').value;*/

 let descripcion = $('#descripcion'); //solo con JQuery se usa el $ y la almohadilla #
 let calorias = $('#calorias');
 let carbohidratos = $('#carbohidratos');
 let proteina = $('#proteina');

 //Crea una variable de tipo arreglo en la que se van a almacenar los elementos una vez que se cumplan con las validaciones
 let lista = [];

 //Valida que los campos input no estén vacíos utilizando el método val() de cada input. En caso de que estén vacíos, agrega la clase de bootstrap 'is-invalid', para lo cual puedes utilizar un operador ternario similar a este para cada elemento:
 descripcion.keypress(() =>{ //función anónima y llama a otra función
    descripcion.removeClass('is-invalid')
 }
 )

 calorias.keypress(() =>{ //función anónima
    calorias.removeClass('is-invalid')
 }
 )

 carbohidratos.keypress(() =>{ //función anónima
    carbohidratos.removeClass('is-invalid')
 }
 )

proteina.keypress(() =>{ //función anónima
    proteina.removeClass('is-invalid')
 }
 )

//Se crea la función validar la función validarInput
/*function validarInput() {
    if ((descripcion != "" && descripcion != null && descripcion && undefined) &&
        (calorias != "" && calorias != null && calorias && undefined) &&
        (carbohidratos != "" && carbohidratos != null && carbohidratos && undefined) &&
        (proteina != "" && proteina != null && proteina && undefined)) {
    } else {
        Swal.fire('Debe de ingresar todos los datos');
    }
}*/

validarInput = () => {
////Si se coloca un valor, es necesario eliminar la clase 'is-invalid'. Para lograrlo, utiliza el método .keypress() de jQuery, manda llamar a este método en un código que deberás colocar por fuera de la función validarInput() (de preferencia que lo coloques antes de la función), pasándole una función flecha con el método removeClass a cada elemento.
    descripcion.val() ? '' : descripcion.addClass('is-invalid');
    calorias.val() ? '' : calorias.addClass('is-invalid');
    carbohidratos.val() ? '' : carbohidratos.addClass('is-invalid');
    proteina.val() ? '' : proteina.addClass('is-invalid');

//Regresando a la función validarInput(), valida que todos los inputs tengan un valor, si eso ocurre, entonces agrega ese elemento a la lista mandando a llamar a la función agregar()
    /*if(descripcion.val() && //todos los inputs tienen valor
    calorias.val()&&
    carbohidratos.val &&
    proteina.val ()
    )*/
    agregar(); //los va agregar a la variable lista
}

//Crea la función debajo de validarInput() 
const agregar = () => {
//Genera un nuevo objeto, que es el que se va a agregar a la lista, nómbralo nuevoElemento y llénalo con los valores del input
    const newElement = {
        descripcion: descripcion.val(),
//Asegúrate de que los valores para calorias, carbohidratos y proteinas sean numéricos, esto lo podrías lograr utilizando parseInt.
        calorias: parseInt(calorias.val()),
        carbohidratos: parseInt(carbohidratos.val()),
        proteina: parseInt(proteina.val())
    }
//Con el objeto ya completo, utiliza el método push para que lo agregues a la lista.
    lista.push(newElement);
    limpiarInputs();
    //Invoca a la función actualizarTotales () desde la función agregar()
    actualizarTotales();
    renderElementos();
    console.log(lista);
}

//Cada que se introduce un elemento, los inputs no se limpian, por lo que es necesario limpiarlos cada que se ingresa un elemento a la lista. Para realizarlo, crea una función limpiarInputs
const limpiarInputs = () => {
    descripcion.val('');
    calorias.val('');
    carbohidratos.val('');
    proteina.val('');
}

// Crea una función atrsToCadena
//atrs = atributos
//Debe recibir dos parámetros: el tag y otro objeto, que son las clases de este tag.
//Obtén las llaves del objeto que se está pasando, antes crea una variable y utiliza la función de JavaScript Objet.keys del objeto que se está pasando.
//Crea otra variable atributos del tipo array.
//Crea un ciclo for con el que vas a recorrer el contenido de keys.
//Guarda en una nueva variable atributo el atributo que va a ser igual a la llave de la posición y este se va a agregar al arreglo que se creó mediante un push de la manera atributo = atributo del objeto
/*const atrsToCadena = (objeto = {}) => {
    const keys = Object.keys(objeto);
    const attrs = [];
    for(let i = 0; i < keys.length; i++){
        let attr = keys(i);
        attrs.push(`${attr}="${obj[attr]}"`);
    }
    const string = attrs.join(' ');
    return string;
}*/

//Programación funcional e imperativa
const atrsToCadena = (objeto = {}) =>
Object.keys(objeto)
.map(attr => `${attr}="${objeto[attr]}"`)
.join('');

const atrsTag = objeto => (contenido = '') =>
`<${objeto.tag}${objeto.attrs ? ' ' : ''}${atrsToCadena(objeto.attrs)}>${contenido}</${objeto.tag}>`; //convierte los atributos en una cadena

/*const tag = t => {
    if(typeof t === 'string'){
        return atrsTag ({tag: t});
    }
    return atrsTag(t);
}*/

//programación funcional
const tag = t => typeof t==='string' ? atrsTag({tag: t}) : atrsTag(t);

//Crea una función que arme las filas con sus respectivas celdas, la cual deberá llamarse filaTabla y recibirá un arreglo de items. Es aquí donde utilizarás la función compose, a la cual le pasarás como argumentos la función filaTablaTag y celdasTabla
const filaTablaTag = tag('tr');
const filaTabla = elementos => compose(filaTablaTag, celdasTabla)(elementos);

const celdaTabla = tag('td');
const celdasTabla = elementos => elementos.map(celdaTabla).join('');
const trashIcon = tag ({tag: 'i', attrs: {class: 'fa fa-trash-alt'} })('');

//Crea una función flecha actualizarTotales, la cual va a recorrer un arreglo a través de .map
//Declara tres variables: calorias, carbohidratos y proteina e inicialízalas en 0.
//Utiliza la función map para recorrer el arreglo lista y suma el contenido de cada uno de los elementos calorias, carbohidratos y proteina a su respectiva variable
const actualizarTotales = () => {
    let calorias = 0, carbohidratos = 0, proteina = 0;
    lista.map(elemento => {
        calorias += elemento.calorias,
        carbohidratos += elemento.carbohidratos,
        proteina += elemento.proteina;
    })
//Para poder mostrar los totales, utiliza la función .text de jQuery y asígnala al selector de esta manera
//es para JQuery
    $('#totalCalorias').text(calorias);
    $('#totalCarbohidratos').text(carbohidratos);
    $('#totalProteina').text(proteina);
}

//Para pintar los elementos, utiliza la función append de JavaScript, creando la función renderElementos
const renderElementos = () => {
    $('tbody').empty()

//Primero crea un ícono que se va a utilizar como botón:
//Declara el ícono como iconoBorrar y llama a la función tag para que construya una etiqueta 'i' y que le ponga las clases fa y fa-trash-alt de Bootstrap. Pásale solo una cadena vacía al segundo argumento (coloca este código en la “zona de definición” para que tengas tu código más ordenado).
//Modifica la función renderElementos para poder crear el botón y hazlo de la siguiente manera:
//Además de elemento, pásale como argumento el índice del elemento al map.
//Crea una función botonEliminar para que se pinte en el html invocando a la función tag. 
//Pásale como primer atributo los parámetros el tag ' button' y:
//class: 'btn btn-outline-danger' 
//onclick: `eliminarElemento(${indice})´
//Como segundo atributo, pásale el iconoBorrar.
//Agrega botonEliminar a la invocación de la función filaTabla
    lista.map((elemento, indice) => {
        const botonEliminar = tag({
            tag: 'button',
            attrs: {
                class: 'btn btn-outline-danger',
                onclick: `eliminarElemento(${indice})`
            }
        })(trashIcon)
        $('tbody').append(filaTabla([elemento.descripcion, elemento.calorias, elemento.carbohidratos, elemento.proteina, botonEliminar]))
    })
}

//Crea la función eliminarElemento
//Utiliza la opción splice de JavaScript, la cual requiere que le pases como parámetro el índice del elemento que se desea eliminar y el número de elementos (en este caso siempre será 1).
//Llama a la función actualizarTotales() para que se actualicen los totales cuando se elimine el elemento. 
//Llama a la función renderElementos() para que se redibujen en el html
const eliminarElemento = (indice) => {
    lista.splice(indice, 1)
    actualizarTotales();
    renderElementos();
}



//tbody es parte de una tabla en el cuerpo


``