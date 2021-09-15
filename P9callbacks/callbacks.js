
// callback é uma função que se passa como parametro para outra função

const somar = (numA, numB) => numA + numB

const calculadora =(numA, numB, operacao) => operacao(numA, numB)

console.log(calculadora(10,20,somar))