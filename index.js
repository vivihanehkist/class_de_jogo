class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    dadosHeroi() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Tipo: ${this.tipo}`);
      }
    
    ataque() {
        if (this.tipo == "guerreiro") {
            console.log("espada")
        }
        else if (this.tipo == "mago") {
            console.log("magia")
        }
        else if (this.tipo == "monge") {
            console.log("artes marciais")
        } else if (this.tipo == "ninja") {
            console.log("shuriken")
        } else {
            console.log("Atacou")
        }
    }
} 

let meuHeroi = new Heroi("Jubscleiton", 24, "guerreiro")
console.log(`O ${meuHeroi.tipo} atacou usando:`)
meuHeroi.ataque()