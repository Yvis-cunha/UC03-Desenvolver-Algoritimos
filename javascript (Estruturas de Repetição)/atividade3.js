import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let numero

numero = Number (prompt("Digite um número inteiro: "))

if(numero % numero == 0 && numero % 1 == 0 ){
    console.log("Número digitado é primo")
}