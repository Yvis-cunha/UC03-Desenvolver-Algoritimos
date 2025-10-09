import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let numero, centenas = 0, dezenas = 0, unidade= 0

numero = Number (prompt("Digite um número menor que 1000: "))


if(numero > 1000){
    console.log("O número deve ser menor que 1000")

}else{
    centenas = numero / 100
    dezenas = (numero % 100) / 10
    unidade = (numero % 100) % 10
    console.log(numero, " = ",Math.floor(centenas),"Centenas,",Math.floor(dezenas),"Dezenas e",Math.floor(unidade),"Unidades")
}