const ctx = document.getElementById('grafico_oee');
let valores = [0, 0, 0]
      
let grafico_oee = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Disponibilidade", "Qualidade", "Performance"],
    datasets: [{
      label: '# of Votes',
      data: valores,
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const obterDados = () => {
    const endpoint = "https://5b27f434-351d-42f7-8b84-e33e0a68cc30-00-q7nxsjqxxg2l.kirk.replit.dev/"
    fetch((endpoint))
    .then(res => res.json())
    .then(res => {
        console.log(res.disponibilidade)
        console.log(res.qualidade)
        console.log(res.performance)
        valores[0] = res.disponibilidade
        valores[1] = res.qualidade
        valores[2] = res.performance
        grafico_oee.update()
    })
    .catch(erro => {
        alert(`ERRO: ${erro}`)
    })
}

let atualizacaoDados = setInterval(obterDados, 3000)