import { todas_las_cartas } from "./data.js";

let cartasSeleccionadas = []; // Array para almacenar las cartas seleccionadas
let bloqueado = false; // Variable para evitar que se seleccionen más de dos cartas a la vez

function item(contenido) {
    let div = document.createElement('div');
    div.className = "carta";

    // Cara frontal (vacía o con un diseño inicial)
    let caraFrontal = document.createElement('div');
    caraFrontal.className = "cara frontal";
    caraFrontal.textContent = "🃏"; // Puedes cambiar esto por un diseño inicial

    // Cara trasera (con el emoji o contenido)
    let caraTrasera = document.createElement('div');
    caraTrasera.className = "cara trasera";
    caraTrasera.textContent = contenido;

    // Agrega ambas caras a la carta
    div.appendChild(caraFrontal);
    div.appendChild(caraTrasera);

    // Agrega un evento de clic para girar la carta
    div.addEventListener('click', () => {
        if (!bloqueado && !div.classList.contains('girando')) {
            div.classList.add('girando');
            cartasSeleccionadas.push({ div, contenido });

            if (cartasSeleccionadas.length === 2) {
                bloqueado = true;
                compararCartas();
            }
        }
    });

    return div;
}

function compararCartas() {
    const [carta1, carta2] = cartasSeleccionadas;

    if (carta1.contenido === carta2.contenido) {
        // Si las cartas son iguales, se quedan giradas
        cartasSeleccionadas = [];
        bloqueado = false;
    } else {
        // Si las cartas no son iguales, se vuelven a dar la vuelta después de un tiempo
        setTimeout(() => {
            carta1.div.classList.remove('girando');
            carta2.div.classList.remove('girando');
            cartasSeleccionadas = [];
            bloqueado = false;
        }, 1000); // 1 segundo de espera antes de voltear las cartas
    }
}

function cargarCartas() {
    let div = document.createElement('div');
    div.className = "div-tablero";

    todas_las_cartas.forEach((letra) => {
        div.appendChild(item(letra));
    });

    return div;
}

export { cargarCartas };