const objetos = document.querySelector("#objetos")

const computador_1 = {
    cpu: "i5 13600KF",
    ram: "32GB",
    ssd: "1TB",
    info: function() {
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`SSD: ${this.ssd}`)
        console.log("----------")
    }
}

const clone_1 = Object.assign({}, computador_1) // cópia exata do objeto
clone_1.info()

const computador = {
    cpu: "",
    ram: "",
    ssd: "",
    info: function() {
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`SSD: ${this.ssd}`)
        console.log("----------")
    }
}

const clone_2 = Object.create(computador) // utilização do objeto como se fosse uma classe, ou seja, utiliza-se o objeto como molde para criar outro objeto
clone_2.cpu = "i9 13900K"
clone_2.ram = "32GB"
clone_2.ssd = "2TB"
clone_2.info()

const obj_1 = {obj1: "1"}
const obj_2 = {obj2: "2"}
const obj_3 = {obj3: "3"}
const obj_4 = Object.assign(obj_1, obj_2, obj_3)
console.log(obj_4)