import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
 
let nome
let letra
let numeroAleatorio
let desconto
 
nome = prompt("Digite seu nome: ")
  
numeroAleatorio = Math.trunc((Math.random() * 999) + 100)
desconto = Math.trunc((Math.random() * 25) + 5)
 
letra = nome.charAt(0).toUpperCase()
//console.log(nome.charAt(0).toUpperCase())
 
console.log(letra+numeroAleatorio+"-"+desconto+"%")