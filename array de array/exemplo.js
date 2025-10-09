import PromptSync from "prompt-sync"
const prompt = PromptSync()

let matriz = []

let linha = Number(prompt('Digite a quantidade de linhas: '))
let coluna = Number(prompt('Digite a quantidade de coluna: '))

for(let l = 0; l < linha; l++){//linha -  elementos
    matriz[l] = []
    for(let c = 0; c < coluna; c++){ // colunas - os valores de cada elemento/linha
        matriz[l].push(Number(prompt('Digite um valor: ')))
        //matriz[l][c]
    }
}

console.log(matriz)
matriz[1].splice(matriz[1].indexOf(3),1) // matriz[1].splice(0,1) Remove um valor do 2º elemento de acordo com índice específico
console.log(matriz)
matriz.pop() // remove o último elemento
console.log(matriz)
matriz[0].shift() // remove o 1º valor do 1º elemento
console.log(matriz)