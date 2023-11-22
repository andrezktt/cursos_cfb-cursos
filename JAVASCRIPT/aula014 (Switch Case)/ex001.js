let position = 1

switch(position) {
    case 1:
        console.log(`Primeiro Lugar`)
        break
    case 2:
        console.log(`Segundo Lugar`)
        break
    case 3:
        console.log(`Terceiro Lugar`)
        break
    case 1: case 5: case 6:
        console.log(`Premio de Participação`)
        break
    default:
        console.log(`Não subiu ao pódio!`)
        break
}