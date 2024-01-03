// [a, b, c, d] = [10, 20, 30, 40]

// let numeros = [10, 20, 30, 40]
// let [a, b, c, d] = numeros

let numeros = () => {
    return [10, 20, 30, 40]
}
let [a, b, c, d] = numeros()

console.log(a)
console.log(b)
console.log(c)
console.log(d)