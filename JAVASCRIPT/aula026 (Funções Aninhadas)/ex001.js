const soma = (...valores) => { // cria-se uma função anônima que transforma a coleção de dados em array graças ao comando spread (...)
    const somar = val => { // dentro da função inicia-se outra função anônima com o parâmetro "val"
        let res = 0 // cria-se uma variável para dar o resultado da operação
        for(v of val) // para realizar a operação inicia-se um loop para "descobrir"os valores do array
            res += v //  soma dos valores, um por um, do array
        return res // mostragem do resultado do loop (operações)
    }
    return somar(valores) // o importante é entender que foi aqui que se deu o valor para o parâmetro  "val", que assumiu todos os valores do array "valores"
}

console.log(soma(10,40,75)) //  ao chamar a primeira função e informar os valores para o parâmetro "valores" executa-se imediatamente a função aninhada que define um parâmetro "val" que assume os mesmos valores do parâmetro "valores" lá da primeira função. Após isso, inicia-se um looping para somar os números um por um e a resposta retorna ao final da função. Depois disso basta retornar uma chamada para a função aninhada igualando os parâmetros "valores" e "val" para que seja mostrado o resultado ("res") da função aninhada.