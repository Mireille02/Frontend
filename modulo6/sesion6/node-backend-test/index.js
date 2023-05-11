const calcEdad = (dob) => {
    const digitos = {
        year: 'numeric',
    };
    const year = new Date().toLocaleDateString('es-US', digitos);

    console.log(year);

    return year - dob;
};

const creaCaja = (x,y) => {
    return x*y;
}

module.exports={
    calcEdad,
    creaCaja
}