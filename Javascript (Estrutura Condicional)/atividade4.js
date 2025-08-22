import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let salario, valorEmprestimo, numeropacela, jurofixo, parcela, a30dosalario

salario = Number (prompt("Digite seu salario: "))
valorEmprestimo = Number (prompt("Digite o valor do emprestimo que deseja: "))
numeropacela = Number (prompt("Diigte o número de parcelas: "))

jurofixo = numeropacela * 3.5
parcela = valorEmprestimo / numeropacela
a30dosalario = (salario * 0.030)

if(parcela > a30dosalario){
    console.log("Negado")

}