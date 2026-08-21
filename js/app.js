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

  document.querySelectorAll(".node").forEach(nodo=>{

    nodo.addEventListener("click",()=>{

      abrirNodo(
        nodo.dataset.node
      );

    });

  });

  document.querySelector(".close-panel")
    .addEventListener("click",cerrarPanel);

});

function buscar(){

  const texto =
  document
  .getElementById("question")
  .value
  .toLowerCase()
  .trim();

  if(texto===""){

    alert("Escribe una pregunta.");

    return;

  }

  apagarNodos();

  let encontrados=0;

  Object.keys(NODOS).forEach(nombre=>{

    const datos=NODOS[nombre];

    const contenido=(

      nombre+" "+
      datos.problema+" "+
      datos.descripcion+" "+
      datos.proyecto

    ).toLowerCase();

    if(contenido.includes(texto)){

      encontrados++;

      encenderNodo(nombre);

    }

  });

  if(encontrados===1){

    Object.keys(NODOS).forEach(nombre=>{

      const datos=NODOS[nombre];

      const contenido=(

      nombre+" "+
      datos.problema+" "+
      datos.descripcion+" "+
      datos.proyecto

      ).toLowerCase();

      if(contenido.includes(texto)){

        abrirNodo(nombre);

      }

    });

  }

  if(encontrados===0){

    alert(
      "Todavía no tenemos resultados para esa búsqueda.\n\nPronto ATLAS utilizará IA para encontrar conexiones."
    );

    encenderTodos();

  }

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
