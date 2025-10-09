import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let saldo = 150, valor=0
let resultado, opcao

valor = Number (prompt("Digite o valor que desjea despositar: "))

function depositar (saldo, valor){

    return saldo + valor
}

console.log(depositar(saldo,valor))


valor = Number(prompt("Qul o valor deseja sacar: "))

function sacar (saldo, valor){
    if(valor < saldo){
        return saldo - numero
    }else{
        console.log("Saldo insuficiente, sua conta possuir um saldo de: R$",resultado)
    }
}

console.log(sacar(saldo, valor))

opcao = prompt("Digite 1 para sacar e 2 para depositar: ")
if(opcao == 1){
    valor = Number (prompt("Qual valor deseja sacar: "))
    sacar(saldo, valor)
    console.log(sacar(saldo, valor))
}

