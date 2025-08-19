import promptSync from 'prompt-sync'

const prompt = promptSync()
let nome = prompt('Digite seu nome: ')
let idade = Number(prompt('Digite sua idade: '))
console.log (`Seu nome é ${nome} e voçê tem ${idade}, você tem ${idade * 365} dias de vida`)











/*import PromptSync from "prompt-sync"; // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let metrosquadrado

metrosquadrado = Number (prompt("Digite os m²: "))*/