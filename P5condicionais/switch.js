

let dia = 'Domingo'

switch (dia) {
    case 'Segunda':
        console.log('vou tomar café');
        break
    case 'Sabado':
        console.log('Vou comer feijoada');
        break
    case 'Domingo':
        console.log('Vou ao parque')
        break
}

// o uso do default é caso nenhum case seja verdadeiro

switch (dia) {
    case 'Segunda':
        console.log('vou tomar café');
        break
    case 'Sabado':
        console.log('Vou comer feijoada');
        break
    case 'Quarta':
        console.log('Vou ao cinema')
        break
    default:
        console.log('Eu não vou fazer nada')
}