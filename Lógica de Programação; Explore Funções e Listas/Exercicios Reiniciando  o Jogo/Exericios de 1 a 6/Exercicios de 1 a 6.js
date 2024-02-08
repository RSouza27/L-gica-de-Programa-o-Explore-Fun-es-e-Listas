//Exercicio 1
function calculaIMC(altura, peso){
    let imc = peso / (altura * altura);
}

//Exercicio 2
function calcularFatorial(numero){
    if(numero == 0 || numero == 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= 1;
    }
    return fatorial 
}

let numero = 49.5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

//Exercicio 3
function converter(valor) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valor * cotacaoDolar;
    return valorEmReais.toFixed(2);
}

let valor = 50;
let valorEmReais = converter(valor);
console.log(`${valor} dólares equivalem a R$ ${valorEmReais}`);

//Exercicio 4
function calcularRetangulo(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`area da sala é: ${area}`);
    console.log(`perimetro da sala é: ${perimetro}`);
}

let altura = 4;
let largura = 6;
calcularRetangulo(altura, largura);


//Exercicio 5
function calcularCirculo(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;

    console.log(`A area do circula é ${area}`);
    console.log(`O perimetro do circulo é ${perimetro}`);
}

let raio = 5;
calcularCirculo(raio);

//Exercicio 6
function tabuada(numero) {
    for(let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`); 
    }
}

let numero = 5;
tabuada(numero);