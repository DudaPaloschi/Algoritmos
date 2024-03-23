console.log("Boa noite!")
// Importando o módulo readline
const readline = require("readline")

//Criando uma instância de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Solicitando ao usuário que insira sua idade
rl.question("Qual a sua idade? ", (idade) => {
    //Exibindo a idade inserida pelo usuário

    if (idade >= 18) {
        console.log("Você é de maior!")
    } else {
        console.log("Você é de menor!")
    }

    //Fechando a interface de leitura
    rl.close()
})