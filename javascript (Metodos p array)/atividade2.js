import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
let busca
let contador
let arrayprodutos=['camisa','calça','bermuda','cueca','calcinha','vestido','roupao','toalha','fardamento','casaco']
let novasroupa = ['body','moleton','cropped','blazer','saia','pijama','maio','biquini','sunga','sueter']
let arrayestoque = []

console.log("Array original:")
console.log(arrayprodutos) // mostrar o array com todas as palvras
// remover 3 itens da 4 posição
arrayprodutos.splice(3, 3) 

console.log("Array com produtos que ficou após a remover os itens com defeitos:")
console.log(arrayprodutos)

//Adiciona as roupas que ficou do catalago antigo ao catalago novo
for(contador = 0; contador < arrayprodutos.length; contador = contador +1){
    arrayestoque.push(arrayprodutos[contador])
    
}//Adiciona o novo catalago ao novo array
for(contador = 0; contador < novasroupa.length; contador = contador +1){
    arrayestoque.push(novasroupa[contador])
}

console.log("Novo estoque atualizado")
console.log(arrayestoque)

busca = prompt("Procure um produto:")

if(arrayestoque.includes(busca)){// verificar se o que busca recebeu está dentro de arraystoque
    console.log("produto disponivel!")
    console.log("A posição desse iten é: ",arrayestoque.indexOf(busca))
}else{
    console.log("Produto não existe")
}