const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const logSigMenu = document.querySelector('.login-sign-menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    logSigMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    logSigMenu.classList.remove('active');
}))

// Função que troca a cor de fundo de acordo com o desconto.
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