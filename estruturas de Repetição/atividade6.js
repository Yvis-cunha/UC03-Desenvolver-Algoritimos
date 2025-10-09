const salarioMensal = Number(prompt("Digite o seu salário mensal: R$"));
let totalGastos = 0;
let maiorGasto = 0;
let diaMaiorGasto = 0;
let menorGasto = 0;
let diaMenorGasto = 0;

console.log("\n--- Por favor, insira os gastos de cada dia ---");

// Processa o primeiro dia SEPARADAMENTE para iniciar as variáveis
const gastoDia1 = Number(prompt(`Digite o gasto do dia 1: R$`));

// O gasto do primeiro dia é o ponto de partida / para usar abaixo
totalGastos = gastoDia1;
maiorGasto = gastoDia1;
menorGasto = gastoDia1;
diaMaiorGasto = 1;
diaMenorGasto = 1;

//  Agora, um laço  dos 29 dias restantes
for (let dia = 2; dia <= 30; dia++) {
    const gastoDiario = Number(prompt(`Digite o gasto do dia ${dia}: R$`));

    totalGastos += gastoDiario;

    // Compara com o maior gasto registrado até agora
    if (gastoDiario > maiorGasto) {
        maiorGasto = gastoDiario;
        diaMaiorGasto = dia;
    }

    // Compara com o menor gasto registrado até agora
    if (gastoDiario < menorGasto) {
        menorGasto = gastoDiario;
        diaMenorGasto = dia;
    }
}

//  Exibe o relatório final 
console.log("\n--- Relatório de Gastos do Mês ---");
console.log(`Salário Mensal: R$ ${salarioMensal.toFixed(2)}`);
console.log(`Total de Gastos no Mês: R$ ${totalGastos.toFixed(2)}`);

const saldo = salarioMensal - totalGastos;

if (saldo >= 0) {
    console.log(`\n Parabéns! Você conseguiu economizar: R$ ${saldo.toFixed(2)}`);
} else {
    console.log(`\n Atenção! Você gastou R$ ${Math.abs(saldo).toFixed(2)} a mais do que o seu salário.`);
}

console.log(`O dia de maior gasto foi o dia ${diaMaiorGasto}, com R$ ${maiorGasto.toFixed(2)}.`);
console.log(`O dia de menor gasto foi o dia ${diaMenorGasto}, com R$ ${menorGasto.toFixed(2)}.`);
//ok