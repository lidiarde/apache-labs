let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

let [divUm, divDois, divTres] = [document.getElementById("um"), document.getElementById("dois"), document.getElementById("tres")]

function testaUm(){
    let primeiroTeste
    if (numeroUm == stringUm) {
        primeiroTeste = "As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes"
    } else {
        primeiroTeste = "As variáveis numeroUm e stringUm não tem o mesmo valor"
    }
    divUm.innerHTML = primeiroTeste
}

function testaDois(){
    let segundoTeste
    if (numeroTrinta === stringTrinta) {
        segundoTeste = "As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo"
    } else {
        segundoTeste = "As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo"
    }
    divDois.innerHTML = segundoTeste
}

function testaTres(){
    let terceiroTeste
    if (numeroDez == stringDez) {
        terceiroTeste = "As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes"
    } else {
        terceiroTeste = "As variáveis numeroDez e stringDez não tem o mesmo valor"
    }
    divTres.innerHTML = terceiroTeste
}


function verificar(){
    testaUm()
    testaDois()
    testaTres()    
}