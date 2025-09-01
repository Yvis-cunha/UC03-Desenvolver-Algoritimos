import promptSync from "prompt-sync"; 
const prompt = promptSync(); 

let total = 0
let quantidade = 0
let troco = 0
let valorPago = 0

console.log("===================CAIXA REGISTRADORA===========================")
console.log("\n======DIGITE 0 QUANDO QUISER FINALIZAR A COMPRA================")

let preco = Number(prompt("\nDIGITE O VALOR DO PRODUTO: "));
while (preco != 0) {
    total += preco
    quantidade++
    preco = Number(prompt("DIGITE O VALOR DO PRODUTO: "));
}  
if (quantidade === 0) {
    console.log("Nenhum produto comprado.");
} else {


    valorPago = Number(prompt("Informe o valor pago pelo cliente: "));
    troco = valorPago - total;
    console.log(`\nValor total da compra: R$ ${total.toFixed(2)}`);
    console.log(`Quantidade de produtos: ${quantidade}`);
    console.log(`Troco: R$ ${troco.toFixed(2)}`);
}
//ok