import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, positivo = 0, negativo =0

pergunta1 = prompt("Telefonou para a vítima?, sim ou não: ").toLowerCase()
pergunta2 = prompt("Esteve no local do crime?, sim ou não: ").toLowerCase()
pergunta3 = prompt("mora perto da vitima, sim ou não: ").toLowerCase()
pergunta4 = prompt("Devia para a vítima, sim ou não: ").toLowerCase()
pergunta5 = prompt("Já trabalhou com a vítima, sim ou não: ").toLowerCase()

switch(pergunta1){
    case 'sim':
        positivo = positivo + 1
    break;
    case 'não':
        negativo = negativo + 1
    break;         
}
switch(pergunta2){
    case 'sim':
        positivo = positivo + 1
    break;
    case 'não':
        negativo = negativo + 1
    break;        
}
switch(pergunta3){
    case 'sim':
        positivo = positivo + 1
    break;
    case 'não':
        negativo = negativo + 1
    break;           
}
switch(pergunta4){
    case 'sim':
        positivo = positivo + 1
    break;
    case 'não':
        negativo = negativo + 1
    break;        
}
switch(pergunta5){
    case 'sim':
        positivo = positivo + 1
    break;
    case 'não':
        negativo = negativo  + 1
    break;        
}

if(positivo == 2){
    console.log("Suspeita")
}else if(positivo >=3 && positivo <=4){
    console.log("Cúmplice")
}else if(positivo == 5){
    console.log("Assassino")
}else{
    console.log("Inocente")
}




//console.log("total positivo",positivo)
//console.log("total negativo",negativo)