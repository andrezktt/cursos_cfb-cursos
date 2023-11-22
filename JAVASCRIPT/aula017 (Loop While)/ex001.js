/* let n = 1

while(n <= 10) {
    console.log(`O valor está em ${n}`)
    n++
} */

// CALCULANDO FATORIAL
// FATORIAL = 5! = 5 x 4 x 3 x 2 x 1 = 120

let f = 5
let fat = 1

while(f >= 1) {
    fat *= f // fat = fat x f
    f--
}

console.log(fat)