const respostaDoUsuario = "90" 
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) { 
    console.log("Passou no teste.") 
} else { 
    console.log("Não passou no teste.") 
}

//a)Primeiro transforma a variavel respostaDoUsuario que é uma String em uma variaável Number.
//If e else verificam se é par ou impar.
//b)Para números pares
//c)Para números impares

jsx
let fruta
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a)Indica o preço da fruta
//b)O preço da fruta maça é R$2.25
//c)Imprime 5

const numero = Number(("50"))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//a)Indica uma variavel em string transformada em number
//b)Se numero for maior que zero vai aparecer "Esse número passou no teste"
//Vai aparecer "Esse número passou no teste"
//c)Sim, faltou o else