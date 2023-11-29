"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// ConsoleView.ts
const readline_sync_1 = tslib_1.__importDefault(require("readline-sync"));
class ConsoleView {
    exibirMensagem(mensagem) {
        console.log(mensagem);
    }
    solicitarCategoria(categorias) {
        const indice = readline_sync_1.default.keyInSelect(categorias, 'Escolha uma categoria:');
        return categorias[indice];
    }
    mostrarPalavra(palavra) {
        console.log(`A palavra é: ${palavra}`);
    }
    solicitarLetra() {
        return readline_sync_1.default.question('Digite uma letra: ');
    }
    mostrarPontuacao(pontuacao) {
        console.log(`Pontuação atual: ${pontuacao}`);
    }
}
exports.default = ConsoleView;
