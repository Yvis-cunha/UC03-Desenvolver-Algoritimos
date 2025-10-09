import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
let contadorofensivas =0
let contador // contador da repetição
let ofensivas = ['pitomba','bosta', 'merda','pitomba','droga','telasca']
let texto   // texto recebido pelo usuario
let arraypalvras = [] //array das pavras após separados
let arraypronta = []

console.log("====Folha do senac====")
texto = prompt("Escreva o texto para publicação: ")

arraypalvras = texto.split(" ") //pega, o texto recebido do prompt e adiciona dentro da array separado por palvras que no caso é os espaços

for(contador=0; contador < arraypalvras.length; contador=contador+1){
   
    if(ofensivas.includes(arraypalvras[contador])){ 
        arraypalvras[contador] = '*****'
        contadorofensivas = contadorofensivas + 1 //para saber a quantidade de vezes que ele encontrou pavras ofensivas
    }
}

arraypronta = arraypalvras.join(" ") //trasnforma de array em string

console.log(arraypalvras)
console.log('Quantidade de pavras ofensivas: ',contadorofensivas)
console.log(arraypronta)

console.log(texto)
