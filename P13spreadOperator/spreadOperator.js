

//permite juntar dados de dois arrays

let clubesBrasil = ['Palmeiras', 'São Paulo', 'Santos']
let clubesArgentina = ['Boca', 'River', 'Independiente']
let clubesSulamericanos = [...clubesBrasil, ...clubesArgentina]
console.log(clubesSulamericanos)

//permite juntar dados de dois objetos. Neste caso ...e o nome do objeto dentro de objeto ira juntar ambos

let pessoa = {
    nome: 'Flávio',
    idade: 33
}

let infosContato = {
    email: 'flaviomsipoli@gmail.com',
    tel: '11 9 49951010',
    ...pessoa
}

console.log(infosContato)



