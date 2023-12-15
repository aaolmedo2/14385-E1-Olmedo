
class ReceptorComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Escuchamos el evento personalizado
        this.addEventListener("mensaje", this.mostrarMensaje);
    }

    mostrarMensaje(event) {
        // Mostramos el mensaje recibido
        document.getElementById("mensaje").textContent = event.detail;
    }
}

customElements.define("receptor-component", ReceptorComponent);

