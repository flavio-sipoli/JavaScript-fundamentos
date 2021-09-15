// podemos dizer que o objeto literal é uma representação da vida real

//estrutura de um objeto literal

let tenista = {
    nome: 'Roger',
    sobrenome: 'Federer'
}
console.log(tenista.nome)
console.log(tenista.sobrenome)

// uma propriedade pode armazenar qualquer tipo de dado, até mesmo uma função, neste caso falamos que ela é um método deste objeto

let tenista = {
    nome: 'Roger',
    sobrenome: 'Federer',
    cumprimentar: function () {
        return 'Ola meu nome é Roger Federer'
    }
}
console.log(tenista.nome)
console.log(tenista.sobrenome)
console.log(tenista.cumprimentar())

// construtores de objetos -- o nome das funções construtoras devem sempre começar com maiusculo

function carro(marca, modelo) {
    this.marca = marca
    this.modelo = modelo
}
let meuCarro = new Carro('Honda','Fit')
let seuCarro = new Carro ('Ford','Fusion')