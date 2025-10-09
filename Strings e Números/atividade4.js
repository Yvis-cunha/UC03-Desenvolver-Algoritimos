import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt


let txt = prompt("digite uma palvra ou frase: ")

function verificarPalindromo(palavra) {

  let nome = palavra.toLowerCase().replaceAll(' ', '')
  let nomeinvertido = nome.split('').reverse().join('');

  return nome === nomeinvertido;
}

if((verificarPalindromo (txt)) === true){
    console.log("Essa palavra ou frase é palindromo")
}else{
    console.log("Essa palavra ou frase não é palindromo")
}

//console.log(verificarPalindromo (txt))