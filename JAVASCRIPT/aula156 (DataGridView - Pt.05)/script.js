const config_dgv = {
    endpoint: "produtos.json",
}

const dataGridView = () => {
    fetch(config_dgv.endpoint)
    .then(dados => dados.json())
    .then(dados => {
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
            dataGridView_linha.appendChild(coluna_5)

            const img_exibir = document.createElement("img")
            img_exibir.setAttribute("class", "dgv_icones")
            img_exibir.setAttribute("src", "exibir.svg")
            coluna_5.appendChild(img_exibir)

            const img_editar = document.createElement("img")
            img_editar.setAttribute("class", "dgv_icones")
            img_editar.setAttribute("src", "editar.svg")
            coluna_5.appendChild(img_editar)

            const img_deletar = document.createElement("img")
            img_deletar.setAttribute("class", "dgv_icones")
            img_deletar.setAttribute("src", "deletar.svg")
            coluna_5.appendChild(img_deletar)

            img_deletar.addEventListener("click", (evento) => {
                // const id = evento.target.parentNode.parentNode.firstChild.innerHTML
                const linha = evento.target.parentNode.parentNode
                // const endpoint = `link da base de dados/${id}`
                // fetch(endpoint)
                // .then(response => {
                    // if(response.status == 200) {
                        linha.remove()
                //    }
                // })
            })
            
            /* dataGridView_produtos.innerHTML = "" */
            const dataGridView_produtos = document.querySelector("#dataGridView_produtos")
            dataGridView_produtos.appendChild(dataGridView_linha)
        })
    })
}

dataGridView(config_dgv)