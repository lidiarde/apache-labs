let nome = "";
let idade = "";
let linguagem = "";
const mensagem = document.querySelector("#respostas");

function armazenar() {
     nome = document.getElementById("nome").value;
     idade = document.getElementById("idade").value;
     linguagem = document.getElementById("linguagem").value;
}

function enviarDados(){
    mensagem.innerHTML = `<h2> Ola ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`;
}

function novaPergunta(){
    setTimeout(() => {
        mensagem.innerHTML = `<h2>Você gosta de estudar <strong>${linguagem}</strong>? Pressione o número 1 para SIM ou 2 para NÃO.</h2>`
    }, 3500);
}

function novaResposta(){
    window.addEventListener("keydown", event => {
        if (event.key == "1"){
            mensagem.innerHTML = `<h2>Legal! Continue estudando e você terá muito sucesso.</h2>`
        }
        if (event.key == "2"){
            mensagem.innerHTML = `<h2>Ahh que pena!... Já tentou aprender outras linguagens?</h2>`
        }
   })
}

function enviarMensagem() {
    armazenar();
    enviarDados();
    novaPergunta();
    novaResposta();
}



