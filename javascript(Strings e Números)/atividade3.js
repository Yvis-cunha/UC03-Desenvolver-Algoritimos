import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let arraynomes = []
let qtdeparticipantes
let ganhador

qtdeparticipantes = Number (prompt("Digite a quantidade de participantes: "))

for(let i =0; i < qtdeparticipantes; i = i + 1){
    arraynomes.push(prompt("Digite os nomes dos participantes: ")) 
}

ganhador = Number (Math.trunc((Math.random() * qtdeparticipantes) + 0))

console.log("=====Nome dos participantes====\n")
console.log(arraynomes)
console.log("indice do ganhador: ",ganhador)

console.log("O ganhador é: ",arraynomes[ganhador])