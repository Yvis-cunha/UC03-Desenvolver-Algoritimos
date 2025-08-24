import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let valor, moeda, convensao, dolar = 5.424, euro = 6.353, peso = 0.0042, libra = 7.326, franco = 6.753

valor = Number (prompt("Digite o valor que deseja converte: R$"))
moeda = prompt("Digite qual moeda deseja converte => dolar, euro, peso, libra, franco: ").toLocaleLowerCase()

switch (moeda){
    case "dolar":
        convensao =  valor / dolar
        console.log("O valor inserido foi R$",valor,"e convertando em dolá é: $",convensao.toFixed(2))
    break;

    case "euro":
        convensao = valor / euro
        console.log("O valor inserido foi R$",valor,"e convertando em Euro é: €",convensao.toFixed(2))
    break;
    
    case "peso":
        convensao = valor / peso
        console.log("O valor inserido foi R$",valor,"e convertando em peso é: $MN",convensao.toFixed(2))
    break;
    
    case "libra":
        convensao = valor / libra
        console.log("O valor inserido foi R$",valor,"e convertando em libra é: £",convensao.toFixed(2))
    break;

    case "franco":
        convensao = valor / franco
        console.log("O valor inserido foi R$",valor,"e convertando em franco é: Fr",convensao.toFixed(2))
    break;    

    default:
        console.log("Moeda invalida!")
}