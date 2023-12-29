let nome = new String("Andre Zicatti Leite")
console.log(nome)

console.log(nome.search(/zicatti/i)) // "/---/i" ignora se o caractere é minúsculo ou maiúsculo

console.log(nome.match(/T/ig)) // "/---/ig" ignora se é minúsculo e maiúsculo e também pega todos os elementos/caracteres

console.log(nome.replace(/E/ig, "Teste")) // aqui ocorreu o mesmo só que na função de reposição