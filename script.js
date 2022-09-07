var botao = document.getElementById("botao");
var h1 = document.getElementById("h1");
var sum = 0;
let h2 = h1.value;

function soma() {
  sum++;
  h1.innerHTML = sum;
}

function reset() {
  sum = "";
  h1.innerHTML = sum;
}
