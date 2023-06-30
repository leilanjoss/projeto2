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

    // search // 

// Função para executar a busca
function executarBusca() {
  // Obtém o valor da marca, modelo e ano pesquisados
  const marcaPesquisada = document.getElementById('marca-select').value;
  const modeloPesquisado = document.getElementById('modelo-select').value;
  const anoPesquisado = document.getElementById('ano-select').value;
  
  // Obtém todas as divs de carro
  const carros = document.getElementsByClassName('car');
  let contadorCarros = 0;
  
  // Percorre todas as divs de carro
  for (let i = 0; i < carros.length; i++) {
    const carro = carros[i];
    
    // Obtém os elementos dentro da div do carro
    const marcaElemento = carro.querySelector('.marca');
    const modeloElemento = carro.querySelector('.modelo');
    const anoElemento = carro.querySelector('.info');
    
    // Obtém o texto dos elementos
    const marcaTexto = marcaElemento.textContent.trim();
    const modeloTexto = modeloElemento.textContent.trim();
    const anoTexto = anoElemento.textContent.trim();
    
    // Verifica se os critérios de pesquisa correspondem aos dados do carro
    const correspondeMarca = marcaPesquisada === '' || marcaTexto.includes(marcaPesquisada);
    const correspondeModelo = modeloPesquisado === '' || modeloTexto.includes(modeloPesquisado);
    const correspondeAno = anoPesquisado === '' || anoTexto.includes(anoPesquisado);
    
    // Exibe ou oculta a div do carro de acordo com a correspondência dos critérios
    if (correspondeMarca && correspondeModelo && correspondeAno) {
      carro.style.display = 'flex';
      contadorCarros++;
    } else {
      carro.style.display = 'none';
    }
  }
  
  // Atualiza o contador de veículos encontrados
  const veiculosEncontrados = document.getElementById('found');
  veiculosEncontrados.textContent = contadorCarros;
}

// Adiciona eventos de alteração aos elementos de seleção para executar a busca
document.getElementById('marca-select').addEventListener('change', executarBusca);
document.getElementById('modelo-select').addEventListener('change', executarBusca);
document.getElementById('ano-select').addEventListener('change', executarBusca);

