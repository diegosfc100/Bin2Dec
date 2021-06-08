const input = document.querySelector(".input"); // retornando elemento input
const waitText = document.querySelector(".waitText"); 
const result = document.querySelector(".result"); 
const regex = /^[0-1]+$/; // Regex aceitando sómente digitos 0 e 1.

input.addEventListener("input", (event) => {
  verifyInput();
});

input.addEventListener;

const verifyInput = () => {
  if (input.value.match(regex)) {
    showResult();
  } else if (input.value === "") {
    showWaiting();
  } else {
    showError();
  }