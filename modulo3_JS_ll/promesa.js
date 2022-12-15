var promise = new Promise ( function(resolve, reject){

    function mostrarMensaje () {
        var producto = 20 * 20;
        resolve(producto);
        console.log("El resultado de la operación es" + producto);
    }
    setTimeout(mostrarMensaje, 10000);
})

console.log(promise);
console.log("Iniciando espera");

promise.then(function(message){
    console.log(message);
})

console.log("Finalizando espera");