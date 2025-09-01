import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
let c=0
let numero = Number (prompt ( " Digite o numero inteiro: "))
 
 
for(let i = 1; i <= numero; i++){
 
 
if(numero%i===0){
 
    console.log(" o numero:", numero, " é dividido por ", i)
 
     c = c + 1
}
 
 }if( c==2){
    console.log (" o numero é primo")
}else {  
    console.log (" o numero não é primo")
 
}