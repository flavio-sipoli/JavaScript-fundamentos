// condição if else if e else (if é usado para validar uma condição caso seja verdadeira e else caso seja falsa)
//exemplo

let idade = 32
if (idade >= 18) {
    console.log('Você pode dirigir')
} else {
    console.log('Você não pode dirigir')
}

//exemplo usando laço de repetição for

let familia = ['Flávio', 'Maiara', 'Igor']
for (let i = 0; i < familia.length; i++) {
    if (familia[i] == 'Igor') {
        console.log(familia[i] + 'Montevecchi')
    } else {
        console.log(familia[i] + 'Sipoli')
    }
}

let frutas = ['Caja', 'Banana', 'Goiaba']
let busca = 'Caja'
for (let i = 0; i < frutas.length; i++) {
    if (busca == frutas[i]) {
        console.log('Temos a fruta' + busca + 'disponivel')
    }
}

//exemplo usando operadores lógicos

let iphone = 'preto'
if (iphone == 'preto' || iphone == 'prata') {
    console.log('Pode prosseguir com a compra')
} else {
    console.log('Não pode prosseguir com a compra')
}

let dia = 'Domingo'
let tempo = 'Bom'
if (dia == 'Domingo' && tempo == 'Bom') {
    console.log('Hoje é dia de sair')
} else {
    console.log('Hoje é dia de ficar em casa')
}

//exemplo usando else if

let farol = 'vermelho'
if (farol == 'vermelho') {
    console.log('Voce deve parar')
} else if (farol == 'amarelo') {
    console.log('Tenha atenção')
} else {
    console.log('Pode seguir')
}