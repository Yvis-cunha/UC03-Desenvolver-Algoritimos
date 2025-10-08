import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let arraycanidatos = []
let arrayvotos = []

console.log("====URNA ELETRONICA====")
let qtd = prompt("Digite a quantidade de canidatos: ")

for(let i = 0; i < qtd; i = i + 1){
    arraycanidatos.push(prompt("Digite o nome do canidato: "))
}
console.log(arraycanidatos)

