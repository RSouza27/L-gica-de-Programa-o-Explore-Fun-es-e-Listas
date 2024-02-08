//Exercicio 2
let h1 = document.querySelector('h1');
h1.innerHTML = 'Hora do Desafio!';

//Exercicio 3
function verificarConsole() {
    console.log('O botão Console foi clicado');
}

//Exercicio 4
function verificarAlerta() {
    alert('Eu amo JS');
}

//Exercicio 5
function verificarPrompt() {
    let cidade = prompt('Digite o Nome de uma Cidade do Brasil:');

    alert(`Estive em ${cidade} e lembrei de você`);
}

//Exercicio 6
function verificarSoma() {
    let valor1 = parseInt(prompt('Digite o primeiro valor:'));
    let valor2 = parseInt(prompt('Digite o segundo valor:'));
    let resultado = valor1 + valor2;

    alert(`${valor1} + ${valor2} = ${resultado}`);
}
