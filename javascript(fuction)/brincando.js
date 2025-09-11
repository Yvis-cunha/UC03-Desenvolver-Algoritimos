import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
import {media, celciusPfahen} from "./funcoes.js"

let resultado, valorfinal =0

// let n1 = Number (prompt("Digite um valor: "))
// let n2 = Number (prompt("Digite um valor: "))
// let n3 = Number (prompt("Digite um valor: "))
// resultado = media (n1,n2,n3)
// console.log("A média aritimetrica desses valores é: ",resultado)


let valoremcelcius = Number (prompt("Digite a temperatura em celcius: "))
valorfinal = celciusPfahen (valoremcelcius)
console.log("Então,",valoremcelcius,"ºC","é igual a ",valorfinal,"ºF")

