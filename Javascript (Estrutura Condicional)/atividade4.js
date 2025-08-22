import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let salario, valorEmprestimo, numeropacela, parcela, a30dosalario, totalempres, jurostotal
const juroFixo = 0.035

salario = Number (prompt("Digite seu salario: "))
valorEmprestimo = Number (prompt("Digite o valor do emprestimo que deseja: "))
numeropacela = Number (prompt("Diigte o número de parcelas: "))

parcela = valorEmprestimo * (juroFixo / (1 - Math.pow(1 + juroFixo, -numeropacela)))
a30dosalario = (salario * 0.30)

if(parcela > a30dosalario){
    console.log("\nStatus: Empréstimo NEGADO.")
    console.log("Motivo: A parcela de R$ " + parcela.toFixed(2) + " excede 30% do seu salário.")

}else{
    totalempres = parcela * numeropacela
    console.log("\nStatus: Empréstimo APROVADO!")
    console.log("Total a ser pago no final: R$ " + valorEmprestimo.toFixed(2))
    
}