// saludo-component.js
class SaludoComponent extends HTMLElement {
    constructor() {
        super();

        // Crear un Shadow DOM
        this.attachShadow({ mode: 'open' });

        // Contenido del saludo
        const saludo = document.createElement('p');
        saludo.textContent = '¡Hola, Mundo!';

        // Agregar el contenido al Shadow DOM
        this.shadowRoot.appendChild(saludo);
    }
}

// Definir el elemento personalizado
customElements.define('saludo-component', SaludoComponent);
