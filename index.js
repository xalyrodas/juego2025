import { cargarCartas } from "./componentes/tablero/tablero.js";


let DOM = document.querySelector("#root")


let contenedor = document.createElement(`div`);
 contenedor.className= "contenedor"

let header = document.createElement(`div`);
contenedor.appendChild(header);
header.className = "header";

let progreso = document.createElement(`div`);
contenedor.appendChild(progreso);
progreso.className="progreso";

let tablero = document.createElement(`div`);
contenedor.appendChild(tablero);
tablero.className="tablero";
tablero.appendChild(cargarCartas());

let footer = document.createElement(`div`);
contenedor.appendChild(footer);
footer.className="footer";

DOM.appendChild(contenedor);

let todaslascartasdelDOM=document.querySelectorAll('.carta');
todaslascartasdelDOM.forEach(cadaCarta=>{

cadaCarta.addEventListener("click",()=>{
    cadaCarta.classList.add("marcado");
});

});

