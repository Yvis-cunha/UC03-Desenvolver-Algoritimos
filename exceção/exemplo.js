import PromptSync from "prompt-sync";
const prompt = PromptSync()

class testeError extends Error{
    constructor(message){
        super(message)
    }
}
function validarCpf(cpf){
    if(isNaN(Number(cpf)) ){
        throw new testeError('Error! Precisa ser números!')
    }
    if(cpf.length !== 11){
        throw new testeError('Error! Quantidade de caracteres insuficiente!')
    }
    return cpf
}

try{
    let cpf = validarCpf(prompt('Digite o cpf:'))
    console.log(`${cpf} - validado!`)
}catch(error){
    console.error(error.message)
}