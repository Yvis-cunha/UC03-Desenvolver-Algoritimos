import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
import {multiplicacao} from "./funcoes.js"

let exercicio

exercicio = prompt("Qual exercicio você fez ?, caminahda 1, corrida 2, bicicleta 3")

switch(exercicio){
    case 1:
        multiplicacao()
}


