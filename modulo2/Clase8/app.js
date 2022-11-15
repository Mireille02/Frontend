/*const button = document.querySelector("button");
const saludar = () => alert("Hola!");
const toggle = () => button.classList.toggle("red");
button.addEventListener("click", saludar); // Hola
button.addEventListener("click", toggle); // Agrega/Remueve el color red CSS*/

const button = document.querySelector("button");
const saludar = () => alert("hola!");
const toggle = () => button.classList.toggle("red");
button.addEventListener("click", saludar); // Agregar listener
button.addEventListener("click", toggle); // Toggle red CSS
button.removeEventListener("click", saludar); // Remueve listener