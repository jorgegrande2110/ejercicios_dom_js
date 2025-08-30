1.1 Añadir un botón con id "btnToClick" y un evento "click" que imprima el evento en consola:

<button id="btnToClick">Click me</button>

<script>
  const btn = document.getElementById("btnToClick");
  btn.addEventListener("click", (event) => {
    console.log(event);
  });
</script>

1.2 Añadir evento "focus" al input con clase ".focus" que imprima el valor del input:

const inputFocus = document.querySelector("input.focus");
inputFocus.addEventListener("focus", (event) => {
  console.log(event.target.value);
});

1.3 Añadir evento "input" al input con clase ".value" que imprima el valor mientras se escribe:

const inputValue = document.querySelector("input.value");
inputValue.addEventListener("input", (event) => {
  console.log(event.target.value);
});
