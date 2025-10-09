import PromptSync from "prompt-sync"; // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let nomeProduto, presco, porcentagem, desconto

nomeProduto = prompt('Digite o nome do produto: ')
presco = Number(prompt('Digite o presço do produto: '))
porcentagem = Number(prompt('Digite o valor do desconto: '))

desconto = porcentagem/100*presco

console.log("O produtudo inserido foi: ",nomeProduto," E o presço dele é: R$",presco," E o valor com desconto foi: R$",desconto,)