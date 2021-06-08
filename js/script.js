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
  
}// textContent é usado quando se quer alterar o conteúdo de um elemento do DOM.
const showResult = () => {
  result.textContent = `${parseInt(input.value, 2)}`; //conversão de binário para decimal
  waitText.textContent = "Valor convertido para Decimal:";//texto que será exibido.
  waitText.style.color = "green"; //cor do texto que será exibido.
  waitText.style.animationDuration = "0s";// valor 0 = sem animação;

}

const showWaiting = () => {
  waitText.textContent = "Esperando por um número Binário..."; //texto exibido caso usuário não escreva nada.
  waitText.style.color = "white"; //cor do texto
  result.textContent = ""; //caso usuário não escreva nada, campo de resultado permanece vazio ""

}

const showError = () => {  
  waitText.textContent ="Você inseriu um dígito não binário (insira apenas 0 ou 1)";
  waitText.style.color = "red";
  result.textContent = "";
  waitText.style.animationDuration = "0s";

}