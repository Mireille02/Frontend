var _privado = new WeakMap();

//Se crea la clase Libro
class Libro {
    constructor(precio, titulo, autor) {
        const propiedades = {
            _precio: precio,
            _titulo: titulo,
            _autor: autor
        }
        _privado.set(this, { propiedades });
    }
    // Obtiene el título de un libro:
    get titulo() {
        return _privado.get(this).propiedades['_titulo'];
    }
    // Establece/modifica el título de un libro:
    set titulo(newTitulo) {
        return _privado.get(this).propiedades['_titulo'] = newTitulo;
    }
    // Obtiene el autor del libro:
    get autor() {
        return _privado.get(this).propiedades['_autor'];
    }
    // Establece/modifica el autor de un libro:
    set autor(newAutor) {
        return _privado.get(this).propiedades['_titulo'] = newAutor;
    }
    // Obtiene el precio del libro:
    get precio() {
        return _privado.get(this).propiedades['_precio'];
    }

    obtenerTodosLosDatos() { //se crea el método obtenerTodosLosDatos
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Precio: ${this.precio}`);
    }
}


//Se crea la clase Comic
class Comic extends Libro {
    constructor(precio, titulo, autor, ilustradores) {
        super(precio, titulo, autor);
        this.ilustradores = ilustradores
    }
    agregarIlustrador(newIlustrador) {
        this.ilustradores.push(newIlustrador);
    }
    obtenerTodosLosDatos() {
        //Ejecuta el código de getAllData de la clase Padre
        super.obtenerTodosLosDatos()
        //Código para imprimir la propiedad de Ilustradores
        console.log(`Ilustradores: ${this.ilustradores}`)
    }
}


//Se crea la clase CarritoCompras
class CarritoCompras {
    constructor() {
        this.productos = [];
    }

    //Programación Funcional
    //Agrega un producto al carrito
    agregarProducto(cantidad, precio) {
        this.productos.push(...Array(cantidad).fill(precio));//... significa que lo que traiga el Array le agrega el precio y la cantidad
    }

    //Mostrar productos al carrito
    mostrarProductos() {
        console.log(this.productos);
    }

    //Calcula el total de los productos agregados al carrito
    calcTotal() {//Se declara el método calcTotal
        return this.productos
            .map(precio => precio)
            .reduce((ac, precio) => ac + precio, 0);
    }

    //Imprime el total
    imprimirTicket() {
        console.log(`Total a pagar: ${this.calcTotal()}`);
    }

}

//Instancia de Book
var libro1 = new Libro(200, "Harry Potter: Y el cáliz de fuego", "J.K Rowling");
libro1.obtenerTodosLosDatos();

//Instancia de Comic
var comic1 = new Comic(300, "Spiderman", "Stan Lee", ["Stan Lee", "Marvel"]);
comic1.obtenerTodosLosDatos();

comic1.agregarIlustrador('DC Comics');
console.log(comic1.ilustradores);

const carrito = newCarritoCompras();

carrito.agregarProducto(2, comic1.precio);
carrito.agregarProducto(3, libro1.precio);
carrito.mostrarProductos();
carrito.imprimirTicket();
libro1.obtenerTodosLosDatos();
comic1.obtenerTodosLosDatos();


