1.1 Crear una lista ul > li con los países dinámicamente:

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul1 = document.createElement('ul');
for (const country of countries) {
  const li = document.createElement('li');
  li.textContent = country;
  ul1.appendChild(li);
}
document.body.appendChild(ul1);

1.2 Eliminar el elemento con clase .fn-remove-me:

const removeElement = document.querySelector('.fn-remove-me');
if (removeElement) {
  removeElement.remove();
}

1.3 Crear lista ul > li dentro del div con atributo data-function="printHere":

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const container = document.querySelector('div[data-function="printHere"]');
const ul2 = document.createElement('ul');
for (const car of cars) {
  const li = document.createElement('li');
  li.textContent = car;
  ul2.appendChild(li);
}
container.appendChild(ul2);

1.4 Crear divs con h4 y img para cada objeto:

const countriesData = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const country of countriesData) {
  const div = document.createElement('div');

  const h4 = document.createElement('h4');
  h4.textContent = country.title;

  const img = document.createElement('img');
  img.src = country.imgUrl;

  div.appendChild(h4);
  div.appendChild(img);

  document.body.appendChild(div);
}

1.5 Crear botón que elimina último div de los creados:

const buttonRemoveLast = document.createElement('button');
buttonRemoveLast.textContent = "Eliminar último div";
document.body.appendChild(buttonRemoveLast);

buttonRemoveLast.addEventListener('click', () => {
  const allDivs = document.querySelectorAll('body > div');
  if (allDivs.length > 0) {
    allDivs[allDivs.length - 1].remove();
  }
});

1.6 Crear un botón para cada div que al hacer clic elimine ese div:

const divsAll = document.querySelectorAll('body > div');
divsAll.forEach(div => {
  const btn = document.createElement('button');
  btn.textContent = "Eliminar este div";
  btn.addEventListener('click', () => div.remove());
  div.appendChild(btn);
});
