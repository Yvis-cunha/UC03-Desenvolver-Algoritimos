import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

// // forma declarada - forma tradicional
// function soma (){// sem paramentro - sem retorno
//     let n1 = Number(prompt("digite um número: "))
//     let n2 = Number(prompt("digite um número: "))
//     console.log(`soma: ${n1+n2}`)
// }

// soma()
//=====================================================================
// forma declarada - forma tradicional
function subtracao (n1,n2){//com paramtero e retorno
    return n1=n2
}
let n1 = Number(prompt("digite um número: "))
let n2 = Number(prompt("digite um número: "))

let sub = subtracao(n1,n2)
console.log(sub)


//======================================================================