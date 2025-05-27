var area;
var aprender;
var escolha;
var tecnologias;

const nome = prompt("Qual o seu nome?");
const msg = `Olá ${nome}, vamos começar nossa pesquisa!?`;
alert(msg);

do {
    area = prompt("Qual área na programação gostaria de seguir?\n1. Front-End\n2. Back-End");
} while ((area === '' || area === null) || area != 1 && area != 2);

if(area==1){
    do {
        var aprender = prompt("Legal, Front-End! Qual tecnologia gostaria de aprender?\n1. React\n2. Vue");
    } while ((aprender === '' || aprender === null) || aprender != 1 && aprender != 2);
    if (aprender == 1){
        aprender = "React";
    }else {
        aprender = "Vue";
    }
} else{
    do {
        var aprender = prompt("Certo, você escolheu Back-End, qual tecnologia gostaria de aprender?\n1. C#\n2. Java");
    } while ((aprender === '' || aprender === null) || aprender != 1 && aprender != 2);
    if (aprender == 1){
        aprender = "C#";
    }else {
        aprender = "Java";
    }
}

do {
    escolha = prompt(`${nome} futuramente qual ramo gostaria de seguir?\n1. Especializando-se em ${aprender}\n2. Desenvolver-se para se tornar Fullstack.`);
} while ((escolha === '' || escolha === null) || escolha != 1 && escolha != 2);

if (escolha == 1){
    alert(`Muito bem, você está no caminho certo e já deu os primeiros passos para se tornar um especialista em ${aprender} , continue estudando e você chegará lá!`)
}else {
    alert(`Um desenvolvedor Fullstack precisa conhecer tudo que envolve a área de desenvolvimento, continue expandindo seus estudos e logo você conseguirá!`)
}

do{
    do{
        tecnologias = prompt(`Quais outras linguagens de programação você gostaria de se especializar ou de conhecer?`);
    } while (tecnologias === '' || tecnologias === null);
    alert(`Para entender ${tecnologias} devemos primeiro compreender ${tecnologias}.`);
}while(confirm("Tem mais alguma tecnologia que você gostaria de aprender?"));