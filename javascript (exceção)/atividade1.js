import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
import {contaBacaria} from "./class.js"

const cliente1 = new contaBacaria(prompt('Nome Titular:'),Number (prompt('Saldo da conta:')),prompt('Número da conta:'),prompt('Número da agencia:'),prompt('Data da abertura da conta:'))

console.log(`O nome do titular é: ${cliente1.NomeTitular}`)

let opcao
do{
    opcao = prompt(`
    --- Menu Principal ---
    1 - Sacar
    2 - Depositar
    3 - Ver Saldo
    4 - Rendimento
    0 - Sair
    Escolha uma opção:`)
    switch(opcao){
        case '1':
            try{
            cliente1.sacar()
            }catch(valor){
                console.error(valor.message)
            }
        break
        case '2':
            try{
            cliente1.depositar()
            }catch(valor){
                console.error(valor.message)
            }
        break
        case '3':
            cliente1.versaldo()
        break
        case '4':
            cliente1.calcularrendimento()
        break           
    }    
}while(opcao != '0')