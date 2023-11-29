//IJogador.ts
export interface IJogador {
    obterNome(): string;
    adicionarPontos(pontos: number): void;
    obterPontuacao(): number;
    podeFalarMaisLetras(): boolean;
}
