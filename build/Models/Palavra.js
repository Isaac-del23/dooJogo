"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Palavras = void 0;
class Palavras {
    categorias;
    constructor() {
        this.categorias = [
            {
                nome: "Filmes",
                palavras: ["titanic", "avatar", "inception", "interstellar"]
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
                nome: "Músicas",
                palavras: ["thriller", "bohemian", "despacito", "shapeofyou"]
            }
            // Adicione mais categorias e palavras aqui...
        ];
    }
    getPalavraAleatoria(categoria) {
        const categoriaSelecionada = this.categorias.find(c => c.nome === categoria);
        if (categoriaSelecionada) {
            const palavras = categoriaSelecionada.palavras;
            const indice = Math.floor(Math.random() * palavras.length);
            return palavras[indice];
        }
        else {
            throw new Error(`Categoria '${categoria}' não encontrada.`);
        }
    }
    contarLetras(palavra) {
        return palavra.length;
    }
}
exports.Palavras = Palavras;
exports.default = Palavras;
