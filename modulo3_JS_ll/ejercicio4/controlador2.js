(function () {
    class Pelicula { //atributos
        id;
        titulo;
        director;
        anioEstreno;
        paises;
        generos;
        calificacionIMDB;

        constructor(id, titulo, director, anioEstreno, paises, generos, calificacionIMDB) {
            this.id = id;
            this.titulo = titulo;
            this.director = director;
            this.anioEstreno = anioEstreno;
            this.paises = paises;
            this.generos = generos;
            this.calificacionIMDB = calificacionIMDB;

        }

    }

    function mostrarTitulo(pelicula) {
        document.write("Nombre" + pelicula.titulo);
    }

    //Valida que el título no sea vacío o que sea numérico
    function validarTitulo(titulo) {
        if (titulo == null)
            alert("El título esta vacío");
        else
            if (isNaN(titulo) == false)//isNaN: si es un número
                alert("El título es un número");
    }

    //Valida que la calificación cumpla con la estructura
    function validarIMDB(calificacionIMDB) {
        var expreg = /^([a-z]){2}([0-9]){7}$/;
        if (expreg.test(calificacionIMDB) == true)
            alert("La calificación tiene la estructura correcta");
        else
            alert("La estructura no tiene la estructura correcta");
    }

    //Valida que alguna propiedad no tenga más de cierto número de caracteres
    function validarLongitudCadena(titulo, longitud) {
        let cadena = titulo;
        if (cadena.length > longitud)
            alert("La longitud del" + mensaje + "titulo es mayor a" + longitud + "caracteres");
    }

    //Valida que el año de estreno no este vacío y que no sea un número
    function validarNumero(anioEstreno) {
        if (anioEstreno == null)
            alert("El campo numero esta vacio");
        else
            if (isNaN(anioEstreno) == true)
                alert("El campo no es un número");
    }

    //Valida la longitud válida de un número
    function validarLongitudCadena() {
        let cadena = `${anioEstreno}`;
        if (cadena.length != 4)
            alert("El año de estreno no tiene 4 carácteres");
    }

    //Valida que un arreglo no este vacío
    function validarArreglo(arreglo, mensaje) {
        if (arreglo.length == 0)
            alert("El arreglo" + mensaje + "esta vacío");
    }

    //Valida que el arreglo de generso contenga generos válidos de una lista
    function validaGenerosValidos(arreglo, listaGenerosValidos) {
        for (let i = 0; i > arreglo.length; i++){
            for (let j = 0; j < listaGenerosValidos.length; j++){
                if (arreglo[i] != listaGenerosValidos[j]) {
                    alert("Tiene valores no válidos");
                    return false;
                }
            }
        }
        alert("Todos son iguales");
        return true;
    }

    function mostrarArreglo(arreglo) {
        for(let i = 0; i < arreglo.length; i++)
        document.write(arreglo[i]+"<br/>");
    }

    function mostrarFichaTecnica(id, titulo, director, anioEstreno, paises, generos, calificacionIMDB) {
        document.write("Ficha Tecnica: " + "<br/>");
        document.write("ID: " + id + "<br/>");
        document.write("Título: " + titulo + "<br/>");
        document.write("Director: " + director + "<br/>");
        document.write("Año de Estreno: " + anioEstreno + "<br/>");
        document.write("Países: " + paises + "<br/>");
        document.write("Géneros: " + generos + "<br/>");
        document.write("Calificación IMDB: " + calificacionIMDB + "<br/>");
    }
    
    function mostrarArregloPeliculas(peliculas) {
        for(i = 0; i < peliculas.length; i++){
            mostrarFichaTecnica(peliculas[i].id, peliculas[i].titulo, peliculas[i].director, peliculas[i].anioEstreno, peliculas[i].paises, peliculas[i].generos, peliculas[i].calificacionIMDB);
        }
    }




    let listaGenerosValidos = new Array("drama, terror");

    let paises = new Array("EUA", "Londres");//se hace un arreglo porque es más de un país
    let paises2 = new Array("EUA");
    let paises3 = new Array("EUA");
    //let paises = new Array();
    let generos = new Array("drama", "ciencia ficcion");//se hace un arreglo porque es más de un género
    let generos2 = new Array("acción", "animación", "ciencia ficcion", "épica");
    let generos3 = new Array("acción", "animación", "ciencia ficcion");
    //let generos = new Array();

    let p = new Pelicula('F001', "Titanic", 'James Cameron', 1994, paises, generos, "dd1234567");
    let p2 = new Pelicula('F002', "Avatar", 'James Cameron', 2012, paises, generos, "dd1234567");
    let p3 = new Pelicula('F0013', "Jurasic Park", 'Steven Spielberg', 1993, paises, generos, "dd1234567");

    let peliculas = new Array (p1, p2, p3);

    //mostrarTitulo(p);
    //validarTitulo(p.titulo);
    //validarIMDB(p.calificacionIMDB);
    //validarLongitudCadena(p.titulo, 6, titulo);
    //validarLongitudCadena(p.director, 11, director);
    //validarNumero(p.anioEstreno);
    //validarLongitudCadena(p.anioEstreno);
    //validarArreglo(p.paises, paises);
    //validaGenerosValidos(generos, listaGenerosValidos);
    //document.write("paises"+"<br/>");
    //mostrarArreglo(p.paises);
    //document.write("generos"+"<br/>");
    //mostrarArreglo(p.generos);
    //mostrarFichaTecnica(p.id, p.titulo, p.director, p.anioEstreno, p.paises, p.generos, p.calificacionIMDB);
    mostrarArregloPeliculas(peliculas);


}) ();

//constructor: sirve para construir con este método, donde van los parámetros
//diferenciador: la palabra reservada this es para indicar que hace referencia al atributo de la clase
//una clase es un molde donde se establecen los atributos de un objeto