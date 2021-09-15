
//convertendo objeto para json

let infosContato = {
    email: 'flaviomsipoli@gmail.com',
    tel: '11 9 49951010',
}

let dadosConvertidos = JSON.stringify(infosContato)
console.log(dadosConvertidos)

//convertendo json para objeto

let dadosJson = '{"Boate": "Vegas","Bairro": "Sé"}'
let dadosConvertidos = JSON.parse(dadosJson)
console.log(dadosConvertidos)