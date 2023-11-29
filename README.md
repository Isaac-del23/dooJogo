# dooJogo
Projeto De Jogo de forca com TypeScript, para matéria de Desenvolvimento Orientado a Objeto da Faculdade

# Autor
Isaac Caetano 

# Como Executar

Siga os passos abaixo para iniciar o Jogo da Forca:

1. Clone o repositório.
2. Abra o terminal na pasta do projeto.
3. Execute o comando `npm install` para instalar as dependências.
4. Execute o jogo com `npm start`.


### Jogabilidade:

* Siga as instruções fornecidas no console para configurar o jogo.
* Escolha a quantidade de jogadores, nomes dos jogadores e a categoria da palavra.
* Tente adivinhar a palavra, fornecendo letras , quando completa 50% da palavra você deve tentando adivinhar a palavra completa, se nao souber passa a vez.
* Ganhe pontos por acertar letras e palavras e continue jogando por várias rodadas.
  
# Estrutura do Projeto

* src/: Contém o código-fonte TypeScript.
* Controller/: Contém   à lógica do jogo.
* Models/: Definições de modelos, como jogador e palavras.
* View/: Implementação da interface do usuário no console.
* index.ts: Ponto de entrada da aplicação.

# Conceitos de POO Utilizados

### 1. Classe e Instanciação de Objetos

Neste projeto, diversas classes foram utilizadas para representar diferentes componentes do jogo, como `GameController`, `Jogador`, `Palavras`, `ConsoleView`, entre outras. A instância dessas classes cria objetos que formam a estrutura do jogo.

### 2. Encapsulamento

O encapsulamento é aplicado ao definir atributos privados nas classes, como `_nome`, `_pontuacao`, `_tentativas`, `_erros`, etc. Esses atributos só podem ser acessados por meio dos métodos públicos da classe.

### 3. Relacionamentos

- **Relacionamento Simples:** A instância de `ConsoleView` é passada como parâmetro para o construtor de `GameController`.
  
- **Agregação:** A classe `Jogo` possui instâncias de `Jogador` e `Palavras`.

- **Herança:** `ConsoleView` implementa a interface `IInputOutput`.

### 4. Polimorfismo

O polimorfismo é observado nos métodos que aceitam diferentes implementações de interfaces, como o método `exibirForca` em `ConsoleView`.

### 5. Interfaces e Classes Abstratas

- **Interface:** `IInputOutput` é uma interface que define métodos para interação com entrada/saída.
  
- **Classe Abstrata:** Não está presente no código fornecido, mas pode ser uma adição para fornecer uma base comum para diferentes tipos de jogos.

### 6. Sobrecarga e Sobrescrita de Métodos

- **Sobrecarga:** Métodos em `ConsoleView` aceitam diferentes tipos de parâmetros.
  
- **Sobrescrita:** O método `exibirMensagem` em `ConsoleView` implementa a interface `IInputOutput`.


# Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas e propor melhorias.
