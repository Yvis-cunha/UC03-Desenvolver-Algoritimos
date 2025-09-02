import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let quantidadepa=0, quantidadeimpa =0
let contador
let arrey = [];
let resultantepa = [];
let resultanteimpa = [];

for(contador = 0; contador <= 4; contador = contador + 1){
        arrey[contador] = Number (prompt ("Digite um número: "))
        if(arrey[contador] % 2 == 0){
            quantidadepa = quantidadepa + 1
            resultantepa.push(arrey[contador]) //= arrey[contador]
        
        }if(arrey[contador] % 2 !== 0){
            quantidadeimpa = quantidadeimpa + 1
            resultanteimpa.push(arrey[contador]) //= arrey[contador]
        }
        
}

console.log(arrey)
console.log("Quantidade impá",quantidadeimpa)
console.log("Quantidade pá",quantidadepa)
console.log("Numéros pá: ",resultantepa)
console.log("Numéros impá: ",resultanteimpa)
