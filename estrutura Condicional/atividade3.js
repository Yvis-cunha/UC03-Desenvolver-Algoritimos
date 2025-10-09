import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt


let valorCompra, desconto

valorCompra = Number(prompt('Informe o valor da compra: '))

if(valorCompra <= 100){
    console.log("Sem desconto")

}else if(valorCompra >= 101 && valorCompra <= 500){
    desconto = valorCompra * 0.95
    console.log("Desconto de 5% ficando o valor de: R$", desconto)
    
    if(valorCompra >= 300){
        console.log("Paranbês você ganhou um cupom bônus para usar na próxima compra!!")

    }
}else if(valorCompra > 500){
    desconto = valorCompra * 0.90
    console.log("Desconto de 10% ficando o valor de: R$", desconto)
}