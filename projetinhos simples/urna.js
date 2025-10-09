import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let canidatos = []

console.log("====URNA ELETRONICA====")

for(let l = 0; l < 3; l= l + 1){
    canidatos [l]=[]
        for(let c = 0; c < 2; c++){
            if(c === 0){
            canidatos[l][c] = (prompt("Digite o nome do canidato: "))
            }else{
                canidatos[l][c] = 0
            }
        }
}
let voto
do{
    voto = prompt(`
    ===Agora vamos realizar a votação===
    1- ${canidatos[0][0]}
    2- ${canidatos[1][0]}
    3- ${canidatos[2][0]}
    0- Finaliza votação
    `)

switch(voto){
    case '1':
       canidatos[0][1] = canidatos[0][1] + 1
    break
    case '2':
        canidatos[1][1] = canidatos[1][1] + 1
    break
    case '3':
        canidatos[2][1] = canidatos[2][1] + 1     

    }
}while(voto != 0)

    if(canidatos[0][1] > canidatos[1][1] && canidatos[0][1] > canidatos[2][1]){
        console.log("O vencedor é: ", canidatos[0][0])
    }else if(canidatos[1][1] > canidatos[0][1] && canidatos[1][1] > canidatos[2][1]){
        console.log("O vencedor é ", canidatos[1][0])
    }else if(canidatos[2][1] > canidatos[0][1] && canidatos[2][1] > canidatos[1][1]){
        console.log("O vencedor é: ", canidatos[2][0])
    }


console.log(`Canidato: ${canidatos[0][0]} Votos: ${canidatos[0][1]}`)
console.log(`Canidato: ${canidatos[1][0]} Votos: ${canidatos[1][1]}`)
console.log(`Canidato: ${canidatos[2][0]} Votos: ${canidatos[2][1]}`)

