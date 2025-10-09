import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt


let ano

ano = Number (prompt("Digite o ano: "))

if((ano % 4 === 0 ) && (ano % 100 !== 0) || ano % 400 === 0){
    console.log("Sim esse é um ano bissexto:", ano)

}else{
    console.log("O ano que você digitou não é bissexto", ano)
}