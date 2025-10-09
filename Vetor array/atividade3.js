import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let c, t
let arrayum=[]
let arraydois=[]
let arraytexto=[]

for(c = 0; c < 10; c = c + 1){
    arrayum[c] = prompt("Digite 3 palavra: ")    
}

for(c = 0; c < 10; c = c + 1){
    arraydois[c]=prompt("Digite mais 3 pavaras: ")
}

for(c = 0; c < 10; c = c + 1){
    arraytexto.push(arrayum[c])//[c] = arrayum[c]
    arraytexto.push(arraydois[c])//[c] = arraydois[c]
}



console.log(arrayum) // está mostrando o conteudo de cada arrayum
console.log(arraydois) // está mostrando o conteudo de cada arrayum
console.log("valores intercalando: ",arraytexto) // está mostrando o conteudo de cada arrayum
