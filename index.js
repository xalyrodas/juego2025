import { header1 } from "./componentes/header/header.js";
import { cargarCartas } from "./componentes/tablero/tablero.js";
import { footer1 } from "./componentes/footer/footer.js";
import { progreso1 } from "./componentes/progreso/progreso.js";

function cargarDOM() {
    let contenedor = document.createElement(`div`);
    contenedor.className = "contenedor";

    let header = document.createElement(`div`);
    contenedor.appendChild(header);
    header.className = "header";
    header.appendChild(header1());

    let progreso = document.createElement(`div`);
    contenedor.appendChild(progreso);
    progreso.className = "progreso";
    progreso.appendChild(progreso1());

    let tablero = document.createElement(`div`);
    contenedor.appendChild(tablero);
    tablero.className = "tablero";
    tablero.appendChild(cargarCartas());

    let footer = document.createElement(`div`);
    contenedor.appendChild(footer);
    footer.className = "footer";
    footer.appendChild(footer1());


    let todaslascartasdelDOM = document.querySelectorAll('.carta');
    todaslascartasdelDOM.forEach(cadaCarta => {
        cadaCarta.addEventListener("click", () => {
            cadaCarta.classList.add("marcado");
        });
    });
    return contenedor
}

let DOM = document.querySelector("#root");
DOM.appendChild(cargarDOM());



// Exporta la función al final del archivo
export { cargarDOM };