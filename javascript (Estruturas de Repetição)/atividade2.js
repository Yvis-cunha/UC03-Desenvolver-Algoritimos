import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let i, qtdtermo, valorant = 0, valoratual = 1, prox
let sequencia = valorant + " " + valoratual;

qtdtermo = Number (prompt("Digite quantos termmos deseja visualizar: "))

for(i = 0; i  < qtdtermo; i = i + 1){
    
    prox = valorant + valoratual

    valorant = valoratual
    valoratual = prox

    //console.log(prox, "")
    sequencia += " " + prox;
}
console.log(sequencia);