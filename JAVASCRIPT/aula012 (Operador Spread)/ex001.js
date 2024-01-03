let obj1 = document.getElementsByTagName(`div`)
let obj2 = [...document.getElementsByTagName(`div`)]

obj2.forEach(Element => {
    console.log(Element)
})

// graças ao operador spread é possível transformar elementos em arrays ao invés de coleções html, e isso permite uma gama maior de possibilidades de manipulação.