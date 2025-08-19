import PromptSync from "prompt-sync"; // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let valorconta, numerpessoas, valortotal, valorporpessoa
valorconta = Number (prompt("Digte o valor da conta: R$ "))
numerpessoas = Number (prompt("Digite a quantidades de pessoas: "))

valortotal = valorconta*1.10

valorporpessoa = valortotal/numerpessoas

console.log("Valor da conta com acressimo de 10% é: R$", valortotal.toFixed(2))
console.log("O valor por pessoa é: R$", valorporpessoa.toFixed(2))
