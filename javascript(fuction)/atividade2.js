import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let saldo=0, valor=0
let resultado

valor = Number (prompt("Digite o valor que desjea despositar: "))

function depositar (saldo, valor){
    saldo = 150
    resultado = 0
    resultado = (saldo + valor)
    return resultado
}

console.log(depositar(saldo,valor))


valor = Number(prompt("Qul o valor deseja sacar: "))

function sacar (saldo, valor){
    if(valor < resultado){
        resultado = resultado - valor
        return resultado
    }else{
        console.log("Saldo insuficiente, sua conta possuir um saldo de: R$",resultado)
    }
}

console.log(sacar(saldo, valor))

opcao = prompt("Digite 1 para sacar e 2 para depositar: ")
if(opcao == 1){
    function sacar (saldo, valor)
}