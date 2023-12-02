//Jogadores.ts
import { IJogador } from './interface/IJogador';

export class Jogador implements IJogador {
    private _nome: string;
    private _pontuacao: number;
    private _tentativas: number;
    private _erros: number;

    constructor(nome: string) {
        this._nome = nome;
        this._pontuacao = 0;
        this._tentativas = 0;
        this._erros = 0;
    }

    // Métodos get/set para o nome
    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    // Métodos get/set para a pontuação
    get pontuacao(): number {
        return this._pontuacao;
    }

    set pontuacao(pontuacao: number) {
        this._pontuacao = pontuacao;
    }

    // Métodos get/set para as tentativas
    get tentativas(): number {
        return this._tentativas;
    }

    set tentativas(tentativas: number) {
        this._tentativas = tentativas;
    }

    // Métodos get/set para os erros
    get erros(): number {
        return this._erros;
    }

    set erros(erros: number) {
        this._erros = erros;
    }

    // Métodos existentes...
    public obterNome(): string {
        return this._nome;
    }

    public adicionarPontos(pontos: number): void {
        this._pontuacao += pontos;
    }

    public obterPontuacao(): number {
        return this._pontuacao;
    }

    public podeFalarMaisLetras(): boolean {
        return this._tentativas < 3;
    }

    public obterTentativas(): number {
        return this._tentativas;
    }

    public incrementarTentativas(): void {
        this._tentativas++;
    }

    public obterErros(): number {
        return this._erros;
    }

    public incrementarErros(): void {
        this._erros++;
    }
  
}
