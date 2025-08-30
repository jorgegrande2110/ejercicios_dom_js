2.1 Insertar dinámicamente un div vacío en el body:

const div1 = document.createElement("div");
document.body.appendChild(div1);

2.2 Insertar un div que contenga una p:

const div2 = document.createElement("div");
const p2 = document.createElement("p");
div2.appendChild(p2);
document.body.appendChild(div2);

2.3 Insertar un div que contenga 6 p usando un loop:

const div3 = document.createElement("div");
for(let i=0; i<6; i++) {
  const p = document.createElement("p");
  div3.appendChild(p);
}
document.body.appendChild(div3);

2.4 Insertar una p con el texto 'Soy dinámico!':

const p4 = document.createElement("p");
p4.textContent = "Soy dinámico!";
document.body.appendChild(p4);

2.5 Insertar texto en el h2 con clase .fn-insert-here:

const h2 = document.querySelector("h2.fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

2.6 Crear una lista ul>li con textos de un array:

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");
for (const app of apps) {
  const li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
}
document.body.appendChild(ul);

2.7 Eliminar todos los nodos con clase .fn-remove-me:

const nodesToRemove = document.querySelectorAll(".fn-remove-me");
nodesToRemove.forEach(node => node.remove());

2.8 Insertar una p con texto 'Voy en medio!' entre dos divs:

const p8 = document.createElement("p");
p8.textContent = "Voy en medio!";
const divs = document.querySelectorAll("div");
if(divs.length >= 2) {
  divs[0].after(p8);
}

2.9 Insertar p con texto 'Voy dentro!' dentro de todos los divs con clase .fn-insert-here:

const divsInsertHere = document.querySelectorAll("div.fn-insert-here");
for (const div of divsInsertHere) {
  const p = document.createElement("p");
  p.textContent = "Voy dentro!";
  div.appendChild(p);
}
