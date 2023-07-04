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
  const marcaPesquisada = document.getElementById('marca').value;
  const modeloPesquisado = document.getElementById('modelo').value;
  const anoPesquisado = document.getElementById('ano').value;
  const versaoPesquisada = document.getElementById('versao').value
  const estadoPesquisado = document.getElementById('estado').value;
  const kmMinPesquisado = parseInt(document.getElementById('KmMin').value);
  const kmMaxPesquisado = parseInt(document.getElementById('KmMax').value);
  const valorMinPesquisado = parseInt(document.getElementById('ValorMin').value);
  const valorMaxPesquisado = parseInt(document.getElementById('ValorMax').value);

  console.log(kmMaxPesquisado)
  console.log(kmMinPesquisado)

  
  // Obtém todas as divs de carro
  const carros = document.getElementsByClassName('car');
  let contadorCarros = 0;
  
  // Percorre todas as divs de carro
  for (let i = 0; i < carros.length; i++) {
    const carro = carros[i];
    
    // Obtém os elementos dentro da div do carro
    const marcaElemento = carro.querySelector('.marca');
    const modeloElemento = carro.querySelector('.modelo');
    const anoElemento = carro.querySelector('#anocar');
    const versaoElemento = carro.querySelector('.modelo');
    const localElemento = carro.querySelector('#localcar');
    const kmElemento = carro.querySelector('#quilom');
    const valorElemento = carro.querySelector('.preco');
    
    // Obtém o texto dos elementos
    const marcaTexto = marcaElemento.textContent.trim();
    const modeloTexto = modeloElemento.textContent.trim();
    const anoTexto = anoElemento.textContent.trim();
    const versaoTexto = versaoElemento.textContent.trim();
    const localTexto = localElemento.textContent.trim();
    const kmTexto = kmElemento.textContent.trim();
    const valorTexto = valorElemento.textContent.trim();

    const kmValor = parseInt(kmTexto);
    const valorLimpo = valorTexto.replace(/[^\d,]/g, ''); // Remove todos os caracteres não numéricos, exceto ","
    const valorSemMilhar = valorLimpo.replace('.', ''); // Remove o ponto de milhar
    const valorCarro = parseFloat(valorSemMilhar.replace(',', '.')); // Substitui a vírgula por ponto para representar o separador decimal
    console.log(valorCarro)

    // Verifica se os critérios de pesquisa correspondem aos dados do carro
    const correspondeMarca = marcaPesquisada === '' || marcaTexto.includes(marcaPesquisada);
    const correspondeModelo = modeloPesquisado === '' || modeloTexto.includes(modeloPesquisado.toUpperCase());
    const correspondeAno = anoPesquisado === '' || anoTexto.includes(anoPesquisado);
    const correspondeVersao = versaoPesquisada === '' || versaoTexto.includes(versaoPesquisada.toUpperCase());
    const correspondeLocal = estadoPesquisado === '' || localTexto.includes(estadoPesquisado);

    const correspondeKm = (isNaN(kmMinPesquisado) && isNaN(kmMaxPesquisado)) || (isNaN(kmMinPesquisado) && kmValor <= kmMaxPesquisado) || (kmMinPesquisado <= kmValor && kmValor <= kmMaxPesquisado) || (kmMinPesquisado <= kmValor && isNaN(kmMaxPesquisado));
    const correspondeValor = (isNaN(valorMinPesquisado) && isNaN(valorMaxPesquisado)) || (isNaN(valorMinPesquisado) && valorCarro <= valorMaxPesquisado) || (valorMinPesquisado <= valorCarro && valorCarro <= valorMaxPesquisado) || (valorMinPesquisado <= valorCarro && isNaN(valorMaxPesquisado));

    // Exibe ou oculta a div do carro de acordo com a correspondência dos critérios
    if (correspondeMarca && correspondeModelo && correspondeAno && correspondeVersao && correspondeLocal && correspondeKm && correspondeValor) {
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

// Adiciona eventos de clique no botao de busca
document.getElementById('buscar').addEventListener('click', executarBusca);



//LIMPAR BUSCA
function limparBusca() {
  // Define os valores padrão dos elementos de seleção
  document.getElementById('marca').value = '';
  document.getElementById('modelo').value = '';
  document.getElementById('ano').value = '';
  document.getElementById('versao').value = '';
  document.getElementById('estado').value = '';
  document.getElementById('KmMin').value = '';
  document.getElementById('KmMax').value = '';
  document.getElementById('ValorMin').value = '';
  document.getElementById('ValorMax').value = '';

  executarBusca()
}

// Adiciona evento de clique ao botao de limpar
document.getElementById('limpar').addEventListener('click', limparBusca);


// Botão Mais Dados
const botaoMaisDados = document.getElementById("botaoMaisDados");
const opcDados = document.getElementById("opcDados");

botaoMaisDados.addEventListener("click", function() {
  opcDados.classList.toggle("show");
  
  if (opcDados.classList.contains("show")) {
    botaoMaisDados.textContent = "-";
  } else {
    botaoMaisDados.textContent = "+";
  }
});

// Botão Mais Localização
const botaoMaisLoc = document.getElementById("botaoMaisLoc");
const opcLoc = document.getElementById("opcLoc");

botaoMaisLoc.addEventListener("click", function() {
  opcLoc.classList.toggle("show");
  
  if (opcLoc.classList.contains("show")) {
    botaoMaisLoc.textContent = "-";
  } else {
    botaoMaisLoc.textContent = "+";
  }
});

opcLoc.classList.remove('show');
botaoMaisLoc.textContent = '+';


// Botão Mais Opções Gerais
const botaoMaisOpGerais = document.getElementById("botaoMaisOpGerais");
const opcOpGerais = document.getElementById("opcOpGerais");

botaoMaisOpGerais.addEventListener("click", function() {
  opcOpGerais.classList.toggle("show");
  
  if (opcOpGerais.classList.contains("show")) {
    botaoMaisOpGerais.textContent = "-";
  } else {
    botaoMaisOpGerais.textContent = "+";
  }
});

opcOpGerais.classList.remove('show');
botaoMaisOpGerais.textContent = '+';

