console.log("Boa noite!")
// Importando o módulo readline
const readline = require("readline")

//Criando uma instância de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Solicitando ao usuário que insira seu nome
rl.question("Qual seu nome? ", (nome) => {
    //Exibindo o nome inserido pelo usuário
    console.log("Seu noome é: ", nome)

    //Fechando a interface de leitura
    rl.close()
})