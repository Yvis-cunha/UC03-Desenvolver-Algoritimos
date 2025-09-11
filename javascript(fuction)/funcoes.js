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
//Função média aritimetrica
export function media (n1,n2,n3,resultado){
    resultado = (n1+n2+n3)/3 //pergunta por que preciso declarar a variavel aqui sendo q as outras atividades não precisou
    return resultado
}

//Função converte fahrenheit para celcius
export function celciusPfahen (celcius){
    let valorfinal = (celcius*1.8)+32
    return valorfinal
}