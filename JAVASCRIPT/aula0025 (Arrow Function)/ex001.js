//MODO PADRÃO
const soma1 =  function(n1, n2) {
    return n1 + n2
} 
console.log(soma1(264, 328))


//ARROW FUNCTION (FUNÇÃO ANÔNIMA SIMPLIFICADA)
const soma2 = (n1 = 0, n2 = 0) => {
    let res = n1 + n2
    return res
}
console.log(soma2(274, 11))


// ARROW FUNCTION PARA OPERAÇÕES MAIS SIMPLES (SEM CHAVES OU RETURN)
const soma3 = (v1 = 0, v2 = 0) => v1 + v2
console.log(soma3(113, 67))