import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let contador
let valor
let arraymeses=['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho','julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

for(contador = 0; contador < arraymeses.length; contador = contador + 1){
    valor = Number (prompt(`Digite a média da temperatura do mês, ${arraymeses[contador]}:`))
}








//console.log(somatemperatura);
//console.log(mediatemperatura);
//console.log(arraytemperatura[2]);