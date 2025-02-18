// itemCarta.js

// Función para crear una carta
export function item(contenido, girarCarta) {
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
        girarCarta(div, contenido);
    });

    return div;
}