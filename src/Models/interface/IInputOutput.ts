// IInputOutput.ts
export interface IInputOutput {
    exibirForca(erros: number): void;
    exibirMensagem(mensagem: string): void;
    solicitarQuantidadeDeJogadores(): number;
    solicitarNomeDoJogador(index: number): string;
    solicitarQuantidadeRodadas(): number;
    solicitarCategoria(categorias: string[]): string;
    mostrarPalavraComTracos(palavra: string, letrasReveladas: string[]): string;
    voceSabeaResposta(): string;
    solicitarRespostaSabePalavra(): string;
    solicitarLetra(): string;
    mostrarPontuacao(pontuacao: number): void;
    mostrarPontuacaoJogador(nome: string, pontos: number): void;
}

export default IInputOutput;
