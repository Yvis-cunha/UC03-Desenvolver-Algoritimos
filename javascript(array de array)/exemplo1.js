// [['pao', 'feijoada', 'sopa'], ['bolo'], []]
let mat = []
mat[0] = ['pao', 'feijoada', 'sopa']
mat[1] = []
mat[1][0] = 'bolo'
mat[2] = []
let cardapio = []
let semana = ['segunda', 'terca']
let turno = ['cafe', 'almoco', 'jantar']
for(let i = 0; i < 2; i++){// dias da semana
    cardapio[i] = []
    for(let j = 0; j < 3; j++ ){//turnos (café, almoço, jantar)
        cardapio[i][j] = prompt(`Digite sua opção ${semana[i]} - ${turno[j]}: `)
      //  cardapio[i].push(prompt(`Digite sua opção ${semana[i]} - ${turno[j]}: `))
    }
}
console.table(cardapio) // mostra no formato tabela

cardapio[0].splice(0, 1) // remoção com busca

cardapio[0].splice(cardapio[0].indexOf('pao'), 1) // remoção com busca

console.log(cardapio)

cardapio[1][1] = 'Feijao e Arroz' // alteração de valor

console.log(cardapio)

// CRUD - CREATE READ UPDATE DELETE