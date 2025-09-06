import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let arrayprodutos=['camisa','calça','bermuda','cueca','calcinha','vestido','roupao','toalha','fardamento','casaco']
let novasroupa = ['']

console.log("Array original:")
console.log(arrayprodutos) // mostrar o array com todas as palvras

arrayprodutos.splice(3, 4) //

console.log("Array com produtos que ficou após a remover os itens com defeitos:")
console.log(arrayprodutos)

