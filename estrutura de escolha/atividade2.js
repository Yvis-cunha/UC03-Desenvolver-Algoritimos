import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let operacao, tipo, valor1, valor2, resultado

operacao = prompt ("Qual tipo de operação deseja ? 1 para basica e 2 para avançada: ")

if(operacao == 1){
    tipo = prompt ("Qual tipo de operação deseja => soma, subtração, multiplicação, divisão: ").toLowerCase() 
    valor1 = Number (prompt ("Digite o primeiro número: " ))
    valor2 = Number (prompt ("Digite o segundo número: " ))

    switch(tipo){
        case 'soma':
            resultado = valor1 + valor2
            console.log("A soma entre o valor: ",valor1," e ",valor2," é: ",resultado)
        break;
        
        case 'subtração':
            resultado = valor1 - valor2
            console.log("A subtração entre o valor: ",valor1," e ",valor2," é: ",resultado)
        break;
        
        case 'multiplicação':
            resultado = valor1 * valor2
            console.log("A multiplicação entre o valor: ",valor1," e ",valor2," é: ",resultado)
        break;

        case 'divisão':
            if(valor1 != 0){
            resultado = valor1 / valor2
            console.log("A divisão do valor:",valor1," Por ",valor2," é: ",resultado)
            }else{
                console.log("Denominador não pode ser zero")
            }
        break;    

    }

}else if(operacao == 2){
    tipo = prompt ("Qual tipo de operação deseja => Raiz quadrada, potencição: ")
    //valor1 = Number (prompt ("Digite o primeiro número: " ))
    //valor2 = Number (prompt ("Digite o segundo número: " ))

    switch(tipo){
        case 'raiz quadrada':
            valor1 = Number (prompt ("Digite o número: " ))
            resultado = Math.sqrt(valor1);
            console.log("A raiz quadrada de: ",valor1," é ",resultado)
        break;

        case 'potenciação':
            valor1 = Number (prompt ("Digite o valor da base: " ))
            valor2 = Number (prompt ("Digite o valor do expoente: " ))
            resultado = Math.pow(valor1,valor2)
            console.log("A potenciação é ", resultado)
        break;    
    }

}else{
    console.log("Operação invalida!")
}