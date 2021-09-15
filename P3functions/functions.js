// As funções no JavaScript nos permitem agrupar um ou vários blocos de código, que podemos reutilizar muitas vezes.

// estrutura basica

function somar(a, b) {
    return a + b
}

// executando funções

function fazerSorvete() {
    return 'sorvete'
}

console.log(fazerSorvete())

// armazenando resultados

function subtracao(numeroA, numeroB) {
    return numeroA - numeroB
}

let resultado = subtracao(10, 2)
console.log(resultado)

// outro exemplo de uso

function criarPessoas(nome, sobrenome) {
    let pessoa = {}
    pessoa.nome = nome
    pessoa.sobrenome = sobrenome
    return pessoa
}

let pessoa = criarPessoas('Flávio', 'Sipoli')
console.log(pessoa)

//outro exemplo

function saudacao(nome, sobrenome) {
    return 'Ola ' + nome + ' ' + sobrenome
}

console.log(saudacao('Flávio', 'Sipoli'))