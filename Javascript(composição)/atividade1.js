import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
import { Computador, Memoria, Processador } from "./class.js"

const Computador1 = new Computador
const memoria1 = new Memoria("DDR4", "3200", "16")
const processador1 = new Processador("Amd", "Ryzen 5", 6, "4.2ghz")  


//memoria1.capacidade = 32
//memoria1.tipo = 'DDR4'
//console.log(memoria1.capacidade)
Computador1.imprimirfichatenica()

