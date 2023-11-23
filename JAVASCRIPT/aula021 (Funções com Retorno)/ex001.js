function canal() {
    let n1 = 10
    let n2 = 2
    let res = n1 * n2
    if (res % 2 == 0) {
        return `Par` // só é possível retornar um resultado apenas, ou seja, não é possível executar dois comandos return (o código será interrompido após o primeiro return)
    } else {
        return `Ímpar`
    }
}
let res =  canal()
console.log(res) // o comando return exige um retorno para que a função seja executada