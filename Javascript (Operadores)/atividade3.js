import PromptSync from "prompt-sync"; // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let largura, altura, area, perimetro

largura = Number (prompt('Digite a largura do rentângulo: '))
altura = Number (prompt("Digite a altura do rentângulo: "))

area = largura * altura
perimetro = 2*(largura + altura)

console.log("A área do rentângulo é: ", area)
console.log("O períremtro do rentângulo é: ", perimetro)
