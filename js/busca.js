
/* BARRA DE BUSCA */

const marcaSelect = document.getElementById('marca');
const modeloSelect = document.getElementById('modelo');
const anoSelect = document.getElementById('ano');
const versaoSelect = document.getElementById('versao');


const combinaçoes = {
    Ford: {
      EcoSport: {
        2000 : 'a', 2001: 'b', 2002: 'd'
      },
      KA: {
        2005: 'c'
      }
    }
}
  

marcaSelect.addEventListener('change', function() {
  const marcaSelecionada = marcaSelect.value;
  console.log(marcaSelecionada); // Exibe o valor da marca selecionada no console

  const modelos = combinaçoes[marcaSelecionada];
  modeloSelect.innerHTML = '<option value="">Selecione o Modelo</option>';
  for (const modelo in modelos) {
    const option = document.createElement('option');
    option.value = modelo;
    option.textContent = modelo;
    modeloSelect.appendChild(option);
  }

modeloSelect.addEventListener('change', function() {
  const modeloSelecionado = modeloSelect.value;
  const anos = modelos[modeloSelecionado];
  console.log(anos);

  anoSelect.innerHTML = '<option value="">Ano Min</option>';

  for (const ano of Object.keys(anos)) {
    const option = document.createElement('option');
    option.value = ano;
    option.textContent = ano;
    anoSelect.appendChild(option);
  }


anoSelect.addEventListener('change', function() {
    const anoSelecionado = anoSelect.value;
    
    const versoes = anos[anoSelecionado]
    console.log(versoes);

    versaoSelect.innerHTML = '<option value="">Selecione a Versão</option>';

    for (const versao of versoes) {
        const option = document.createElement('option');
        option.value = versao;
        option.textContent = versao;
        versaoSelect.appendChild(option);
      }
    });
});
});