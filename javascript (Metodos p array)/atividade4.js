import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let carrinhocompra=['biscoito','macarrao','feijao','cuscuz','farinha']//array com os produtos do carrinho
let qtditens // varial para receber a quantidade de itens para aparecer
let itenremovido
let indice

qtditens = Number (prompt("Quantos itens deseja que apareça em seu carrinho ? "))// solicita e receber o valor da quantidade

console.log("Itens do carrinho:")
//console.log(carrinhocompra.splice(0, qtditens))


// itenremovido = prompt("Escolhar um iten a ser removido: ")

// indice = carrinhocompra.indexOf(itenremovido)

// if(indice > -1){
//     carrinhocompra.splice(indice,1)

// }
 console.log(carrinhocompra.indexOf(1))
// //console.log(carrinhocompra)