var _privado = new WeakMap();

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

    obtenerTodosLosDatos() { //se crea el método
        console.log( `Título: ${this.titulo}, Autor: ${this.autor}, Precio: ${this.precio}`);
    }
}


class Comic extends Libro {
    constructor(precio, titulo, autor, ilustradores){
        super(precio, titulo, autor);
        this.ilustradores = ilustradores
    }
    agregarIlustrador(newIlustrador){
        this.ilustradores.push(newIlustrador);
    }
    obtenerTodosLosDatos(){
        super.obtenerTodosLosDatos()
        console.log(`Ilustradores: ${this.ilustradores}`)
    }
}


var libro1 = new Libro(200, "Harry Potter: Y el cáliz de fuego", "J.K Rowling");
libro1.obtenerTodosLosDatos();

var comic1 = new Comic(300, "Spiderman", "Stan Lee", ["Stan Lee", "Marvel"]);
comic1.obtenerTodosLosDatos();

