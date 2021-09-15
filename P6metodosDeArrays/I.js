//.push() adiciona um ou mais elementos ao fim de um array

let cores = ['Azul', 'Vermelho', 'preto']
cores.push('Violeta')

//.pop() elimina o ultimo elemento de um array, não recebe parametro e retorna o elemento eliminado

let series = ['Breaking Bad', 'Vikings', 'Peaky Blinders']
let ultimaSerie = series.pop()
console.log(series)
console.log(ultimaSerie)

//.shift() elimina o primeiro elemento de um array, não recebe parametro, retorna o elemento eliminado

let series = ['Breaking Bad', 'Vikings', 'Peaky Blinders']
let ultimaSerie = series.shift()
console.log(series)
console.log(ultimaSerie)

//.unshift() adiciona um ou mais elementos ao inicio de um array, recebe um ou mais elementos com parametro

let series = ['Breaking Bad', 'Vikings', 'Peaky Blinders']
series.unshift('Better Caul Saul', 'The Crown')
console.log(series)

//.join() junta os elementos de um array usando um separador que especificamos
let series = ['Breaking Bad', 'Vikings', 'Peaky Blinders']
let separadosPorHifen = series.join(' - ')
console.log(separadosPorHifen)

//.indexOf() procura no array pelo elemento que recebe como parametro, retorna o indice do elemento
let cores = ['Azul', 'Vermelho', 'preto']
cores.indexOf('Azul')
console.log(cores.indexOf('Azul'))

//lastIndexOf() similar ao index of porem começa buscando o elemento do final do array, funciona bem quando a elementos repetidos no array
let cores = ['preto','Azul', 'Vermelho', 'preto']
cores.lastIndexOf('preto')
console.log(cores.indexOf('preto'))

//.includes() semelhante ao index of porem retorna um booleano
let cores = ['Azul', 'Vermelho', 'preto']
cores.includes('Azul')
console.log(cores.includes('Azul'))