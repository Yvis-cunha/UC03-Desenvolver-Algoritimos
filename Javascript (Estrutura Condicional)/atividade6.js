import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let tipoveiculo, tempo, valor
const valorcarro=12, valormoto=7, valorcaminhao=25

tipoveiculo = prompt("Digite o tipo do seu veiculo: carro, moto caminhão ? ")
tempo = Number (prompt("Digite o tempo que passou no estacionamento em horas: "))

// opção da moto
if(tipoveiculo == 'carro' && tempo <= 2){
    console.log("O valor a ser pago é: R$", valorcarro )        
}else if(tipoveiculo == 'carro' && tempo >= 3){
    valor = (tempo - 2) * 3 + valorcarro
    console.log("O valor do estacionamento com acrescimo é: R$",valor)

// opção da moto
}if(tipoveiculo == 'moto' && tempo <=2){
    console.log("O valor a ser pago é: R$", valormoto )        
}else if(tipoveiculo == 'moto' && tempo > 3){
    valor = (tempo - 2) * 3 + valormoto
    console.log("O valor do estacionamento com acrescimo é: R$",valor)

// opção da caminhão
}if(tipoveiculo == 'caminhão' && tempo <=2){
    console.log("O valor a ser pago é: R$", valorcaminhao )
}else if(tipoveiculo == 'caminhão' && tempo > 3){
    valor = (tempo - 2) * 5 + valorcaminhao
    console.log("O valor do estacionamento com acrescimo é: R$",valor)
}