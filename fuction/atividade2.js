import PromptSync from "prompt-sync" // Importe do prompt
import {sacar, deposito} from "./funcoes.js"
const prompt = PromptSync() // variavel do prompt

let saldo = 150

let opercao = Number(prompt("Digite 1 para sacar e 2 para depositar"))

if(opercao == 1){
    let retirada = Number (prompt("Digite o valor que deseja sacar: "))
    saldo = sacar(saldo, retirada)
    console.log(saldo)

}else if(opercao == 2){
    let depositar = Number (prompt("Digite o valor que deseja depositar: "))
    saldo = deposito(saldo, depositar)
    console.log(saldo)
}