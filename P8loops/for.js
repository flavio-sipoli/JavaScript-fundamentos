
// recebe um inicio, uma condição de parada e um incrementador

let tabuada = 7
for (let i = 1; i <= 10; i++) {
    console.log(tabuada + 'x' + i + '=' + (tabuada * i))
}

let objetos = ['Notebook', 'PC', 'Mouse']
for (let i = 0; i < objetos.length; i++) {
    console.log('Os objetos são ' + objetos[i])
}

let familia = ['Flávio', 'Maiara', 'Igor']
for (let i = 0; i < familia.length; i++) {
    if (familia[i] == 'igor') {
        console.log(familia[i] + 'Montevecchi')
    } else {
        console.log(familia[i] + 'Sipoli')
    }
}