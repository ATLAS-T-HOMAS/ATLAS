// ==========================================
// ATLAS v1.0
// ==========================================

const NODOS = {
  Madrid: {
    problema: "Soledad",
    descripcion:
      "Madrid cuenta con numerosas iniciativas para combatir la soledad no deseada.",
    proyecto: "Grandes Amigos"
  },

  Brasil: {
    problema: "Deforestación",
    descripcion:
      "La Amazonía es uno de los mayores retos ambientales del planeta.",
    proyecto: "WWF Brasil"
  },

  Kenia: {
    problema: "Acceso al agua",
    descripcion:
      "Miles de proyectos trabajan para mejorar el acceso al agua potable.",
    proyecto: "Water.org"
  },

  Palestina: {
    problema: "Conflicto",
    descripcion:
      "Existen organizaciones dedicadas a la paz, la ayuda humanitaria y el diálogo.",
    proyecto: "Search for Common Ground"
  },

  Tokio: {
    problema: "Innovación",
    descripcion:
      "Tokio es uno de los grandes polos de innovación tecnológica.",
    proyecto: "Startup Ecosystem"
  },

  "Nueva York": {
    problema: "Educación",
    descripcion:
      "Universidades y fundaciones impulsan proyectos educativos globales.",
    proyecto: "UNICEF"
  },

  Chile: {
    problema: "Cambio climático",
    descripcion:
      "Chile desarrolla numerosos proyectos relacionados con energía y clima.",
    proyecto: "Fundación Chile"
  }
};

document.addEventListener("DOMContentLoaded", () => {

  const input = document.getElementById("question");
  const button = document.getElementById("searchButton");

  if(button){
    button.addEventListener("click", buscar);
  }

  if(input){
    input.addEventListener("keydown",(e)=>{

      if(e.key==="Enter"){
        buscar();
      }

    });
  }

  const svg = document.getElementById("worldMap");

svg.addEventListener("click", (e) => {

    const codigoISO = e.target.id;

    abrirPais(codigoISO);

});

  document.querySelector(".close-panel")
    .addEventListener("click",cerrarPanel);

});

async function buscar() {

    const pregunta = document
        .getElementById("question")
        .value
        .trim();

    if (!pregunta) {
        alert("Escribe una pregunta.");
        return;
    }

    try {

        const respuesta = await fetch("/api/search", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                pregunta
            })

        });

        const datos = await respuesta.json();

        mostrarResultadoIA(datos);

    } catch (error) {

        console.error(error);

        alert("No se ha podido conectar con ATLAS.");

    }

}
function mostrarResultadoIA(datos){

    apagarNodos();

    datos.paises.forEach(pais=>{

        encenderNodo(pais);

    });

    document.getElementById("panelTitle").innerHTML=
        "🌍 "+datos.tema;

    document.getElementById("panelDescription").innerHTML=`

        <strong>Resumen</strong>

        <br><br>

       ${datos.resumen}

<br><br>

<a
href="${datos.wikipedia}"
target="_blank"
style="
color:#6CC6FF;
text-decoration:none;
font-weight:bold;
">

📖 Abrir artículo de Wikipedia

</a>

    document
        .getElementById("panel")
        .classList
        .add("active");

}

function apagarNodos(){

  document.querySelectorAll(".node").forEach(n=>{

    n.style.opacity=".15";
    n.style.transform="scale(.8)";

  });

}

function encenderTodos(){

  document.querySelectorAll(".node").forEach(n=>{

    n.style.opacity="1";
    n.style.transform="scale(1)";

  });

}

function encenderNodo(nombre){

  const nodo=document.querySelector(

    `[data-node="${nombre}"]`

  );

  if(!nodo) return;

  nodo.style.opacity="1";
  nodo.style.transform="scale(1.7)";

}

function abrirNodo(nombre){

  const datos=NODOS[nombre];

  if(!datos) return;

  document
  .getElementById("panelTitle")
  .innerHTML="📍 "+nombre;

  document
  .getElementById("panelDescription")
  .innerHTML=

  `
  <strong>Problema principal</strong><br><br>

  ${datos.problema}
  <br><br>

  ${datos.descripcion}

  <br><br>

  <strong>Proyecto destacado</strong>

  <br><br>

  🚀 ${datos.proyecto}
  `;

  document
  .getElementById("panel")
  .classList
  .add("active");

}

function cerrarPanel(){

  document
  .getElementById("panel")
  .classList
  .remove("active");

}
const mapa = L.map("worldMap",{

    zoomControl:true,

    minZoom:2,

    worldCopyJump:true

}).setView([10,20],2);

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution:"© OpenStreetMap"
    }
).addTo(mapa);
