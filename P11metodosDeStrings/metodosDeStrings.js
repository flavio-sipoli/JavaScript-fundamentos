
//.length retorna quantidade total de caracteres na string
let nome = 'Flávio'
nome.length

//.indexOf procura a string passada como parametro e retorna o numero da sua posição no indice, caso não encontre retorna -1

let saudacao = 'Boa tarde, sou o Flávio'
saudacao.lastIndexOf('Boa')

//.slice() esse método recebe dois parametros, o indice onde começa o corte e onde termina

let frase = 'Breakind bad rules!'
frase.slice(9,12)

//.trim() este método retira os espaços que podem ter no começo e no fim de uma string

let nome = ' Homer Simpsom  '
nome.trim()

//.split() este método divide uma string em varias strings

let frase = 'Boa tarde, tudo bem com voce?'
frase.split(' ')

//.replace() este método substitui uma string por outra, recebe dois parametros o primeiro com a string que quer subistituir e o segundo com a nova

let nome = 'Flávio'
nome.replace('Flávio','Maiara')