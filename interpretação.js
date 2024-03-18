const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) //a false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado) //b false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) //c true

console.log("d. ", typeof resultado) //d boolean

let primeiroNumero = "100"
let segundoNumero = "43"

const soma = primeiroNumero + segundoNumero

console.log(soma) 

let numero = Number(primeiroNumero)
let numero2 = Number(segundoNumero)
soma = numero + numero2
console.log(soma) //143

/*O erro está nas aspas existentes, pois o console entende as aspas como uma string.
Então o console vai imprimir 10043 concatenando as variaáveis. 

