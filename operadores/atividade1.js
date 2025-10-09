import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt


let idadeanos, idadedias//variaveis
idadeanos = Number(prompt('Digite sua Idade em anos: '))
idadedias = idadeanos * 365
console.log("Sua idade em dias é: ",idadedias )