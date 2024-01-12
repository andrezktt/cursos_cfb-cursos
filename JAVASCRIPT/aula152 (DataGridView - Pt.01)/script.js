const config_dgv = {
    endpoint: "produtos.json",
}

const dataGridView = () => {
    fetch(endpoint)
    .then(dados => dados.json())
    .then(dados => {
        console.log(dados)
    })
}
