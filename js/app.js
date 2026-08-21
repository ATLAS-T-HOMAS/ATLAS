// ==========================
// ATLAS v0.2
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("question");
    const button = document.getElementById("searchButton");

    if (button) {
        button.addEventListener("click", buscar);
    }

    if (input) {
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                buscar();
            }
        });
    }

});

function buscar() {

    const pregunta = document.getElementById("question").value.trim();

    if (!pregunta) {
        alert("Escribe una pregunta.");
        return;
    }

    mostrarResultados(pregunta);

}

function mostrarResultados(pregunta) {

    document.body.innerHTML = `

    <div class="dashboard">

        <header class="topbar">

            <h1>🌍 ATLAS</h1>

            <button class="volver" onclick="location.reload()">
                ← Nueva pregunta
            </button>

        </header>

        <section class="heroQuestion">

            <h2>${pregunta}</h2>

            <p>
                Hemos encontrado un punto de partida para comprender este tema.
            </p>

        </section>

        <section class="grid">

            ${crearCard(
                "🧠 Comprender",
                "Artículos, libros e investigaciones para entender el problema."
            )}

            ${crearCard(
                "🚀 Proyectos",
                "Organizaciones e iniciativas que ya trabajan en este reto."
            )}

            ${crearCard(
                "👥 Personas",
                "Investigadores, referentes y líderes relacionados."
            )}

            ${crearCard(
                "🤝 Participar",
                "Voluntariado, empleo, donaciones y formas de colaborar."
            )}

        </section>

        <section class="mapa">

            <h2>Mapa de respuestas</h2>

            <div class="nodos">

                <div class="nodo" onclick="abrirNodo('Madrid')">
                    📍 Madrid
                </div>

                <div class="nodo" onclick="abrirNodo('Brasil')">
                    🌳 Brasil
                </div>

                <div class="nodo" onclick="abrirNodo('Kenia')">
                    💧 Kenia
                </div>

                <div class="nodo" onclick="abrirNodo('Palestina')">
                    🕊️ Palestina
                </div>

                <div class="nodo" onclick="abrirNodo('Tokio')">
                    🏙️ Tokio
                </div>

            </div>

        </section>

    </div>

    `;

    insertarEstilosDashboard();

}

function crearCard(titulo, texto) {

    return `
        <div class="cardAtlas">

            <h3>${titulo}</h3>

            <p>${texto}</p>

        </div>
    `;

}

function abrirNodo(nombre){

    alert(
`🌍 ${nombre}

En la siguiente versión aparecerán:

• Proyectos
• Personas
• Libros
• Comunidades
• Eventos
• Cómo participar`
    );

}

function insertarEstilosDashboard(){

    if(document.getElementById("atlas-dashboard-style")) return;

    const style=document.createElement("style");

    style.id="atlas-dashboard-style";

    style.innerHTML=`

    .dashboard{

        background:#07111F;

        min-height:100vh;

        color:white;

        padding:50px;

        font-family:Inter,sans-serif;

    }

    .topbar{

        display:flex;

        justify-content:space-between;

        align-items:center;

        margin-bottom:60px;

    }

    .volver{

        background:#5D7CFA;

        border:none;

        color:white;

        padding:14px 22px;

        border-radius:40px;

        cursor:pointer;

        font-size:16px;

    }

    .heroQuestion h2{

        font-size:46px;

        margin-bottom:15px;

    }

    .heroQuestion p{

        color:#B8C5D6;

        margin-bottom:50px;

        font-size:20px;

    }

    .grid{

        display:grid;

        grid-template-columns:repeat(auto-fit,minmax(260px,1fr));

        gap:20px;

        margin-bottom:60px;

    }

    .cardAtlas{

        background:#102035;

        padding:25px;

        border-radius:18px;

        transition:.3s;

    }

    .cardAtlas:hover{

        transform:translateY(-5px);

        background:#162B46;

    }

    .mapa h2{

        margin-bottom:30px;

    }

    .nodos{

        display:flex;

        flex-wrap:wrap;

        gap:20px;

    }

    .nodo{

        background:#1A2D48;

        padding:18px 26px;

        border-radius:40px;

        cursor:pointer;

        transition:.3s;

    }

    .nodo:hover{

        background:#5D7CFA;

        transform:scale(1.05);

    }

    `;

    document.head.appendChild(style);

}
