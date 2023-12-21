const divData = document.querySelector("#div_data")
const data = new Date()

let dia = data.getDate()
dia = dia < 10 ? "0" + dia : dia

let mes = data.getMonth()
mes = mes < 10 ? "0" + mes : mes

const dataResumida = dia + "/" + mes + "/" + data.getFullYear()

divData.innerHTML = dataResumida