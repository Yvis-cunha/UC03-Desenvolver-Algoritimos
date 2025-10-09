import promptSync from 'prompt-sync'
const prompt = promptSync()

console.log('Sequência numérica FOR: ')
for(let i = 1; i <= 15; i = i + 2){// i = i + 1 - i++ para aumento de 1 em 1
    console.log(i)
}

console.log('Sequência numérica While: ')
let y = 1
while(y <= 15){ 
    y = y + 2  
    if(y === 11){
        //console.log(y)
        break // para toda a repetição
        continue // para apenas a repetição atual
    }
    console.log(y)
   
}

y = 1
while(true){
    console.log(y)
    y = y + 2 // y += 2
    if(y === 15){//condição de parada
        console.log(y)
        break
    }

}

console.log('Sequência numérica Do-While: ')
let x = 1
do{
    console.log(x)
    x = x + 2
}while(x <= 15)
