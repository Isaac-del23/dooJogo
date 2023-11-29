// ConsoleView.ts
import * as readlineSync from 'readline-sync';
import IInputOutput from '../Models/interface/IInputOutput';

class ConsoleView implements IInputOutput {


    public exibirForca(erros: number): void {
        // Lógica para exibir a forca com base no número de erros
        const forca = [
            " ________      ",
            " |      |      ",
            ` |      ${erros > 0 ? "O" : ""}      `,
            ` |     ${erros > 2 ? "/" : ""}${erros > 1 ? "|" : ""}${erros > 3 ? "\\" : ""}     `,
            ` |     ${erros > 4 ? "/" : ""} ${erros > 5 ? "\\" : ""}     `,
            " |             ",
            "_|___          "
        ];

        for (const linha of forca) {
            console.log(linha);
        }
    }
    
    public exibirMensagem(mensagem: string): void {
        console.log(mensagem);
    }

    public solicitarQuantidadeDeJogadores(): number {
        let quantidade: number;
        do {
            quantidade = readlineSync.questionInt('Coloque a Quantidade de Jogadores (2-5)?');
            if (quantidade < 2 || quantidade > 5) {
                this.exibirMensagem('Número de jogadores deve ser entre 2 e 5.');
            }
        } while (quantidade < 2 || quantidade > 5);

        return quantidade;
    }

    public solicitarNomeDoJogador(index: number): string {
        return readlineSync.question(`Digite o nome do jogador ${index}: `);
    }
    public solicitarQuantidadeRodadas(): number {
        const quantidadeRodadas = readlineSync.questionInt('Coloque a quantidade de rodadas: ');
        return quantidadeRodadas;
    }
    public solicitarCategoria(categorias: string[]): string {
        const indice = readlineSync.keyInSelect(categorias, 'Escolha uma categoria:');
        return categorias[indice];
    }

    public mostrarPalavraComTracos(palavra: string, letrasReveladas: string[]): string {
        let palavraComTracos = "";
        for (const letra of palavra) {
            if (letrasReveladas.includes(letra)) {
                palavraComTracos += letra;
            } else {
                palavraComTracos += "_";
            }
        }
        return palavraComTracos;
    }

    

    public voceSabeaResposta(): string {
        try {
            const resposta = readlineSync.question('Você sabe a palavra? (S/N)').toUpperCase();
            if (resposta !== 'S' && resposta !== 'N') {
                throw new Error('Por favor, responda com S ou N.');
            }
            return resposta;
        } catch (error) {
            this.exibirMensagem('Por favor, responda com S ou N.');
            return this.voceSabeaResposta(); // Pode chamar recursivamente para solicitar novamente
        }
    }

    public solicitarRespostaSabePalavra(): string {
        return readlineSync.question('Digite a Palavra: ');
    }

    public solicitarLetra(): string {
        return readlineSync.question('Digite uma letra: ');
    }

    public mostrarPontuacao(pontuacao: number): void {
        console.log(`Pontuação atual: ${pontuacao}`);
    }

    public mostrarPontuacaoJogador(nome: string, pontos: number): void {
        console.log(`Pontuação de ${nome}: ${pontos}`);
    }

}

export default ConsoleView;


