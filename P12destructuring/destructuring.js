
//destructuring ou desestruturação nos permite extrair dados de um array ou de um objeto de forma mais simples e facil de implementar

//desestruturando arrays. A desestruturação não altera o array original

let carros = ['BMW','Mercedez','Audi']
let [carro1,carro2,carro3] = carros
console.log(carro2)


//desestruturando objetos literais

let pessoa = {
    nome: 'Flávio',
    idade: 33,
    solteiro: true
}

const {nome, solteiro} = pessoa

console.log(solteiro) 




const string = 'ABC'

console.log(string.slice(-1))