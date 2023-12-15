
class EmisorComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Creamos el botón
        const button = document.createElement("button");
        button.textContent = "Enviar mensaje";
        button.addEventListener("click", this.enviarMensaje);

        // Agregamos el botón al Shadow DOM
        this.shadowRoot.appendChild(button);
    }

    enviarMensaje() {
        // Emitimos el evento personalizado
        this.dispatchEvent(new CustomEvent("mensaje", { detail: "Hola, Mundoooo!" }));
    }
}

customElements.define("emisor-component", EmisorComponent);

