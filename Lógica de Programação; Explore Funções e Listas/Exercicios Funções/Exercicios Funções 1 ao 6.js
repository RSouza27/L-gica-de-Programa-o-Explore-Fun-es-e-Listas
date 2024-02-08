//Exercicio 1
function olaMundo() {
    console.log('Olá, Mundo');
}

//Exercicio 2
function exibirOlaNome(nome) {
    console.log(`Olá ${nome}!`);
}

exibirOlaNome('Renan');

//Exercicio 3

let valor = prompt('Digite um numero:');
function numeroDobrado(dobro){
    console.log(`O dobro de ${valor} é ${dobro}`);
}

numeroDobrado(valor * 2);

//Exercicio 4

function calcularMedia (valor1, valor2, valor3){
    return (valor1 + valor2 + valor3) / 3;
}

let media = calcularMedia(10, 9, 9);
console.log(media);

//Exercicio 5
function maior(num1, num2){
    return num1 > num2 ? num1 : num2;
}

let numero = maior(8, 9);
console.log(numero);

//Exercicio 6

function multiplicacao(numeroMulti){
    return numeroMulti * numeroMulti;
}

let numero = multiplicacao(10);
console.log(numero);