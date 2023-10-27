const seccionInicio = document.querySelector("#seccion-inicio");
const contenido = document.querySelector("main");
const fondo = document.querySelector("body");

fondo.style.backgroundImage = 'url("fondoPrincipal.png")';
setTimeout(function(){
    fondo.style.backgroundImage = 'url("fondo.png")';
    seccionInicio.classList.add("hidden");
    contenido.classList.add("shown");
}, 2000);


const resultado = document.querySelector("#resultado");
const nombresTronistas = ["Maria Gafas", "Lucia", "Almu", "Maria Panadera", "Laura", "Hueso", "Alba la pequeña", "Alba", "Sara"];
const nombresPareja = ["Chufi", "Mofeta", "Blasete", "Justito Sierra", "May", "Guarro Viejo"];
let posicionRandomTronista, nombreRandomTronista, posicionRandomPareja, nombreRandomPareja;

const resultadoTronista = document.querySelector("#resultado-tronista");
const resultadoPareja = document.querySelector("#resultado-pareja");
const botonJugar = document.querySelector("#jugar");
const barraProgreso = document.querySelector("#progreso");
const porcentaje = document.querySelector("#porcentaje");
let numeroProgreso;

botonJugar.addEventListener("click", ()=>{
    posicionRandomTronista = Math.floor(Math.random()*nombresTronistas.length);
    nombreRandomTronista = nombresTronistas[posicionRandomTronista];
    posicionRandomPareja = Math.floor(Math.random()*nombresPareja.length);
    nombreRandomPareja = nombresPareja[posicionRandomPareja];
    resultadoTronista.innerHTML = nombreRandomTronista;
    resultadoPareja.innerHTML = nombreRandomPareja;

    numeroProgreso = Math.floor(Math.random()*101);
    barraProgreso.style.width = numeroProgreso + "%";
    porcentaje.textContent = numeroProgreso + "%";
});


