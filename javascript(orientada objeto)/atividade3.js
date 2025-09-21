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

mostrar.nome = prompt("Digite o nome do produto: ")
mostrar.preco = Number (prompt("Digite o presço: "))
mostrar.quantidadeestoque = Number (prompt("Digite a quantidade de estoque: "))
mostrar.categoria = prompt("Digite a categoria: ")
mostrar.disponivel = prompt("Digite se está disponivel a venda: ")

mostrar.exibirinformacoes()

mostrar.definirPresco()