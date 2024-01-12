const config_dgv = {
    endpoint: "produtos.json",
}

const dataGridView = () => {
    fetch(config_dgv.endpoint)
    .then(dados => dados.json())
    .then(dados => {
        console.log(dados)
        dados.map(elemento => {
            const dataGridView_linha = document.createElement("div")
            dataGridView_linha.setAttribute("class", "dataGridView_linha")

            const coluna_1 = document.createElement("div")
            coluna_1.setAttribute("class", "c1")
            coluna_1.innerHTML = elemento.codigo
            dataGridView_linha.appendChild(coluna_1)
            
            const coluna_2 = document.createElement("div")
            coluna_2.setAttribute("class", "c2")
            coluna_2.innerHTML = elemento.produto
            dataGridView_linha.appendChild(coluna_2)

            const coluna_3 = document.createElement("div")
            coluna_3.setAttribute("class", "c3")
            coluna_3.innerHTML = elemento.marca
            dataGridView_linha.appendChild(coluna_3)

            const coluna_4 = document.createElement("div")
            coluna_4.setAttribute("class", "c4")
            coluna_4.innerHTML = elemento.modelo
            dataGridView_linha.appendChild(coluna_4)

            const coluna_5 = document.createElement("div")
            coluna_5.setAttribute("class", "c5")
            coluna_5.innerHTML = "Comandos"
            dataGridView_linha.appendChild(coluna_5)

            const dataGridView_produtos = document.querySelector("#dataGridView_produtos")
            dataGridView_produtos.appendChild(dataGridView_linha)
        })
    })
}

dataGridView(config_dgv)