//Função para saque
export function sacar (saldo, valor){
    saldo = (saldo - valor)
    return saldo
}
//Função para deposito
export function deposito(saldo, valor){
    saldo = (saldo + valor)
    return saldo
}
//Função média aritimetrica
export function media (n1,n2,n3,resultado){
    resultado = (n1+n2+n3)/3 //pergunta por que preciso declarar a variavel aqui sendo q as outras atividades não precisou
    return resultado
}

//Função converte fahrenheit para celcius
export function celciusPfahen (celcius){
    let valorfinal = (celcius*1.8)+32
    return valorfinal
}

//contador para simula instalação
export function simularInstalacaoLimpa(tempoPorPorcentagemMs) {
    let progresso = 0;
    const total = 100;
    
    function contar() {
        progresso++;
        
        // 1. MUDANÇA AQUI: Usa process.stdout.write e '\r'
        // Isso funciona em ambientes Node.js (que o VS Code usa no terminal)
        process.stdout.write(`Instalando... ${progresso}% \r`);

        // 2. Checa se ainda não terminou
        if (progresso < total) {
            setTimeout(contar, tempoPorPorcentagemMs);
        } else {
            // 3. Finaliza a simulação
            // Importante: No final, você precisa de um console.log() ou \n para
            // pular para a próxima linha e fixar o resultado final.
            console.log(`Instalando... ${total}%`); // Fixa o 100%
            console.log("\n✅ INSTALAÇÃO CONCLUÍDA!");
        }
    }
    contar();
}
simularInstalacaoLimpa(50)