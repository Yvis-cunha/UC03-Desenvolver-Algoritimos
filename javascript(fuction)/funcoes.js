//Função para saque
export function sacar (saldo, valor){
    saldo = (saldo - valor)
    return saldo
}
//Função para deposito
export function deposito(saldo, valor){
    saldo = (saldo + valor)
    return saldo
}