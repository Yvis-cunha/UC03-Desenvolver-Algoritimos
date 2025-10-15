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
