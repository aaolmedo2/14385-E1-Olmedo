class ContenedorComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          border: 1px solid #ccc;
          padding: 10px;
          width: 300px;
        }

        .encabezado {
          background-color: skyblue;
          padding: 8px;
          font-weight: bold;
        }

        .cuerpo {
          padding: 8px;
        }
      </style>
      <div class="encabezado">
        <slot name="encabezado">Encabezado Predeterminado</slot>
      </div>
      <div class="cuerpo">
        <slot name="cuerpo">Cuerpo Predeterminado</slot>
      </div>
    `;
  }
}

customElements.define('contenedor-component', ContenedorComponent);
