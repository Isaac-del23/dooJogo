//index.ts
import GameController from "./Controller/GameController";
import ConsoleView from "./View/ConsoleView";  // Importe a classe ConsoleView

const consoleView = new ConsoleView();  // Crie uma instância de ConsoleView

const gameController = new GameController(consoleView);  // Passe a instância de ConsoleView para o construtor

gameController.adicionarJogadores();
gameController.iniciarJogo();
