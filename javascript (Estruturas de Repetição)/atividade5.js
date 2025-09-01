import promptSync from "prompt-sync"; 
const prompt = promptSync(); 

let SalarioInicial = 510;
let SalarioAtual = SalarioInicial;
let percentual = 1.5;

console.log('\n Histórico Salarial do Funcionário');
console.log(`Salário inicial: R$ ${SalarioInicial.toFixed(2)}`);

for (let ano = 2011; ano <= 2025; ano++) {
    if (ano > 2010) {
        SalarioAtual += SalarioAtual * (percentual / 100); // o valor será somado por ele mesmo e armazena na variavel
        percentual += 1.5; // Aumenta o percentual em 1.5 para o próximo ano
    }
    /**
     * Calcula o percentual a ser exibido, subtraindo 1.5 caso o ano seja superior a 2010.
     * Isso ajusta o valor do percentual para anos mais recentes, aplicando uma redução específica.*/
    let percentualExibido = percentual - (ano > 2010 ? 1.5 : 0); // se for verdadeiro ele conta e armazena
    console.log('-----------------------------');
    console.log(`Ano: ${ano}`);
    console.log(`Salário: R$ ${SalarioAtual.toFixed(2)}`);
    console.log(`Percentual de aumento: ${percentualExibido.toFixed(2)}%`);
}
console.log('-----------------------------');