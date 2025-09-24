import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
import { cliente } from "./class.js"

const cliente1 = new cliente(prompt('Digite o nome:'),prompt('Digite o endereço:'),prompt('Digite sua renda:'))
const cliente2 = new cliente(prompt('Digite o nome:'),prompt('Digite o endereço:'),prompt('Digite sua renda:'))

console.log("\nDados do primeiro cliente")
cliente1.imprimir()
console.log("\nDados do segundo cliente")
cliente2.imprimir()