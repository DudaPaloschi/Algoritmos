const respostaDoUsuario = "90" 
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) { 
    console.log("Passou no teste.") 
} else { 
    console.log("Não passou no teste.") 
}

/*a)Primeiro converte a variável respostaDoUsuario que é 
uma String em uma variável Number. Verfica se este número tem resto 0.
b)Para números pares
c)Para números ímpares*/

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

/*a)Indica o preço da fruta
b)O preço da fruta maça é R$2.25
c)O preço da fruta pêra é 5
Se o break logo acima do default for removido o código 
é executado usando o próximo break.*/

const numero = Number(("50"))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

/*a)Indica uma variavel em string convertida em number
b)Se numero for maior que zero vai aparecer "Esse número passou no teste"
Não vai ser executado
c)Sim, haverá um erro no console. Isso ocorrerá porque a variável "mensagem" 
é declarada dentro do bloco if e não estará acessível fora dele. 
Portando, ao tentar acessá-la fora do bloco if,
ocorrerá um erro de "mensagem is not defined"*/ 