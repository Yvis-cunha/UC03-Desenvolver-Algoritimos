import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt


let amburgue, qtd

amburgue = prompt("Escolha qual Hambúrgue você deseja: Burguer, X-burgue, X-salada, X-bacon, X-bacon Egg, X-tudo, Caipira => ").toLowerCase() //converte para minisculo
qtd = Number (prompt("A quantidade que deseja: "))

switch(amburgue){
    case 'burguer':
        console.log("O valor do hambúrgue é R$19,50 a Quantidade escolhida foi",qtd, " e o valor a pagar é:", qtd * 19.50)
    break;
    case 'x-burgue':
         console.log("O valor do X-burgue é R$21,50 a Quantidade escolhida foi",qtd, " e o valor a pagar é:", qtd * 21.50)
    break;
    case 'x-salada':
        console.log("O valor do X-salada é R$21,50 a Quantidade escolhida foi",qtd, " e o valor a pagar é:", qtd * 23.50)
    break;
    case 'x-bacon':
        console.log("O valor do X-bacon é R$24,50 a Quantidade escolhida foi",qtd, " e o valor a pagar é:", qtd * 24.50)
    break;
    case 'x-bacon Egg':
        console.log("O valor do X-bacon Egg é R$25,50 a Quantidade escolhida foi",qtd, " e o valor a pagar é:", qtd * 25.50)
    break;
    case 'x-tudo':
        console.log("O valor do X-bacon Egg é R$25,50 a Quantidade escolhida foi",qtd, " e o valor a pagar é:", qtd * 25.50)
    break;
    case 'caipira':
        console.log("O valor do Caipira é R$22,50 a Quantidade escolhida foi",qtd, " e o valor a pagar é:", qtd * 22.50)
    break;                           
}