import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
 
let jogador1
let jogador2
let i=1
let dado1
let dado2
let acumulador1=0
let acumulador2=0
 
jogador1 = prompt("Digite o nome do primeiro jogador: ")
jogador2 = prompt("Digite o nome do segundo jogador: ")
 
while(i <= 3){
    let jogar1 = prompt(`Jogador: ${jogador1} Jogue o Dado:`)
    dado1 = Math.trunc((Math.random() * 6) + 1)
    console.log(dado1)
    acumulador1 = acumulador1 + dado1
    let jogar2 = prompt(`Jogador: ${jogador2} Jogue o Dado`)
    dado2 = Math.trunc((Math.random() * 6) + 1)
    console.log(dado2)
    acumulador2 = acumulador2 + dado2
   
    i++
}
console.log(`O jogar ${jogador1} Conseguio '${acumulador1}' de pontos`)
console.log(`O jogar ${jogador2} Conseguio '${acumulador2}' de pontos`)
 
if(acumulador1 > acumulador2){
    console.log(`O vencedor do jogo é ${jogador1}`)
}else if(acumulador1 === acumulador2){
    console.log(`Deu empate!`)
}else{
    console.log(`O vencedor do jogo é ${jogador2}`)
}