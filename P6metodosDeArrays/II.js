//.map() esse metódo recebe uma função como parametro(callback), percorre o array e retorna um novo array modificado

let numeros = [1, 2, 3]
let dobroNumeros = numeros.map(function (num) {
    return num * 2
})
console.log(dobroNumeros)

//usando arrrow function
let numeros = [1, 2, 3]

let dobroNumeros = numeros.map (num => num*2)

//.find() esse método também recebe uma função como parametro, retorna o valor do primeiro elemento encontrado caso não encontre retorna undefined

let frutas = ['Uva', 'Banana', 'Caja']
let buscaFrutas = frutas.find(function (fruta) {
    return fruta == 'Caja'
})
console.log(buscaFrutas)

//.filter() esse método tambem recebe um callback como parametro, desloca o array e filtra de acordo com a condição no parametro, retorna um novo array somente com os elementos que atenderam a essa condição

let idade = [10, 15, 20, 30, 40]
let maiores = idade.filter(function (idade) {
    return idade >= 18
})
console.log(maiores)

//reduce() este método percorre o array e retorna um unico valor, recebe dois parametros um acumulador e um elemento de corrente
//neste exemplo o primeiro parametro é o acumulador, ele somou os dois primeiros valores e depois soma com o terceiro

let numeros = [2, 5, 8]
let soma = numeros.reduce(function (pilha, numero) {
    return pilha + numero
})
console.log(soma)

//.forEach() a finalidade desse método é iterar o array, recebe um parametro e ao contrario dos demais nao retorna nada

let paises = ['Brasil', 'Argentina', 'Uruguai']
paises.forEach(function (pais) {
    console.log(pais)
})