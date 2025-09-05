import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
let contadorofensivas =0
let contador // contador da repetição
let ofensivas = ['pitomba','bosta', 'merda','locura','droga','telasca']
let texto   // texto recebido pelo usuario
let arraypalvras = [] //array das pavras após separados
let arraypronta = []



console.log("====Folha do senac====")
texto = prompt("Escreva o texto para publicação: ")

arraypalvras = texto.split(" ") 

for(contador=0; contador < arraypalvras.length; contador=contador+1){
   
    if(ofensivas.includes(arraypalvras[contador])){ 
        arraypalvras[contador] = '*****'
        contadorofensivas = contadorofensivas + 1
}
}

arraypronta = arraypalvras.join(" ")

console.log(arraypalvras)
console.log('Quantidade de pavras ofensivas: ',contadorofensivas)
console.log(arraypronta)
