import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let listasoft = []

export class Memoria{
    #tipo
    #frequencia
    #capacidade
    constructor(tipo, frequencia, capacidade){
        this.#tipo = tipo
        this.#frequencia = frequencia
        this.#capacidade = capacidade
    }
    // get set do tipo de memoria
    set tipo(tipomemoria){
        this.#tipo = tipomemoria
    }
    get tipo(){
        return this.#tipo
    }
    // get set da frenqeuncia
    set frequencia(frequenmemoria){
        this.#frequencia = frequenmemoria
    }
    get frequencia(){
        return this.#frequencia
    }
    // get set da capacidade
    set capacidade(capacimemoria){
        this.#capacidade = capacimemoria
    }
    get capacidade(){
        return this.#capacidade
    }
    usamemoria(){
        let qtd = prompt(`Digite a quantidade de uso de memoria: `)
        if(qtd > this.#capacidade){
            console.log(`É necesario liberar espaço`)
            this.liberarMemoria()
        }else{
            let resultqtd = this.#capacidade = (this.#capacidade - qtd)
            console.log(`A quantidade de uso em memoria é de: ${resultqtd}Mbps`)
        }
    }
    liberarMemoria(){
        let qtd = Number (prompt(`Digite quanto de memoria que liberar: `))
        this.#capacidade = (this.#capacidade - qtd)
    }
}
export class Processador{
    #marca
    #modelo
    #nucleo
    #velocidade
    constructor(marca, modelo, nucleo, velocidade){
        this.#marca = marca
        this.#modelo = modelo
        this.#nucleo = nucleo
        this.#velocidade = velocidade
    }
    set marca(marcaprocessador){
        this.#marca = marcaprocessador
    }
    get marca(){
        return this.#marca
    }
    set modelo(modeloprocessador){
        this.#modelo = modeloprocessador
    }
    get modelo(){
        return this.#modelo
    }
    set nucleo(nucleoprocessador){
        this.#nucleo = nucleoprocessador
    }
    get nucleo(){
        return this.#nucleo
    }
    set velocidade(vecolidadeprocessador){
        this.#velocidade = vecolidadeprocessador
    }
    get velocidade(){
        return this.#velocidade
    }
    executarprograma(){
        console.log(listasoft)
        let programa = prompt("Escolhar um programa acima para execeutar: ")
        let indice = listasoft.indexOf(programa)
        if(indice > -1){
            console.log(`O programa ${programa} Está executando: `)
        }else{
            console.log("Programa invalido")
        }
    }
}//classe armazenamento
export class Armazenamento{
    #tipo
    #capacidade
    #espacoultilizado
    constructor(tipo, capacidade, espacoultilizado){
        this.#tipo = tipo
        this.#capacidade = capacidade
        this.#espacoultilizado = espacoultilizado
    }
    set tipo(tipoarmazenamento){
        this.#tipo = tipoarmazenamento
    }
    get tipo(){
        return this.#tipo
    }
    set capacidade(capacidadearmazenamento){
        this.#capacidade = capacidadearmazenamento
    }
    get capacidade(){
        return this.#capacidade
    }
    set espacoultilizado(espacoultilizadoarmaze){
        this.#espacoultilizado = espacoultilizadoarmaze
    }
    get espacoultilizado(){
        return this.#espacoultilizado
    }
    espacoLivre(){
        let resultado = (this.#capacidade - this.#espacoultilizado)
        console.log(`O espaço livre em armazenamento é: ${resultado}Gb`)
    }
}// casse tela
export class Tela{
    #tamanho
    #resolucao
    constructor(tamanho, resolucao){
        this.#tamanho = tamanho
        this.#resolucao = resolucao
    }
    set tamanho(tamanhotela){
        this.#tamanho = tamanhotela
    }
    get tamanho(){
        return this.#tamanho
    }
    set resolucao(resolucaotela){
        this.#resolucao = resolucaotela
    }
    get resolucao(){
        return this.#resolucao
    }
    ligar(){
        console.log(`A tela está ligada!`)
    }
    desligar(){
        console.log(`A tela está desligada!`)
    }
}

export class Computador{
    #marca
    #modelo
    #memoria 
    #processador
    #armazenamento
    #tela
    constructor(marca, modelo, memoria, processador, armazenamento, tela){
        this.#marca = marca
        this.#modelo = modelo
        this.#memoria = memoria
        this.#processador = processador
        this.#armazenamento = armazenamento
        this.#tela = tela
    }
    set marca(marcaomputador){
        this.#marca = marcaomputador
    }
    get marca(){
        return this.#marca
    }
    set modelo(modelocomputador){
        this.#modelo = modelocomputador
    }
    get modelo(){
        return this.#modelo
    }
    set memoria(memoriacomputador){
        this.#memoria = memoriacomputador
    }
    get memoria(){
        return this.#memoria
    }
    set processador(processadorcomputador){
        this.#processador = processadorcomputador
    }
    get processador(){
        return this.#processador
    }
    set armazenamento(armazenamentocomputador){
        this.#armazenamento = armazenamentocomputador
    }
    get armazenamento(){
        return this.#armazenamento
    }
    set tela(telacomputador){
        this.#tela = telacomputador
    }
    get tela(){
        return this.#tela
    }
    imprimirfichatenica(){
        console.log(`
         ====ficha técnica====
        Memoria Ram: => ${this.#memoria.tipo}, frequencia: ${this.#memoria.frequencia}, Capacidade: ${this.#memoria.capacidade}Ghz
        Processador: => Marca: ${this.#processador.marca}, Modelo: ${this.#processador.modelo}, Nucleos: ${this.#processador.nucleo}, Clock: ${this.#processador.velocidade}
        Armazenamento: => Tipo: ${this.#armazenamento.tipo}, Capacidade: ${this.#armazenamento.capacidade}Gbs, Espaço Usado: ${this.#armazenamento.espacoultilizado}Gbs
        Tela: => Polegadas: ${this.#tela.tamanho}, Resolução: ${this.#tela.resolucao}    
        `)
    }
    instalarsoftware(){
        let  nomeinserir = prompt("\nDigite o nome do software que deseja instalar: ")
        let programa = 78
        if(programa <= (this.#armazenamento.capacidade - this.#armazenamento.espacoultilizado)){
            listasoft.push(nomeinserir)
            this.#armazenamento.espacoultilizado = this.#armazenamento.espacoultilizado  + 78
            console.log(`Programa: ${nomeinserir} Instalado!`)
        }else{
            console.log("\nVocê não possuir armazenamento suficiente!\n")
        }   
    }
    listasoftare(){
        console.log(listasoft)
    }
    removersoftware(){
        console.log(listasoft)
        let nomeremover = prompt("Digite o nome do programa que deseja desinstalar ")
        let indice = listasoft.indexOf(nomeremover)
        if(indice > -1){
            listasoft.splice(indice, 1)
            this.#armazenamento.espacoultilizado = this.#armazenamento.espacoultilizado  - 78
        }else{
            console.log("Programa invalido")
        }
    }
}