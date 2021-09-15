// numéricos

let idade = 32
let altura = 1.80

// booleanos (verdadeiro ou falso)

let solteiro = true
let casado = false

// strings (devem sempre estar entre aspas duplas ou simples)

let nome = 'Flávio'
let sobrenome = 'Sipoli'

// arrays são listas separadas por virgula e dentro de colchetes, podem conter booleanos, string e numéricos dentro do mesmo array
// para acessar o indice de um array usamos a posição do elemento dentro de [], o indice começa sempre em 0

let comidas = ['Arroz','Feijão','Batata']
let dados = ['Flávio', 32, 1.80,true]

//exemplo de array dentro de outro array

let objetos = ['Caneta','Lapis', ['pc,notebook,mouse']]
console.log(objetos)

// objeto 

let pessoa = {
    nome: 'Flávio',
    sobrenome: 'Sipoli',
    idade: 32,
    solteiro: true
}

console.table(pessoa)
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa.idade)
console.log(pessoa.solteiro)