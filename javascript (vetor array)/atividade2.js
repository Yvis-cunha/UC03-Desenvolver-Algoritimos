import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let consoantes = 0
let contador
let array = []
let arrayconsoante = []

for(contador=0; contador <= 4; contador = contador + 1){
    array[contador] = prompt("Digite letras do alfabeto: ")
        if(array[contador] != 'a' && array[contador] != 'e' && array[contador] != 'i' && array[contador] != 'o' && array[contador] != 'u'){ //teste para saber se é vogal
            consoantes = consoantes + 1 // adiciona 1 a cada rodada na variabel consoante
                arrayconsoante.push(array[contador]) //= array[contador]
        }    
}

console.log("caracteres informados: ",array)
console.log("números de consoantes: ",consoantes)
console.log("consoantes: ",arrayconsoante)