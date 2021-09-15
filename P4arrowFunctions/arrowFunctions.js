// é uma sintaxe mais compacta para escrever funções
// as arrow functions são sempre anonimas, isso quer dizer que não levam nenhum nome
//se quisermos nomea-las devemos atribui-la como valor de uma variável

//exemplo de arrow function nomeada através de uma variável

let somar = (a, b) => a + b
console.log(somar(2, 3))

// as arrow functions podem caso não receba parâmetro deve ser declarado parênteses da mesma forma
// uma particularidade é que caso receba apenas um parâmetro não é necessário o uso dos parênteses como no exemplo abaixo

let dobro = a => a * 2
console.log(dobro(3))

// se a função tem mais de uma linha de código devemos novamente usar {} e a palavra reservada return

let eMúltiplo = (a, b) => {
    let resto = a % b
    return a == 0
}

console.log(5, 5)

//outro exemplo praticando

let horaAtual = () => {
    let data = new Date()
    return data.getHours() + ':' +
        data.getMinutes()
}