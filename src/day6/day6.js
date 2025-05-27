let frutas = ["laranja","maça","banana"];
let laticinios = ["queijo"];
let legumes = ["cenoura","couve"];
let doces = ["bolacha","bala"];


let inserirComida = "";
let opcaoCategoria = "";
let removerComida = "sim";
let remover = "";

let opcaoAdicionar = "sim";

while(opcaoAdicionar == "sim"){
    
    opcaoAdicionar = prompt("Você deseja adicionar uma comida na sua lista de compras?");

    if(opcaoAdicionar != "sim"){
        break;
    };

    inserirComida = prompt("qual comida você deseja inserir");
    //alert(`${inserirComida}`);
    opcaoCategoria = prompt("Em qual categoria você deseja inseri seu alimento.Digite 1 para frutas,2 para laticínios,3 para legumes ou 4 para doces.");

    
    if(opcaoCategoria == 1){
        frutas.push(inserirComida);
    }else if(opcaoCategoria == 2){
        laticinios.push(inserirComida);
    }else if(opcaoCategoria == 3){
        legumes.push(inserirComida);
    }else if(opcaoCategoria == 4){
        doces.push(inserirComida);
    }else{
    alert("categoria não definida");
    };

    alert(`Lista de Compras:\n Frutas: ${frutas} \n Laticínios: ${laticinios} \n Legumes: ${legumes} \n Doces: ${doces} `);
};

while(removerComida == "sim"){
    removerComida = prompt("Você deseja remover algum item da sua lista?");
    
    if(removerComida != "sim"){
        break;
    };

    remover = prompt(`Lista de Compras:\n Frutas: ${frutas} \n Laticínios: ${laticinios} \n Legumes: ${legumes} \n Doces: ${doces} `);

    //remover itens da lista
    if(frutas.indexOf(remover) != -1){
        frutas.splice(frutas.indexOf(remover),1);
        alert(`${remover} foi removido da lista`);
    }else if(laticinios.indexOf(remover) != -1){
        laticinios.splice(laticinios.indexOf(remover),1);
        alert(`${remover} foi removido da lista`);
    }else if(legumes.indexOf(remover) != -1){
        legumes.splice(legumes.indexOf(remover),1);
        alert(`${remover} foi removido da lista`);
    }else if(doces.indexOf(remover) != -1){
        doces.splice(doces.indexOf(remover),1);
        alert(`${remover} foi removido da lista`);
    }else{
    alert("essa comida não está na lista");
    }

    //verificar se a lista está vazia
    if(frutas.length === 0){
        alert("sua lista de frutas está vazia!");
    }
    if(laticinios.length === 0){
        alert("sua lista de laticínios está vazia!");
    }
    if(legumes.length === 0){
        alert("sua lista de legumes está vazia!");
    }
    if(doces.length === 0){
        alert("sua lista de doces está vazia!");
    };
    
    alert(`Lista de Compras:\n Frutas: ${frutas} \n Laticínios: ${laticinios} \n Legumes: ${legumes} \n Doces: ${doces} `);
};