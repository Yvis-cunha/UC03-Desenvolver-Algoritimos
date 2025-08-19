import PromptSync from "prompt-sync"; // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let distancia, calculoentrega
const taxafixa = 10

distancia = Number (prompt("Digite a distancia em km:"))
calculoentrega = (distancia * 5) + taxafixa
console.log("O valor da entrega é: R$", calculoentrega)
