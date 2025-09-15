import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let nomes = ["bernardo", "Caio", "Diana", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Júlia"]
let media = [3.5, 2.0, 9.2, 6.5, 5.8, 4.0, 1.7, 8.1, 9.5]
let satus = ['Ativo','Inativo','Ativo','Inativo','Ativo','Inativo','Ativo','Inativo','Ativo']
let mediageral
let result
let medialaunos
let buscarnome

console.log('====Alunos aprovados====')
media.forEach((media, indice) => {
     if (media >= 7) {    
    console.log(nomes[indice],' - Média:',media)
    }        
})

mediageral = media.reduce((acumulador, categoriaAtual, indice) => {
    return (acumulador + media[indice])    
}) 


prompt('Digite sim para buscar por aluno e zero para sair')
if(buscarnome == 'sim'){
    console.log(nomes[indice],' - Média:',media)
}








// medialaunos = mediageral / media.length
// console.log(medialaunos.toFixed(2))