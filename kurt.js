// kurt.js
const quotes = [
  "Practice makes perfect, but nobody's perfect, so why practice?",
  "I'd rather be hated for who I am than loved for who I am not.",
  "Wanting to be someone else is a waste of the person you are.",
  "I'm not like them, but I can pretend.",
  "Come as you are.",
  "The duty of youth is to challenge corruption."
];

const quoteEl = document.getElementById("kurt-quote");
const btn = document.getElementById("kurt-btn");

function setRandomQuote() {
  const i = Math.floor(Math.random() * quotes.length); /*saca numero aleatorio*/
  quoteEl.textContent = `"${quotes[i]}"`;  /*esto hace que cambie la frase*/
}

btn.addEventListener("click", setRandomQuote); /*al hacer click llama a la funcion*/

setRandomQuote(); /*pone una frase automáticamente al cargar la página*/
