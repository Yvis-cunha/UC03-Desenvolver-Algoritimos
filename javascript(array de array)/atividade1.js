import PromptSync from "prompt-sync"
const prompt = PromptSync()

let cardapio = [['pao', 'feijoada', 'sopa']]
let diassemana = ['seg', 'ter','quar','quint','sex']
let turno = ['cafe', 'almoco','janta']
let dia
let refeicao

let resultado

for(let l = 1; l < 4; l++){
    cardapio[l] = []
    for(let c = 0; c < 3; c++){
        cardapio[l][c] = prompt(`Digite o cardapio de ${diassemana[l]} (${turno[c]}): `)
    }
}
console.table(cardapio)

 dia = prompt("Qual dia da semana dseja verificar o prato")
 refeicao = prompt("Qual a refeiçao")
 
let indicedia = diassemana.indexOf(dia)
let indicerefecao = turno.indexOf(refeicao)
 
if (indicedia === -1) {
    console.log("Dia da semana inválido.");
} else if (indicerefecao === -1) {
    console.log("Refeição inválida.");
} else {
    
    resultado = cardapio[indicedia][indicerefecao];
    console.log(`O cardápio para ${dia} na refeição de ${refeicao} é: ${resultado}`);
}