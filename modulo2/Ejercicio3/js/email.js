const validarEmail = (email="")=>{//asigna una cadena vacia
if (email) return console.warn("no ingresaste un email");
if(typeof email != "string") return console.error(`El valor de ${email} ingresado No es una cadena de texto `)
let expReg=/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);//expresión regular
return(expReg) ?console.info(`"${email}" ingresado NO es un email valido`)
: console.warn(`"${email}" ingresado NO es un email valido`);
}