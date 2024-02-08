alert('Boas Vindas ao Jogo do Número Secreto!');

let numeroMaximo  = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//Enquanto chute não for igual ao numero secreto
while (chute != numeroSecreto){
    chute = prompt(`Digite um Número entre 1 e ${numeroMaximo}: `);
    //Se chute for igual ao numero secreto 
    if (numeroSecreto == chute) {
        break;
    }else {
        if (chute > numeroSecreto){
            alert(`O Numero Secreto é Menor que ${chute}`);
        }else {
            alert(`O Número Secreto é Maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
alert(`Parabens, Você Acertou o Número Secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


/*if(tentativas > 1){
    alert(`Parabens, Você Acertou o Número Secreto ${numeroSecreto} com ${tentativas} Tentativas`);
}else {
    alert(`Parabens, Você Acertou o Número Secreto ${numeroSecreto} com ${tentativas} Tentativa`);
}*/