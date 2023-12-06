const idade = [23, 14, 46, 8, 39, 11, 61, 15, 18, 17] // crio um array com diversos números representando possíveis idades, e a tarefa é separá-los em maiores que 18 anos e menores que 18 anos. Vamos utlizar o comando "filter"

const maior = idade.filter((value, key, array) => { // crio uma variável que recebe o array, porém filtrado graças ao comando "filter", o comando pode operar com 3 variáveis: o valor do elemento, a sua posição chave e o array completo (aqui vamos utilizar apenas os valores)
    if (value >= 18) // dentro da filtragem executamos uma condição para confirmar se o valor é maior ou igual a 18
        return value // e caso seja verdadeira retornamos o próprio valor para a variável
})

const menor = idade.filter((value, key, array) => { // aqui ocorreu o mesmo porém com outra condição, que oa valores sejam MENORES que 18
    if (value < 18)
        return value
})

console.log(idade) // aqui há a impressão completa do array
console.log(maior) // valores filtrados, com 18 anos ou mais
console.log(menor) // valores filtrados, menores que 18 anos
