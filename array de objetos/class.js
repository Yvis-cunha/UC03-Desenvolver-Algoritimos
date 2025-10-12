import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

export class Cliente{
    #cpf
    #contato
    constructor(cpf, nome, contato){
        this.#cpf = cpf
        this.nome = nome
        this.#contato = contato
    }
    set cpf(cpfcliente){
        this.#cpf = cpfcliente
    }
    get cpf(){
        return this.#cpf
    }
    set contato(contatocliente){
        this.#contato = contatocliente
    }
    get contato(){
        return this.#contato
    }
}
export class Quarto{
    constructor(numero, tipo){
        this.numero = numero
        this.tipo = tipo
    }
}
export class Reserva{
    constructor(quarto, datareserva, cliente){
        this.quarto = quarto
        this.datareserva = datareserva 
        this.cliente = cliente
    }
}
export class Hotel{
    constructor(nome, quartos = [], reservas = []){
        this.nome = nome
        this.quartos = quartos
        this.reservas = reservas
    }
    adicionarquarto(numero, tipo){
        const novoquarto = new Quarto(prompt("Digite o numero do quarto: "),prompt("Digite o tipo do quarto simples ou de luxo: "))        
        this.quartos.push(novoquarto)
        console.log(`Quarto numero: ${numero} Tipo: ${tipo} adicionado!`)
    }
    reservarQuarto(){
        const cliente1 = new Cliente()
        cliente1.cpf = Number(prompt("Digite seu cpf: "))
        cliente1.nome = prompt("Digite seu nome: ")        
        cliente1.contato = Number (prompt("Digite seu contato: "))
        this.reservas.push(`cliente: ${cliente1.nome}, CPF: ${cliente1.cpf}, Contato: ${cliente1.contato}`)
        console.log(this.reservas)
        // const reserva1 = new Reserva()
        // reserva1.datareserva = prompt("Digite a data:")
        // this.reservas.push(reserva1)
        // console.log(this.reservas)
        
        // let numQuarto = Number (prompt("Digite o número do quarto: "))
        // const quartoEncontrado = this.quartos.find(q => q.numero === numQuarto)
        // if(!quartoEncontrado){   
        //     console.log("Quarto não encontrado!")   
        // }
        // const reserva = new Reserva(quartoEncontrado, cliente)
        // this.reservas.push(reserva)
        // console.log(this.reservas)
        


    }
    cancelarReserva(quarto, data, cliente){

    }
    listaQuartosDisponiveis(){
        console.log(this.quartos)
    }
    listarReservas(){

    }
    informacoesReserva(){

    }
}
export class ErroHotel extends Error{
    constructor(message){
        super(message)
    }

}
