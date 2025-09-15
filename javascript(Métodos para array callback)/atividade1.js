import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
import { listaProdutos } from "./funcoes.js";

let nomes = ["Maçã", "Pão", "Tomate", "Leite", "Cenoura", "Alface", "Refrigerante"];
let presco = [8.50, 3.80, 4.20, 5.00, 3.10, 2.90, 8.50];
let categorias = ["Hortifruti", "Padaria", "Hortifruti", "Laticínios", "Hortifruti", "Hortifruti", "Bebidas"]
let imposto = 1.05
let produtosbaratos

console.log("--- Produtos da categoria 'Hortifruti' ---");

categorias.forEach((categoria, indice) => {
     if (categoria === "Hortifruti") {
    console.log(nomes[indice]);
    }
})

let prescoacressimo = presco.map((presco) => presco *imposto) 

let somatotalHortifruti = categorias.reduce((acumulador, categoriaAtual, indice) => {
  if (categoriaAtual === 'Hortifruti') { 
    return acumulador + prescoacressimo[indice]
  } 
  return acumulador;
}, 0)

console.log(`O valor total dos produtos de Hortifruti é com acressimo é: R$${somatotalHortifruti.toFixed(2)}`);

produtosbaratos = presco.forEach((presco, indice) => {
     if (presco < 5 && categorias[indice] == 'Hortifruti') {
    console.log(nomes[indice]);
    }else{
        
    }
})

produtosbaratos = presco.forEach((presco, indice) => {
     if (presco > 0 && categorias[indice] == 'Hortifruti'){
    console.log('Todos os produtos são mariores que zero');
    }else{
        
    }
})
