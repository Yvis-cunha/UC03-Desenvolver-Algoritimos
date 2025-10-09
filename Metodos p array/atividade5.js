import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let listAnimais=['leao','jacare','macaco','egua','cobra']//lista de animais de origem
let qtdanimais// quantidade de animais que vai soma
let contadorAni //contador da repetição que adiciona os novos animais
let nomes // receber os nome dos novos animais
let tamanhoarray
let escolha
let indiceAnimal

console.log(listAnimais)//mostrar o array com os animaos de origem

qtdanimais = Number  (prompt("Quantos animais que inserir na lista ?"))//pergunta a quantidade de animais que deseja adicionar a lista
//Essa repetição serve para adicionar as palvras dentro do arras lista de animais, nesse caso não se usar contador no push para que ele leva a palvra inteira
for(contadorAni = 0; contadorAni < qtdanimais; contadorAni = contadorAni + 1){
    nomes = prompt("Qual nome do animal: ")
    listAnimais.push(nomes)   
}
//mostrar a lista de animais atualizada
console.log(listAnimais)

//mostrar o tamanho do array
tamanhoarray = listAnimais.length
console.log("Tamnho do array: ",tamanhoarray)


escolha = prompt("Remover o primeiro animal digite 1, para remover o ultimo digite 2, para remover por indice digite 3: ")
if(escolha == "1"){
    listAnimais.shift()
    console.log(listAnimais)
}else if(escolha == "2"){
    listAnimais.pop()
    console.log(listAnimais)
}else if(escolha == "3"){
    indiceAnimal = prompt("Qual o indice deseja remover: ")
    listAnimais.splice(indiceAnimal, 1)
    console.log(listAnimais)
}