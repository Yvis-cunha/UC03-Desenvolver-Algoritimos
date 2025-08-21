import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let veloPermitido, veloCarro, maxima

veloPermitido = Number(prompt('Qual a velocidade permitida: '))
veloCarro = Number(prompt('Velocidade média do veiculo: '))

maxima = veloPermitido + (veloPermitido*0.10)


if(veloCarro >= maxima){
    console.log("Atenção: Acima permitdo, multa grave!")

}else if(veloCarro > veloPermitido && veloCarro < maxima){
    console.log("Atenção: Acima permitdo, multa leve!")

}else{
    console.log("Velocidade dentro do limite")
}