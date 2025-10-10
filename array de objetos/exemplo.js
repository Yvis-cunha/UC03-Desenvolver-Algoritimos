import PromptSync from "prompt-sync"
const prompt = PromptSync() 

//criação do objeto literal (objeto com atributos e métodos)
let pessoa1 = {
    nome: prompt('Digite seu nome: '), 
    dataNasc: new Date(prompt('Digite sua data de Nascimento AAAA/MM/DD:')), 
    sexo: prompt('Digite seu sexo: '), 
    cpf: prompt('Digite seu cpf: '),
    mostarInfo: function (){
        console.log(`Dados Pessoais: ${pessoa1.nome}, ${pessoa1.dataNasc.toLocaleDateString('pt-BR')}`)
    }
}
pessoa1.mostarInfo() // chamada do método do objeto

class Pessoa{ // criação da classe, atributos e métodos
    constructor(nome, dataNasc, sexo, cpf){
        this.nome = nome
        this.dataNasc = dataNasc
        this.sexo = sexo
        this.cpf = cpf
    }
    mostarInfo(){
        console.log(`Dados Pessoais: ${this.nome}, ${this.dataNasc.toLocaleDateString('pt-BR')}`)
    }
}
let array_pessoas = [] // criação do array
//criação do objeto Pessoa de acordo com o construtor da classe
let pessoa2 = new Pessoa(prompt('Digite seu nome: '), 
              new Date(prompt('Digite sua data de Nascimento AAAA/MM/DD:')), 
              prompt('Digite seu sexo: '),
              prompt('Digite seu cpf: '))
pessoa2.mostarInfo() //chamada do método da classe
array_pessoas.push(pessoa2) // adição do objeto no array
array_pessoas.push(pessoa1)
console.log(array_pessoas) // mostra o array completo
console.log(array_pessoas[0]) // mostra o primeiro elemento do array
console.log(array_pessoas[0].nome) // mostra o atributo nome do primeiro objeto do array

let date1 = new Date(2025, 10, 9)  // instância da data passando os valores AAAA/MM/DD como número
let date2 = new Date("2025/10/09")  // instância da data passando os valores AAAA/MM/DD como string
let date = new Date() // instância da data atual 
console.log(date.toLocaleString('pt-BR')) // mostrando a data como string no formato brasileiro
console.log(date.toLocaleDateString('pt-BR'))// mostrando somente a data como string
console.log(date.toLocaleTimeString('pt-BR'))// mostrando somente a hora como string