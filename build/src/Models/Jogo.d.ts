import { Jogador } from "./jogadores";
import { Palavras } from "./palavra";
export declare class Jogo {
    private jogadores;
    private palavras;
    private rodadaAtual;
    jogadorAtual: Jogador | null;
    palavraAtual: Palavras | null;
    constructor();
    adicionarJogador(jogador: Jogador): void;
    adicionarPalavra(palavra: Palavras): void;
    iniciarJogo(): void;
    proximaRodada(): void;
    getRodadaAtual(): number;
    getJogadorAtual(): Jogador | null;
    getPalavraAtual(): Palavras | null;
    getPalavras(): Palavras[];
    getJogadores(): Jogador[];
}
