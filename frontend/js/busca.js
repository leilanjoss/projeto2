
/* BARRA DE BUSCA */

const marcaSelect = document.getElementById('marca');
const modeloSelect = document.getElementById('modelo');
const anoSelect = document.getElementById('ano');
const versaoSelect = document.getElementById('versao');


const combinaçoes = {
  FORD: {
    'Fusion': {2017 : ['Fusion Titanium 2.0 Gtdi Ecobo. Awd Aut.'], 2018: ['Fusion Titanium 2.0 Gtdi Ecobo. Awd Aut.']},
    'Ka+': { 2021: ['Ka+ Sedan 1.0 Ticvt Flex 4p']}
  },
  CITROEN:  {
    'C3': {2011: ['C3 Excl./excl.solar./sonora 1.6 Flex Aut.']}
  },

  RENAULT: {
    'Logan': {2015: ['Logan Dyna. Easyr Hi-flex 1.6 8v Aut.'], 2016: ['Logan Dyna. Easyr Hi-flex 1.6 8v Aut.']}
  },

  FIAT:{
    'Mobi': {2020: ['Mobi Like 1.0 Fire Flex 5p.'], 2021: ['Mobi Like 1.0 Fire Flex 5p.']},
    'Argo': {2018: ['Argo 1.0 6v Flex.'], 2019: ['Argo 1.0 6v Flex.']}
  },

  MITSUBISHI: {
    'Pajero': {2007:['Pajero Sport Hpe 3.5 4x4 200cv Aut.']}
  },

  NISSAN:{
    'Versa': {2018: ['Versa 1.0 12v Flexstart 4p Mec.'], 2019: ['Versa 1.0 12v Flexstart 4p Mec.']}
  },

  HYUNDAI:{
    'HB20X': {2014: ['Hb20x Premium 1.6 Flex 16v Aut.'], 2015: ['Hb20x Premium 1.6 Flex 16v Aut.']},
    'HB20': {2018: ['Hb20 Unique 1.0 Flex 12v Mec.'], 2019: ['Hb20 Unique 1.0 Flex 12v Mec.']}
  },

  VOLKSWAGEN:{
    'Fox': {2013:['Fox 1.0 Mi Total Flex 8v 5p']},
    'Gol': {2012: ['Gol (Novo)'], 2013: ['Gol (Novo)']}
  },

  HONDA: {
    'CR-V': {2009: ['CR-V LX 2.0 16v 2wd/2.0 Flexone Aut.']}
  },

  CHEVROLET:{
    'Joy': {2019: ['Joy Plus Black Ed.1.0 8v 4p Flex Mec.'], 2020: ['Joy Plus Black Ed.1.0 8v 4p Flex Mec.','Joy Hatch1.0 8v Flex 5p Mec.'], 2021: ['Joy Hatch1.0 8v Flex 5p Mec.']}
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

const estadoSelect = document.getElementById('estado');


