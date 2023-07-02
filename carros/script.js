function corFipe() {
const descontos = document.querySelectorAll(".car .desconto");
descontos.forEach((desconto) => {
  let porcentagem = parseInt(desconto.textContent);

  if (porcentagem > -15) {
    desconto.style.backgroundColor = 'gray';
  }
  if (porcentagem <= -15 && porcentagem > -20) {
    desconto.style.backgroundColor = 'orange';
  }
  if (porcentagem <= -20) {
    desconto.style.backgroundColor = 'red';
  }
})};
