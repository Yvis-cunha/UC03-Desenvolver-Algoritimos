import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
import {contaBacaria} from "./class.js"
let opcao

const cliente1 = new contaBacaria(prompt('Nome Titular:'),Number (prompt('Saldo da conta:')),prompt('Número da conta:'),prompt('Número da agencia:'),prompt('Data da abertura da conta:'))
const cliente2 = new contaBacaria(prompt('Nome Titular:'),Number (prompt('Saldo da conta:')),prompt('Número da conta:'),prompt('Número da agencia:'),prompt('Data da abertura da conta:'))


const nomedotitular1 = cliente1.NomeTitular
const nomedotitular2 = cliente2.NomeTitular
let saldonovo = cliente1.saldo
console.log(`O nome do titular é: ${nomedotitular1}`)
console.log(`O nome do titular é: ${saldonovo}`)


let selecaodeconta

do{
    opcao = prompt(`
    --- Menu Principal ---
    1 - Sacar
    2 - Depositar
    3 - Ver Saldo
    0 - Sair

    Escolha uma opção:   `)
    switch(opcao){
        case '1':
            cliente1.sacar()
        break
        case '2':
            cliente1.depositar()
        break
        case '3':
            cliente1.versaldo()
        break         
    }
    
}while(selecaodeconta != '0')