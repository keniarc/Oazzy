document.addEventListener('DOMContentLoaded', () => {
    const tablero = document.querySelector('.tablero-memoria');
    const cartasArray = ['🕊️', '🤝', '🌍', '❤️', '🔆', '🌈', '🌱', '✨', 'Paz', 'Unidad', 'Amor', 'Justicia', '🕊️', '🤝', '🌍', '❤️', '🔆', '🌈', '🌱', '✨', 'Paz', 'Unidad', 'Amor', 'Justicia'];
    let cartasGiradas = [];
    let bloqueoTablero = false;

    function barajarCartas(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            ([array[i], array[j]] = [array[j], array[i]]);
        }
        return array;
    }

    function crearTablero() {
        const cartasBarajadas = barajarCartas(cartasArray);
        cartasBarajadas.forEach(item => {
            const cartaContainer = document.createElement('div');
            cartaContainer.classList.add('carta-container');
            
            const carta = document.createElement('div');
            carta.classList.add('carta');
            carta.dataset.item = item;
            carta.addEventListener('click', girarCarta);
            
            const cartaFrente = document.createElement('div');
            cartaFrente.classList.add('carta-frente');
            
            const cartaAtras = document.createElement('div');
            cartaAtras.classList.add('carta-atras');
            cartaAtras.textContent = item;

            carta.appendChild(cartaFrente);
            carta.appendChild(cartaAtras);
            cartaContainer.appendChild(carta);
            tablero.appendChild(cartaContainer);
        });
    }

    function girarCarta(event) {
        const carta = event.currentTarget;
        if (bloqueoTablero || carta === cartasGiradas[0] || carta.classList.contains('girada')) return;

        carta.classList.add('girada');
        cartasGiradas.push(carta);

        if (cartasGiradas.length === 2) {
            bloqueoTablero = true;
            setTimeout(comprobarCoincidencia, 1000);
        }
    }

    function comprobarCoincidencia() {
        const [carta1, carta2] = cartasGiradas;
        if (carta1.dataset.item === carta2.dataset.item) {
            cartasEmparejadas();
        } else {
            resetearCartas();
        }
        cartasGiradas = [];
        bloqueoTablero = false;
    }

    function cartasEmparejadas() {
        cartasGiradas.forEach(carta => {
            carta.removeEventListener('click', girarCarta);
        });
    }

    function resetearCartas() {
        cartasGiradas.forEach(carta => {
            carta.classList.remove('girada');
        });
    }

    crearTablero();
});