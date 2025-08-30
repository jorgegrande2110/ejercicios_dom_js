1.1 Mostrar por consola el botón con la clase .showme:

const button = document.querySelector(".showme");
console.log(button);

1.2 Mostrar por consola el h1 con el id #pillado:

const h1 = document.querySelector("#pillado");
console.log(h1);

1.3 Mostrar por consola todos los <p>:

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

1.4 Mostrar por consola todos los elementos con clase .pokemon:

const pokemons = document.querySelectorAll(".pokemon");
console.log(pokemons);

1.5 Mostrar por consola todos los elementos con atributo data-function="testMe":

const testElements = document.querySelectorAll('[data-function="testMe"]');
console.log(testElements);

1.6 Mostrar por consola el tercer personaje con atributo data-function="testMe":

const thirdTestElement = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(thirdTestElement);
