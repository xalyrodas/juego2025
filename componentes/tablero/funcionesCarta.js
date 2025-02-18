

let cartasSeleccionadas = []; // Array para almacenar las cartas seleccionadas
let bloqueado = false; // Variable para evitar que se seleccionen más de dos cartas a la vez

// Función para girar la carta
export function girarCarta(div, contenido) {
    if (!bloqueado && !div.classList.contains('girando')) {
        div.classList.add('girando');
        cartasSeleccionadas.push({ div, contenido });

        if (cartasSeleccionadas.length === 2) {
            bloqueado = true;
            compararCartas();
        }
    }
}

// Función para comparar las cartas seleccionadas
export function compararCartas() {
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