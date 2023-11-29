//palavras.ts
import Categoria from './interface/ICategoria';

export class Palavras {
    private categorias: Categoria[];

    constructor() {
        this.categorias = [
            {
                nome: "Filmes",
                 palavras: ["titanic", "avatar", "Thor", "Vingadores"]
            },
            {
                nome: "Animais",
                palavras: ["elefante", "girafa", "leão", "tigre"]
            },
            {
                nome: "Jogos",
                palavras: ["minecraft", "fortnite", "zelda", "pokemon"]
            },
            {
                nome: "Frutas",
                palavras: ["abacaxi", "banana", "laranja", "morango", "uva"]
            },
            {
                nome: "Cantores",
                palavras: ["Ana Castela", "Luan Santana", "MC Daniel", "Luan Pereira"]
            },
            {
                nome: "Famosos",
                palavras: ["Anitta", "Whindersson Nunes", "Tatá Werneck", "Bruna Marquezine"]
            }

        ];
    }

    public getPalavraAleatoria(categoria: string): string {
        const categoriaSelecionada = this.categorias.find(c => c.nome === categoria);
        if (categoriaSelecionada) {
            const palavras = categoriaSelecionada.palavras;
            const indice = Math.floor(Math.random() * palavras.length);
            return palavras[indice];
        } else {
            throw new Error(`Categoria '${categoria}' não encontrada.`);
        }
    }

    public contarLetras(palavra: string): number {
        return palavra.length;
    }
}

export default Palavras;
