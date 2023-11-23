function soma(...valores) { // ao utilizar o comando ... os valores foram espalhados e se tornaram um array ao invés de uma coleção
    let res = 0
    for(let i of valores) { // for of amostra exatamente os valores do array
        res += i // 0 + os valores que o comando for of puxou de cada índice do array
    }
    return res
}
console.log(soma(37, 10, 3, 2, 28, 77))

// com os parametros definidos em rest é possível realizar operações diversas sem ter que alterar certos comandos dentro da função