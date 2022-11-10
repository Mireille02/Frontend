let arregloish = {0: "uno", 1: "dos", length: 2}; //varuable tipo objeto
let arreglo = Array.from(arregloish);
console.log(arreglo.map(s => s.toUpperCase())); //función tipo flecha
// → Regresara ["UNO", "DOS"]