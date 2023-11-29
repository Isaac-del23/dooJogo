// GameController.ts
import Palavras from "../Models/palavra";
import { Jogador } from "../Models/jogadores";
import { IInputOutput } from '../Models/interface/IInputOutput';

class GameController {
    private palavras: Palavras;
    private jogadores: Jogador[];
    private view: IInputOutput;
    private maxErros: number;

    constructor(view: IInputOutput, maxErros: number = 6) {
        this.palavras = new Palavras();
        this.jogadores = [];
        this.view = view;
        this.maxErros = maxErros;
    }

    public adicionarJogadores(): void {
        this.view.exibirMensagem("Bem-vindo ao Jogo da Forca!");

        const quantidade = this.view.solicitarQuantidadeDeJogadores();

        for (let i = 1; i <= quantidade; i++) {
            const nome = this.view.solicitarNomeDoJogador(i);
            const jogador = new Jogador(nome);
            this.jogadores.push(jogador);
        }
    }

    public iniciarJogo(): void {
        if (this.jogadores.length < 2) {
            this.view.exibirMensagem("Pelo menos 2 jogadores são necessários para iniciar o jogo.");
            return;
        }

        const totalRodadas = this.view.solicitarQuantidadeRodadas();

        let rodada = 1;
        let totalPontos = 0;

        while (rodada <= totalRodadas) {
            this.view.exibirMensagem(`Rodada ${rodada}`);
            this.view.exibirMensagem(`Escolha uma Categoria de palavras`);

            // Novo conjunto de letras escolhidas para cada rodada
            const letrasEscolhidasRodada: Set<string> = new Set<string>();

            const categoria = this.view.solicitarCategoria(["Filmes", "Animais", "Jogos", "Frutas", "Cantores", "Famosos"]);
            const palavra = this.palavras.getPalavraAleatoria(categoria);

            const letrasReveladas: string[] = [];
            let jogadorInicial = this.sortearJogadorInicial();

            while (true) {
                this.view.exibirMensagem(`Categoria escolhida foi ${categoria}`);
                this.view.exibirMensagem(`É a vez do jogador ${jogadorInicial.obterNome()}`);

                // Mostrar a palavra com traços
                const palavraComTracos = this.view.mostrarPalavraComTracos(palavra, letrasReveladas);
                this.view.exibirMensagem(palavraComTracos);

                // Lógica para adivinhar letras
                let letra: string;
                do {
                    letra = this.view.solicitarLetra();
                    if (letrasEscolhidasRodada.has(letra)) {
                        this.view.exibirMensagem(`A letra '${letra}' já foi escolhida nesta rodada. Tente outra.`);
                    }
                } while (letrasEscolhidasRodada.has(letra));

                if (this.tentarAcertarLetra(jogadorInicial, palavra, letra, letrasReveladas)) {
                    this.view.exibirMensagem("Letra correta! Ganhou 10 pontos e mais 1 chances.");
                    // Atualiza a exibição da palavra com os traços
                    letrasReveladas.push(letra);
                    const palavraComTracos = this.view.mostrarPalavraComTracos(palavra, letrasReveladas);
                    this.view.exibirMensagem(palavraComTracos);
                } else {
                    this.view.exibirMensagem("Letra incorreta. Passando a vez.");
                    jogadorInicial = this.proximoJogador(jogadorInicial);
                }

                letrasEscolhidasRodada.add(letra); // Adiciona a letra escolhida ao conjunto de letras escolhidas desta rodada.

                if (this.jogadorSabePalavra(palavra, letrasReveladas)) {
                    if (this.view.voceSabeaResposta() == 'S') {
                        this.view.solicitarRespostaSabePalavra();
                        jogadorInicial.adicionarPontos(50); // Pontos adicionais por saber a palavra
                        this.view.exibirMensagem("PARABÉNS VOCÊ GANHOU!!");
                        break; // Fim da rodada
                    } else {
                        // Pedir mais uma letra.
                        let novaLetra: string;
                        do {
                            novaLetra = this.view.solicitarLetra();
                            if (letrasEscolhidasRodada.has(novaLetra)) {
                                this.view.exibirMensagem(`A letra '${novaLetra}' já foi escolhida nesta rodada. Tente outra.`);
                            }
                        } while (letrasEscolhidasRodada.has(novaLetra));

                        if (this.tentarAcertarLetra(jogadorInicial, palavra, novaLetra, letrasReveladas)) {
                            this.view.exibirMensagem("Letra correta! Ganhou 10 pontos e mais 1 chances.");
                            // Atualiza a exibição da palavra com os traços
                            letrasReveladas.push(novaLetra);
                            const palavraComTracos = this.view.mostrarPalavraComTracos(palavra, letrasReveladas);
                            this.view.exibirMensagem(palavraComTracos);
                        } else {
                            this.view.exibirMensagem("Letra incorreta. Passando a vez.");
                            jogadorInicial = this.proximoJogador(jogadorInicial);
                        }

                        letrasEscolhidasRodada.add(novaLetra);
                    }
                }

                if (jogadorInicial.obterTentativas() >= 10 || jogadorInicial.obterErros() >= 6) {
                    // Se atingir o limite de tentativas ou erros, encerra a rodada.
                    this.view.exibirMensagem("Você atingiu o limite de tentativas. O jogo continua para o próximo jogador.");
                    break; // Fim da rodada
                }
            }

            // Calcular pontos da rodada
            totalPontos += jogadorInicial.obterPontuacao();

            rodada++;
        }

        // Criar um array para armazenar os totais de pontos de cada jogador
        const totaisPontos: { jogador: Jogador, pontos: number }[] = [];

        for (const jogador of this.jogadores) {
            const totalPontosJogador = jogador.obterPontuacao();
            totaisPontos.push({ jogador, pontos: totalPontosJogador });
        }

        // Ordenar o array pelo total de pontos em ordem decrescente
        totaisPontos.sort((a, b) => b.pontos - a.pontos);

        // Exibir os totais de pontos de cada jogador
        for (const { jogador, pontos } of totaisPontos) {
            this.view.mostrarPontuacaoJogador(jogador.obterNome(), pontos);
        }
        this.view.exibirMensagem(`Jogo encerrado. Total de pontos: ${totalPontos}`);
    }

