class EmisorComponent extends HTMLElement {
    connectedCallback() {
        // Crear un botón en el componente emisor
        this.innerHTML = '<button id="emisorButton">Enviar Mensaje</button>';

        // Agregar un evento al botón para emitir un mensaje
        this.querySelector('#emisorButton').addEventListener('click', () => {
            // Crear un evento personalizado llamado 'mensajeEnviado'
            const evento = new CustomEvent('mensajeEnviado', {
                detail: { mensaje: '¡Hola desde el emisor!' } // Puedes personalizar el mensaje aquí
            });

            // Emitir el evento al documento
            document.dispatchEvent(evento);
        });
    }
}

// Registrar el componente emisor
customElements.define('emisor-component', EmisorComponent);
