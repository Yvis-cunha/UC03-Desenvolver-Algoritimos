import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let brindes=['chaveiro','adesivo','boné']
let carrinhocompra=['biscoito','macarrao','feijao','cuscuz','farinha']//array com os produtos do carrinho
let promocao = 'biscoito'
let qtditens // varial para receber a quantidade de itens para aparecer
let itenremovido
let carrinhonovo = []
let indice
let indicepromo
let carbrinde=[]
let contadorb, contadorc
// itens do carrinho original
console.log(carrinhocompra)
// solicita e receber o valor da quantidade
qtditens = Number (prompt("Quantos itens deseja que apareça em seu carrinho ? "))
// Itens que ficou após escolher a quantidade
console.log("Itens do carrinho:")
//carrinhonovo receber carrinhocompra após receber o valor da quantidade final
carrinhonovo = carrinhocompra.slice(0, qtditens)

console.log(carrinhonovo)

itenremovido = prompt("Qual item deseja retira do carrinho ?")
indice = carrinhonovo.indexOf(itenremovido)

//verificar o indice, se ele for maior que -1 significa que foi encontrado o elemnto dentro
if(indice > -1){
    carrinhonovo.splice(indice,1)
}
//mostra o carrinho já atualizado
console.log(carrinhonovo)

indicepromo = carrinhonovo.indexOf('biscoito')

console.log("indice do iten em promoção",indicepromo) // indice do item em promoção

if(indicepromo > -1){
    console.log("Na sua lista possuir um produto em promoção, esse item é: ",promocao)
}


for(contadorb = 0; contadorb < carrinhonovo.length; contadorb = contadorb + 1){
    carbrinde.push(carrinhonovo[contadorb])
}
for(contadorc = 0; contadorc < brindes.length; contadorc = contadorc + 1){
    carbrinde.push(brindes[contadorc])
}

console.log(carbrinde)