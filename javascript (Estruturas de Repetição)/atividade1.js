import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let i, valor

console.log("Quantidade:     Presço:")

for( i = 1; i <= 50; i = i + 1){
    valor = i * 6.99
    console.log("" ,i, "      -       R$",valor.toFixed(2))
}
