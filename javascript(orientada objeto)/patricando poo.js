import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

//forma tradicional

class Carro{
     cor
     modelo
     placa
     numporta
     imprimir(){
         console.log(`COR: ${this.cor}\n MODELO: ${this.modelo}\n PLACA: ${this.placa}\n PORTAS: ${this.numporta}`)
     }
}
let carro = new Carro() //objeto criado de acordo com o modelo da calsse

carro.cor = prompt("Digite a cor do carro: ")
carro.modelo = prompt("Digite o modelo do carro: ")
carro.placa = prompt("Digite a placa do carro: ")
carro.numporta = '2'//prompt("Digite o numero de portas: ")


carro.imprimir()

