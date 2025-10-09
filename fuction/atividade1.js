import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let exercicio
let tempo, resultado

exercicio = prompt("Qual exercicio, caminahda, corrida ou bicileta ?")
tempo = Number (prompt("Quanto tempo você executou ?"))


function calculo (exercicio, tempo){
    resultado = 0

    if(exercicio === 'caminhada'){
        resultado = tempo*5
        
    }if(exercicio === 'corrida'){
        resultado = tempo*10
        
    }if(exercicio === 'bicileta'){
        resultado = tempo*8
        
    }
    return resultado
}

console.log(calculo (exercicio, tempo))