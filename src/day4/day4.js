const numComp = Math.floor(Math.random() * (10 - 0 + 1) + 0);
alert("JOGO DE ADVINHA! PRESSIONE ENTER PARA INICIAR!");
let numjog = "";
numjog = prompt("Qual número você quer chutar entre 0 a 10?");
let cont = 0;
let tent = 2;

if (numjog == numComp){
    alert("Parabens você acertou!!")
}
else if (numjog != numComp){      
    while (cont < 2){
        if (numjog > 10){
            alert("Número Ínvalido!Digite apenas números entre 0 a 10!")
        } 
        alert(`Que pena você errou mas ainda tem ${tent} tentativas`);
        numjog = prompt("Qual número você quer chutar entre 0 a 10?"); 
        if (numjog == numComp){
            alert("Parabens você acertou!!")
            break
        }
        tent -= 1;
        cont += 1; 
}
if (cont == 2){
    alert(`Que pena você não conseguiu descobrir o numero era ${numComp} mas jogue novamente,Boa sorte!!`)
}
}