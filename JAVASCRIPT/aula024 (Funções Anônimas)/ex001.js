console.log(`FUNÇÃO ANÔNIMA PADRÃO`)
const f = function(...valores) { // uma função anônima não apresenta um nome, mas deve ser inserida como uma variável. tal função não ocupa memória do sistema e só aparece quando solicitada
    let res = 0
    for(i of valores) {
        res += i
    } return res
}
console.log(f(10,58,64,29)) // ainda sim deve ser chamada e amostrada por um comando de "print"

console.log(`FUNÇÃO ANÔNIMA CONSTRUTORA`)
const f2 = new Function(`n1`, `n2`, `n3`, `return n1 + n2 + n3`) // uma função construtora tende a ser mais concisa porém mais limitada do que uma função padrão

console.log(f2(10,20,55))