    private sortearJogadorInicial(): Jogador {
        // Gera um índice aleatório dentro do intervalo de jogadores.
        const indice = Math.floor(Math.random() * this.jogadores.length);
        // Retorna o jogador correspondente ao índice gerado.
        return this.jogadores[indice];
    }

    private tentarAcertarLetra(jogador: Jogador, palavra: string, letra: string, letrasReveladas: string[]): boolean {
        if (palavra.includes(letra)) {
            // Se a letra está na palavra, o jogador ganha 10 pontos.
            jogador.adicionarPontos(10);
            // Incrementa o número de tentativas do jogador.
            jogador.incrementarTentativas();
            // Adiciona a letra revelada ao array de letras reveladas.
            letrasReveladas.push(letra);
            // Retorna true indicando que a letra foi acertada.
            return true;
        } else {
            // Chama o método tratarErro para lidar com o erro.
            this.tratarErro(jogador, palavra);
            // Retorna false indicando que a letra foi incorreta.
            return false;
        }
    }

    private tratarErro(jogador: Jogador, palavra: string): void {
        // Incrementa o número de tentativas do jogador.
        jogador.incrementarTentativas();
        // Incrementa o número de erros do jogador.
        jogador.incrementarErros();

        // Exibe a parte da forca correspondente ao número de erros.
        this.view.exibirForca(jogador.obterErros());

        // Verifica se atingiu o limite de erros.
        if (jogador.obterErros() >= 6) {
            this.view.exibirMensagem("Você atingiu o limite de erros. O jogo terminou.");
            this.view.exibirMensagem(`A palavra era: ${palavra}`);
        } else {
            // Switch to the next player.
            const proximoJogador = this.proximoJogador(jogador);
            this.view.exibirMensagem("Letra incorreta. Passando a vez para o próximo jogador.");
            this.view.exibirMensagem(`É a vez do jogador ${proximoJogador.obterNome()}`);
        }
    }

    private proximoJogador(jogadorAtual: Jogador): Jogador {
        // Obtém o índice do jogador atual na lista de jogadores.
        const indiceAtual = this.jogadores.indexOf(jogadorAtual);
        // Calcula o próximo índice circularmente (volta para o início se chegar ao final da lista).
        const proximoIndice = (indiceAtual + 1) % this.jogadores.length;
        // Retorna o próximo jogador na lista.
        return this.jogadores[proximoIndice];
    }

    private jogadorSabePalavra(palavra: string, letrasReveladas: string[]): boolean {
        // Calcula o número de letras não reveladas na palavra.
        const letrasNaoReveladas = palavra.split("").filter(letra => !letrasReveladas.includes(letra));
        // Verifica se o número de letras não reveladas é menor ou igual à metade do tamanho da palavra.
        const jogadorSabe = letrasNaoReveladas.length <= Math.ceil(palavra.length / 2);
        return jogadorSabe;
    }
}

export default GameController;