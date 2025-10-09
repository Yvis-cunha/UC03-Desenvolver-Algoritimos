import promptSync from "prompt-sync";
const prompt = promptSync();

let a = 0, b = 1, proximoTermo; //variaveis

let num = Number(prompt("Digite Quantos Termos da SÉRIE DE FIBONACCI, você que Visualizar: "));
console.log("Série de Fibonacci:");

//estrutura de repetição
for (let i = 1; i <= num; i++) {// ele só vai repetir ate a quantidade de numeros escolhidas
    console.log(a);
    proximoTermo = a + b;
    a = b;
    b = proximoTermo;//soma do numero com anterior
}
//ok 