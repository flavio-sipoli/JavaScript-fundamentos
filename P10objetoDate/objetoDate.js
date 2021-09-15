
//objeto Date é um objeto que nos permite gerar datas e trabalhar com elas

//esta forma ira trazer o ano, mes e dia atual
let minhaData = new Date()
console.log(minhaData)

//.getDate() este método retorna um numero entre 1 e 31, o dia exato

let minhaData = new Date()
let diaDaMinhaData = minhaData.getDate()
console.log(diaDaMinhaData)

//.getMonth retorna o numero do mes de uma data 0 (janeiro) 11(dezembro)

let minhaData = new Date()
let mesDaMinhaData = minhaData.getMonth()
console.log(mesDaMinhaData)

//.getDay retorna o numero do dia da semana 0(domingo) e 6(sabado)

let minhaData = new Date()
let diaDaMinhaData = minhaData.getDay()
console.log(mesDaMinhaData)

//.getFullYear retorna o ano completo de 4 digitos

let minhaData = new Date()
let anoDaMinhaData = minhaData.getFullYear()
console.log(anoDaMinhaData)

//datas dinamicas, recebe tres parametros, ano, mes e dia

let meuAniversario = new Date (1988,1,12)
console.log(meuAniversario)