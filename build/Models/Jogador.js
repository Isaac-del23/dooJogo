"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogador = void 0;
class Jogador {
    nome;
    tentativas;
    constructor(nome) {
        this.nome = nome;
        this.tentativas = 0;
    }
    obterNome() {
        return this.nome;
    }
    incrementarTentativas() {
        this.tentativas++;
    }
    obterTentativas() {
        return this.tentativas;
    }
    podeFalarMaisLetras() {
        return this.tentativas < 3;
    }
}
exports.Jogador = Jogador;
