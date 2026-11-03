const plants = [
{
 name:"Fresa", emoji:"🍓",
 desc:"Fruto dulce que crece bien en macetas o huertos.",
 plant:"Usa una maceta con buen drenaje. Coloca la planta o las semillas en un sustrato fértil y suelto. Si usas semillas, cúbrelas apenas con una capa fina de sustrato.",
 light:"6–8 horas de luz al día",
 water:"Mantén el sustrato ligeramente húmedo, evitando encharcamientos.",
 soil:"Suelto, fértil y con buen drenaje",
 growth:"Las plantas pueden producir frutos en varios meses, según la variedad y las condiciones.",
 tips:["Retira hojas secas y frutos dañados.","Evita mojar demasiado las hojas.","Cuando aparezcan frutos, protégelos del contacto directo con suelo húmedo."]
},
{
 name:"Manzanilla", emoji:"🌼",
 desc:"Planta aromática de pequeñas flores blancas y centro amarillo.",
 plant:"Siembra las semillas sobre la superficie del sustrato y presiona suavemente. Necesitan humedad y luz para germinar.",
 light:"4–6 horas de sol o mucha luz",
 water:"Riega cuando la superficie empiece a secarse; evita el exceso de agua.",
 soil:"Ligero y con buen drenaje",
 growth:"Suele germinar en alrededor de 1–2 semanas; la floración depende de las condiciones.",
 tips:["No entierres profundamente las semillas.","Corta las flores cuando estén bien abiertas para aprovecharlas.","Mantén buena ventilación."]
},
{
 name:"Hierba para gato", emoji:"🐱🌱",
 desc:"Brotes de cereales tiernos que muchos gatos disfrutan mordisquear.",
 plant:"Coloca semillas de hierba para gato en una bandeja o maceta con sustrato. Cubre ligeramente y mantén humedad constante.",
 light:"Luz brillante, preferiblemente indirecta o con sol suave",
 water:"Mantén la tierra húmeda, sin formar charcos.",
 soil:"Ligero y con buen drenaje",
 growth:"Los brotes suelen aparecer en pocos días y pueden estar listos para cortar en 1–2 semanas.",
 tips:["No uses fertilizantes ni productos químicos si la hierba será para mascotas.","Colócala donde el gato pueda acceder con seguridad.","Si se vuelve muy vieja o amarilla, reemplaza el cultivo."]
},
{
 name:"Clavel", emoji:"🌺",
 desc:"Flor ornamental conocida por sus colores y aroma.",
 plant:"Siembra las semillas en sustrato ligero, cubriéndolas con una capa muy fina. Trasplanta cuando las plántulas estén suficientemente fuertes.",
 light:"6 horas o más de luz",
 water:"Riega de forma moderada cuando el sustrato comience a secarse.",
 soil:"Fértil, ligero y con buen drenaje",
 growth:"La germinación puede tardar alrededor de 1–2 semanas; la floración varía según la variedad.",
 tips:["Evita el encharcamiento.","Retira flores marchitas para favorecer nuevas flores.","Proporciona circulación de aire alrededor de la planta."]
},
{
 name:"Caléndula", emoji:"🧡🌼",
 desc:"Flor resistente y colorida, ideal para comenzar a cultivar.",
 plant:"Haz un pequeño agujero, coloca la semilla y cúbrela con una capa fina de tierra. Riega suavemente.",
 light:"6 horas de sol o más",
 water:"Riega cuando la capa superior del suelo esté seca.",
 soil:"Fértil y bien drenado",
 growth:"Puede germinar aproximadamente en 1–2 semanas y florecer en pocas semanas más, dependiendo del clima.",
 tips:["Quita flores marchitas para prolongar la floración.","No mantengas el suelo constantemente empapado.","Puede crecer bien en macetas."]
},
{
 name:"Rabanito", emoji:"🌱",
 desc:"Hortaliza de crecimiento rápido cuya raíz es la parte comestible.",
 plant:"Siembra directamente en el lugar donde crecerá. Coloca las semillas a poca profundidad y deja espacio entre plantas.",
 light:"6 horas o más de luz",
 water:"Riega de manera regular para mantener humedad uniforme.",
 soil:"Suelto, profundo y sin piedras",
 growth:"Muchos rabanitos están listos para cosechar aproximadamente en 3–6 semanas, según la variedad.",
 tips:["No dejes que el suelo se seque demasiado.","Aclara las plántulas si están muy juntas.","Cosecha cuando la raíz tenga un tamaño adecuado; si pasa demasiado tiempo puede ponerse dura."]
},
{
 name:"Zanahoria", emoji:"🥕",
 desc:"Hortaliza de raíz que necesita un suelo suelto para desarrollarse.",
 plant:"Siembra directamente en el suelo o en una maceta profunda. Coloca las semillas a poca profundidad y evita compactar la tierra.",
 light:"6–8 horas de luz",
 water:"Mantén una humedad uniforme, especialmente durante la germinación.",
 soil:"Suelto, profundo, fértil y sin piedras",
 growth:"Dependiendo de la variedad, puede tardar aproximadamente 2–3 meses en estar lista.",
 tips:["No trasplantes las zanahorias si puedes evitarlo.","Elimina piedras y terrones antes de sembrar.","Cosecha cuando la parte superior de la raíz tenga el tamaño esperado."]
}
];

const grid = document.getElementById("plant-grid");
const modal = document.getElementById("modal");
const content = document.getElementById("modal-content");
const close = document.getElementById("close");

plants.forEach((p,i)=>{
 const card=document.createElement("article");
 card.className="card";
 card.innerHTML=`<div class="emoji">${p.emoji}</div><h3>${p.name}</h3><p>${p.desc}</p><span class="open">Ver cuidados →</span>`;
 card.addEventListener("click",()=>openPlant(i));
 grid.appendChild(card);
});

function openPlant(i){
 const p=plants[i];
 content.innerHTML=`
 <div class="detail">
   <div class="detail-icon">${p.emoji}</div>
   <h2>${p.name}</h2>
   <p>${p.desc}</p>
   <div class="info-grid">
    <div class="info"><strong>☀️ Luz</strong>${p.light}</div>
    <div class="info"><strong>💧 Riego</strong>${p.water}</div>
    <div class="info"><strong>🌱 Suelo</strong>${p.soil}</div>
    <div class="info"><strong>⏳ Crecimiento</strong>${p.growth}</div>
   </div>
   <h3>🌿 ¿Cómo plantarla?</h3>
   <p>${p.plant}</p>
   <h3>💚 Tips para cuidarla</h3>
   <ul>${p.tips.map(t=>`<li>${t}</li>`).join("")}</ul>
   <div class="tip"><strong>💡 Consejo:</strong> Observa la planta con frecuencia. Las hojas, el suelo y el crecimiento te ayudan a saber si necesita más o menos agua o luz.</div>
   <button class="back" onclick="closeModal()">← Volver a las plantas</button>
 </div>`;
 modal.classList.add("show");
 modal.setAttribute("aria-hidden","false");
 document.body.style.overflow="hidden";
}
function closeModal(){
 modal.classList.remove("show");
 modal.setAttribute("aria-hidden","true");
 document.body.style.overflow="";
}
close.addEventListener("click",closeModal);
modal.addEventListener("click",(e)=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",(e)=>{if(e.key==="Escape")closeModal()});
