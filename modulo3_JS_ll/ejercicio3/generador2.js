/*Ejemplo 4*/
(function () {
    function* generadorNumero (){
        let i=0;
        while(true){
            yield i;//ayuda que el compilador entienda que la variable es asíncrona
            i++;
        }
        return i;
    }
    const contador = generadorNumero();

    console.log(contador.next()); //next = devuelve el valor
    console.log('Esta en espera');
    console.log(contador.next());
    console.log('Esta en espera');
    console.log(contador.next());
    console.log('Esta en espera');
    console.log(contador.next());
    console.log('Esta en espera');
    console.log(contador.next());
    console.log('Esta en espera');

})();

/*Ejercicio 3*/
(function (){
    function * generadorNumero(){
    let i=1;
    while(true){
        yield i;
        i++;
    }
    return i;
}
const contador = generadorNumero();

    console.log('APRI' + contador.next().value);
    console.log('APRI' + contador.next().value);
    console.log('APRI' + contador.next().value);
    console.log('APRI' + contador.next().value);
    console.log('APRI' + contador.next().value);
    console.log('APRI' + contador.next().value);
    console.log('APRI' + contador.next().value);
    console.log('APRI' + contador.next().value);


})();