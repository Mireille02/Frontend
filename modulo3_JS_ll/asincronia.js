(function () {//la función se autollama
document.write("Código Sincrono"+"<br/>");//enviar un mensaje
document.write("Inicio");
dos();//Llama la función dos
uno();//Llama la función uno
document.write("Tres");
uno();
document.write("Fin");
generarSuma();//Llama la función de generar Suma
})();

function dos () {
    document.write("Dos");
}

function uno () {
    document.write("Uno");
}

function generarSuma () {
    var sum = 0;
    for(let i=0; i<1000000; i++){
        sum = sum + i;
    }
    document.write(sum);
}



