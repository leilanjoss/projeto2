const selectQtdeAnuncios = document.getElementById('qtde-anuncios');
    selectQtdeAnuncios.addEventListener('change', filtrarCarros);

    // Função para filtrar os carros com base na quantidade selecionada
    function filtrarCarros() {
        // Obtém o valor selecionado
        const qtdeSelecionada = selectQtdeAnuncios.value;

        // Obtém todos os elementos com a classe "car"
        const carros = document.querySelectorAll('.car');

        // Oculta todos os carros
        carros.forEach(carro => {
            carro.style.display = 'none';
        });

        // Mostra apenas a quantidade selecionada de carros
        for (let i = 0; i < qtdeSelecionada; i++) {
            if (carros[i]) {
                carros[i].style.display = 'flex';
            }
        }
    }