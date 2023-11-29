export declare class Jogador {
    private nome;
    private tentativas;
    constructor(nome: string);
    obterNome(): string;
    incrementarTentativas(): void;
    obterTentativas(): number;
    podeFalarMaisLetras(): boolean;
}
