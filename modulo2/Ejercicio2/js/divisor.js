var numero = parseInt(prompt('Introduce el primer número',0))
for(let i=1; i<=numero; 1++){
    if(numero%i == 0){
        console.log("Divisor: " +i);
    }
}