class ReceptorComponent extends HTMLElement {
    connectedCallback() {
        // Escuchar el evento personalizado 'mensajeEnviado'
        document.addEventListener('mensajeEnviado', (evento) => {
            // Mostrar el mensaje recibido en un alert
            alert(`Mensaje recibido: ${evento.detail.mensaje}`);
        });
    }
}

// Registrar el componente receptor
customElements.define('receptor-component', ReceptorComponent);
