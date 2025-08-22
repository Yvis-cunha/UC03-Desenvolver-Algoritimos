import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt


let idade, situacao

idade = Number (prompt("Digite sua idade: "))

if(idade <= 6){
    console.log("Entrda Gratuita")

}else if(idade > 6 && idade <= 17 || situacao == 1){
    situacao = Number (prompt("Se for estudante digite 1, se não digite 2: "))
    console.log("Tarifa meia")

}else if(idade >=18 && idade <= 59){
    console.log("Tarifa Inteira")

}else{
    console.log("Tarifa Gratuita")
}