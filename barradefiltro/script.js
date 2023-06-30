// document.addEventListener("DOMContentLoaded", function() {
let select = document.querySelector("#qtde-anuncios")
// O evento "change" é acionado quando um elemento HTML sofre uma alteração de valor e perde o foco
select.addEventListener("change", exibirAnuncios)

function exibirAnuncios() {
    let selectedValue = select.value // Obtém o valor da opção selecionada
    // Caso o valor selecionado seja igual a "5 anúncios por página", a função "exibirCincoAnuncios" será executada
    if (selectedValue === select.value) {
        console.log("funcionou")
        exibirCincoAnuncios() 
    }
    // Caso o valor selecionado seja igual a "10 anúncios por página", a função "exibirDezAnuncios" será executada
    else if (selectedValue === select.value) {
        exibirDezAnuncios()
    }
    // Caso o valor selecionado seja igual a "15 anúncios por página", a função "exibirQuinzeAnuncios" será executada
    else if (selectedValue === select.value) {
        exibirQuinzeAnuncios()
    }
}

function exibirCincoAnuncios() {
    let anuncios = document.querySelectorAll("#todos-carros") // Obtém todos os anúncios 
    for (let i = 0; i < anuncios.length; i++) {
        if (i < 5) {
            anuncios[i].style.display = "block"; // Exibe o anúncio
        } else {
            anuncios[i].style.display = "none"; // Oculta o anúncio
        }
    }
}

function exibirDezAnuncios() {
    let anuncios = document.querySelectorAll("#todos-carros")
    for (let i = 0; i < anuncios.length; i++) {
        if (i < 10) {
            anuncios[i].style.display = "block"; // Exibe o anúncio
        } else {
            anuncios[i].style.display = "none"; // Oculta o anúncio
        }
    }
}

function exibirQuinzeAnuncios() {
    let anuncios = document.querySelectorAll("#todos-carros")
    for (let i = 0; i < anuncios.length; i++) {
            anuncios[i].style.display = "block";
        }

}

exibirAnuncios()

// })