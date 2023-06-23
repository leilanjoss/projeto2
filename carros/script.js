// function corFipe() {
//     let desconto = parseInt(document.getElementsByClassName("cor-desconto").value);
//     console.log(desconto);
//     if (desconto <= -15)
// }

// function corFipe() {
// const desconto = document.getElementsByClassName("cor-desconto");
// for (var i = 0; i < desconto.length; i++) {
//     var valor = desconto[i].value;
//     return parseInt(valor);
    
// }}
// console.log(corFipe());

function corFipe() {
const desconto = [...document.getElementsByClassName('cor-desconto')];
let numerosDesconto = [];
for (let i = 0; i < desconto.length; i++) {
  let elemento = desconto[i];
  let textoDesconto = parseFloat(elemento.textContent);
  numerosDesconto.push(textoDesconto);
}
return numerosDesconto
}
console.log(corFipe());

