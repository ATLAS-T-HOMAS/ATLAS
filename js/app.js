function buscar(){

const pregunta=document.getElementById("question").value.trim();

if(pregunta===""){

alert("Escribe una pregunta.");

return;

}

document.body.innerHTML=`

<div style="

background:#07111F;

min-height:100vh;

padding:60px;

color:white;

font-family:Inter,sans-serif;

">

<h1 style="font-size:60px;">

🌍 ATLAS

</h1>

<h2 style="margin-top:30px;">

${pregunta}

</h2>

<p style="margin-top:15px;color:#a7b8cb;">

Este será el mapa de conocimiento para responder tu pregunta.

</p>

<br><br>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;">

<div style="background:#132238;padding:25px;border-radius:15px;">

📚 Comprender

</div>

<div style="background:#132238;padding:25px;border-radius:15px;">

🚀 Proyectos

</div>

<div style="background:#132238;padding:25px;border-radius:15px;">

👥 Personas

</div>

<div style="background:#132238;padding:25px;border-radius:15px;">

🤝 Participar

</div>

</div>

`;

}

document.addEventListener("DOMContentLoaded",()=>{

const boton=document.getElementById("searchButton");

const input=document.getElementById("question");

if(boton){

boton.addEventListener("click",buscar);

}

if(input){

input.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

buscar();

}

});

}

});
