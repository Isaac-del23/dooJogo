declare class ConsoleView {
    exibirMensagem(mensagem: string): void;
    solicitarCategoria(categorias: string[]): string;
    mostrarPalavra(palavra: string): void;
    solicitarLetra(): string;
    mostrarPontuacao(pontuacao: number): void;
}
export default ConsoleView;
