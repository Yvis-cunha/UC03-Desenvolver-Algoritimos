import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

export class cliente{
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
        this.contato = contatocliente
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
export class hotel{
    constructor(nome, quartos, reservas){
        this.nome = nome
        this.quartos = quartos
        this.reservas = reservas
    }
}
