"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogo = void 0;
class Jogo {
    jogadores;
    palavras;
    rodadaAtual;
    jogadorAtual;
    palavraAtual;
    constructor() {
        this.jogadores = [];
        this.palavras = [];
        this.rodadaAtual = 0;
        this.jogadorAtual = null;
        this.palavraAtual = null;
    }
    adicionarJogador(jogador) {
        this.jogadores.push(jogador);
    }
    adicionarPalavra(palavra) {
        this.palavras.push(palavra);
    }
    iniciarJogo() {
        this.rodadaAtual = 1;
        this.jogadorAtual = this.jogadores[0];
        this.palavraAtual = this.palavras[0];
    }
    proximaRodada() {
        this.rodadaAtual++;
        this.jogadorAtual = this.jogadores[this.rodadaAtual % this.jogadores.length];
        this.palavraAtual = this.palavras[this.rodadaAtual % this.palavras.length];
    }
    getRodadaAtual() {
        return this.rodadaAtual;
    }
    getJogadorAtual() {
        return this.jogadorAtual;
    }
    getPalavraAtual() {
        return this.palavraAtual;
    }
    getPalavras() {
        return this.palavras;
    }
    getJogadores() {
        return this.jogadores;
    }
}
exports.Jogo = Jogo;
