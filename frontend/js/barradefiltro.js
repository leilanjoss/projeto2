// Acessa as opções de quantidade de anuncios 
const selectQtdeAnuncios = document.getElementById('qtde-anuncios'); 
// Adiciona um eventListener pra mudar quando a função filtrarCarros for chamada
selectQtdeAnuncios.addEventListener('change', filtrarCarros); 

// Função para filtrar os carros com base na quantidade selecionada
function filtrarCarros() {
    // Obtém o valor selecionado
    const qtdeSelecionada = selectQtdeAnuncios.value;
    // Acessa todos os elementos com a classe "car"
    const carros = document.querySelectorAll('.car');

    // Oculta todos os carros, acessando cada um deles e ocultando um por um
    carros.forEach(carro => { 
        carro.style.display = 'none';
    });

    // Mostra apenas a quantidade selecionada de carros, então sempre que o indice for menor que qtdeSelecionada, ele acrescenta mais um
    for (let i = 0; i < qtdeSelecionada; i++) {
        // Verifica se o carro existe no indice, e caso exista, mostra os carros em display "flex"
        if (carros[i]) {
            carros[i].style.display = 'flex';
       }
    }
}