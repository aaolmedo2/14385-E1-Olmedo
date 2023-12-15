// Componente user-list
class UserListComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
          <style>
            /* Estilos del componente (opcional) */
            :host {
              display: block;
              border: 1px solid #ccc;
              padding: 10px;
              width: 300px;
            }

            ul {
              list-style-type: none;
              padding: 0;
            }

            li {
              margin-bottom: 8px;
            }
          </style>
          <ul id="userList"></ul>
        `;
    }

    connectedCallback() {
        this.fetchUserData();
    }

    async fetchUserData() {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const users = await response.json();
            this.renderUsers(users);
        } catch (error) {
            console.error("Error al obtener datos de la API:", error);
        }
    }

    renderUsers(users) {
        const userList = this.shadowRoot.getElementById("userList");
        userList.innerHTML = "";

        users.forEach((user) => {
            const li = document.createElement("li");
            li.textContent = user.name;
            userList.appendChild(li);
        });
    }
}

customElements.define("user-list-component", UserListComponent);