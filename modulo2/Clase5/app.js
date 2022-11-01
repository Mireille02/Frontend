let persona = {};
persona.hablar = function (linea) {
    console.log(`la persona dice '${linea}'`);
};
persona.hablar("Estoy vivo.");
// → La persona dice 'Estoy vivo.'

function hablar(linea) {
    console.log(`La persona ${this.tipo} dice '${linea}'`);
}
let personaFeliz = { tipo: "feliz", hablar };
let personaHambrienta = { tipo: "hambrienta", hablar };
personaFeliz.hablar("La vida es bella, " +
    "Hoy es un buen día para empezar!");
// → La persona feliz dice 'La vida es bella, Hoy es un buen día para empezar'
personaHambrienta.hablar("Podría comerme un león ahora mismo.");
// → La persona hambrienta dice 'Podría comerme un león ahora mismo.'

let objeto = {};
console.log(objeto.toString);
// → function toString(){…}
console.log(objeto.toString());
// → [object Object]

let personaPrototipo = {
    hablar(palabras) {
        console.log(`La persona ${this.tipo} dice '${palabras}'`);
    }
};
let personaSonriente = Object.create(personaPrototipo);
personaSonriente.tipo = "sonriente";
personaSonriente.hablar("Jajajajaja!");
// → La persona sonriente dice 'Jajajajaja!'

function crearPersona(tipo) {
    let persona = Object.create(personaPrototipo);
    persona.tipo = tipo;
    return persona;
}

function Persona(tipo) {
    this.tipo = tipo;
}
Persona.prototype.hablar = function (linea) {
    console.log(`La persona ${this.tipo} dice '${linea}'`);
};
let personaRara = new Persona("rara");

class Persona {
    constructor(tipo) {
        this.tipo = tipo;
    }
    hablar(linea) {
        console.log(`La persona ${this.tipo} dice '${linea}'`);
    }
}
let personaRara1 = new Persona("rara");

// Clase padre
class Figura {
    constructor() {
        console.log("Soy una figura geométrica.");
    }
}
// Clase hija
class Triangulo extends Figura {
    constructor() {
        super();
        console.log("Soy un triángulo.");
    }
}

// Clase padre
class Figura {
    constructor(x, y) {
        this.xPosition = x;
        this.yPosition = y;
        console.log("Soy una forma geométrica.");
    }
    obtenerArea() { }
}
// Clase hija
class Circulo extends Figura {
    constructor(x, y, radio) {
        super(x, y, radio);
        this.radio = radio
    }
    obtenerArea() { }
}
let circulo = new Circulo(1, 2, 3)

/*Class Cafetera {
    _cantidadAgua = 0;
    set cantidadAgua(value) {
        if (value < 0) {
            value = 0;
        }
        this._cantidadAgua = value;
    }
    get cantidadAgua() {
        return this._cantidadAgua;
    }
    constructor(power) {
        this._power = power;
    }
}*/