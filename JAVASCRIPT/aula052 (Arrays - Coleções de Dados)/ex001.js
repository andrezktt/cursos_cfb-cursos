const box = document.querySelector("#box") // extraindo o elemento em HTML
let gaming = ["Controle", "HeadSet", "Adaptador Bluetooth", ["Days Gone", "Alan Wake II", "Death Stranding"]] // exemplo de array dentro de outro array
let objetos = ["Placa de Vídeo", "Placa Mãe", "Processador", "Memória RAM", "SSD", "Fonte", "WaterCooler", "Gabinete", gaming] // exemplo de array que contém uma variável, que também contém um array

// objetos[3] = "Pasta Térmica"

objetos.push("Ventoinhas") // método onde é possível inserir um elemento na última posição do array
objetos.push("Mouse Ergonômico") // elemento a ser removido posteriormente
objetos.pop() // método de remoção, onde o último elemento do array é removido

objetos.unshift("Teclado Mecânico") // método onde é possível inserir um elemento na primeira posição do array
objetos.unshift("Mouse Ergonômico") // elemento a ser removido posteriormente
objetos.shift() // método de remoção, onde o primeiro elemento do array é removido

objetos[9][3][0] = "Call of Duty" // exemplo de como é possível identificar e selecionar um elemento específico, mesmo ele estando dentro de diversos arrays. basta identificar as chaves de cada um dos arrays

objetos.map((element) => { // mapenado todos os elementos do array "objetos", que aninha mais outros dois arrays
    let p = document.createElement("p") // precisei necessáriamente criar uma variável pois esta variável é a que identifica os novos elementos criados
    p.innerHTML = element // especificando o conteúdo HTML de cada elemento
    box.appendChild(p) // adicionando os elementos na caixa
})
