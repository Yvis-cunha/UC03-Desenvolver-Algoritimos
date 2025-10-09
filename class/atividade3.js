import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt



class Produto{
    nome
    preco
    quantidadeestoque
    categoria
    disponivel

    exibirinformacoes(){
        console.log(`Nome: ${this.nome}\nPresço: R$${this.preco}\nQtdeEstoque: ${this.quantidadeestoque}\nCategoria:${this.categoria}\nDisponibilidade: ${this.disponivel}\n`)
    }
    mostrarquantidade(){
        console.log(`Quantidade em estoque disponivel: ${this.quantidadeestoque} `)
    }
    adicionarEstoque(){
        let maisprodutoNumber = Number (prompt("Quanto deseja adicionar ao estoque? "))
        quantidadeestoque = quantidadeestoque + maisprodutoNumber
    }
    removerEstoque(){
        let menosproduto = Number (prompt("Quanto deseja adicionar ao estoque? "))
        quantidadeestoque = quantidadeestoque - menosproduto
    }
    definirPresco(){
        let preco = Number (prompt(`Digite o presço do produto:`))
    }
    verificarDisponibilidade(){
        console.log(`Disponibilidade: ${this.disponivel} `)
    }
}
let mostrar = new Produto()
let mostrar1 = new Produto()


mostrar.nome = prompt("Digite o nome do produto: ")
mostrar.preco = Number (prompt("Digite o presço: ")).toFixed(2)
mostrar.quantidadeestoque = Number (prompt("Digite a quantidade de estoque: "))
mostrar.categoria = prompt("Digite a categoria: ")
mostrar.disponivel = prompt("Digite se está disponivel a venda: ")

mostrar.exibirinformacoes()
mostrar.definirPresco()

mostrar1.nome = 'aruela'
mostrar1.preco = 1.50.toFixed(2)
mostrar1.quantidadeestoque = 75
mostrar1.categoria = 'Ferragens'
mostrar1.disponivel = 'disponivel'

mostrar1.exibirinformacoes()