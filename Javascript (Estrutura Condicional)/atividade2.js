import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let consumokwh, kwh, situação, atraso

consumokwh = Number(prompt('Informe o consumo em kwh: '))
situação = Number(prompt('Se sua conta estiver em atrasdo digite 1, se estiver em dia digite 2: '))



if(consumokwh <= 100 && situação === 1){
    kwh = (consumokwh * 1.20)
    atraso = (kwh*0.05) + kwh
    console.log("O valor da sua conta final é :", atraso)  
    
}else if(consumokwh <= 100 && situação === 2){
    kwh = consumokwh * 1.70 
    console.log("O valor da sua conta conta final é :", kwh)

}else if(consumokwh > 100 && situação === 1){
    kwh = (consumokwh * 1.70)
    atraso = (kwh*0.05) + kwh
    console.log("O valor da sua conta conta final é :", atraso)

}else if(consumokwh > 100 && situação === 2){
    kwh = consumokwh * 1.20
    console.log("O valor da sua conta conta final é :", kwh)
}




