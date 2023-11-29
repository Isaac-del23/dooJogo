import { Jogador } from "./jogadores";
import { Palavras } from "./palavra";

export class Jogo {
    private _jogadores: Jogador[];
    private _palavras: Palavras[];
    private _rodadaAtual: number;
    private _jogadorAtual: Jogador | null;
    private _palavraAtual: Palavras | null;

    constructor() {
        this._jogadores = [];
        this._palavras = [];
        this._rodadaAtual = 0;
        this._jogadorAtual = null;
        this._palavraAtual = null;
    }

    adicionarJogador(jogador: Jogador) {
        this._jogadores.push(jogador);
    }

    adicionarPalavra(palavra: Palavras) {
        this._palavras.push(palavra);
    }

    iniciarJogo() {
        this._rodadaAtual = 1;
        this._jogadorAtual = this._jogadores[0];
        this._palavraAtual = this._palavras[0];
    }

    proximaRodada() {
        this._rodadaAtual++;
        this._jogadorAtual = this._jogadores[this._rodadaAtual % this._jogadores.length];
        this._palavraAtual = this._palavras[this._rodadaAtual % this._palavras.length];
    }

    get rodadaAtual() {
        return this._rodadaAtual;
    }

    set rodadaAtual(rodadaAtual: number) {
        this._rodadaAtual = rodadaAtual;
    }

    get jogadorAtual() {
        return this._jogadorAtual;
    }

    set jogadorAtual(jogadorAtual: Jogador | null) {
        this._jogadorAtual = jogadorAtual;
    }

    get palavraAtual() {
        return this._palavraAtual;
    }

    set palavraAtual(palavraAtual: Palavras | null) {
        this._palavraAtual = palavraAtual;
    }

    get palavras() {
        return this._palavras;
    }

    set palavras(palavras: Palavras[]) {
        this._palavras = palavras;
    }

    get jogadores() {
        return this._jogadores;
    }

    set jogadores(jogadores: Jogador[]) {
        this._jogadores = jogadores;
    }
}
