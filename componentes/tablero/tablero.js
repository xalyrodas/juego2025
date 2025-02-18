// tablero.js

import { todas_las_cartas } from "./data.js";
import { item } from "./itemCarta.js";
import { girarCarta } from "./funcionesCarta.js"; // Importa la función girarCarta

// Función para cargar las cartas en el tablero
export function cargarCartas() {
    let div = document.createElement('div');
    div.className = "div-tablero";

    todas_las_cartas.forEach((letra) => {
        div.appendChild(item(letra, girarCarta)); // Pasa la función girarCarta
    });

    return div;
}