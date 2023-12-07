# PROJETO-THE-LAST-OF-US
Projeto THE-LAST-OF-US proposto pelo canal Dev em Dobro

O projeto utiliza as linguagens HTML, CSS, JavaScript

Com um carrosel interativo para trocar a imagem de fundo

![image](https://github.com/GabrielFelipeS/PROJETO-THE-LAST-OF-US/assets/108304564/e73de6a5-0a18-4687-a4b8-016610f8e18d)
![image](https://github.com/GabrielFelipeS/PROJETO-THE-LAST-OF-US/assets/108304564/34c2a4fc-9c23-4937-90ab-387c7a0c98cc)

Link pro github.io: https://gabrielfelipes.github.io/PROJETO-THE-LAST-OF-US/

Abaixo o código javaScript explicada para cada parte:

1. **Seleção de Elementos HTML:**
   - São selecionados todos os elementos com a classe CSS `.botao` e `.imagem` usando `document.querySelectorAll`. Essas classes são utilizadas para representar os botões e imagens associadas no HTML.

```javascript
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
```

2. **Evento de Clique nos Botões:**
   - Um evento de clique é adicionado a cada botão do carrossel usando `addEventListener`. Quando um botão é clicado, a função associada ao evento é executada.

```javascript
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();

        SelecionarBotaoCarossel(botao);

        EsconderImagemAtiva();

        MostrarImagemDeFundo(indice);
    });
});
```

3. **Funções de Ação ao Clicar:**
   - Diversas funções são chamadas quando um botão é clicado.
     - `desativarBotaoSelecionado`: Remove a classe `.selecionado` do botão previamente selecionado.
     - `SelecionarBotaoCarossel`: Adiciona a classe `.selecionado` ao botão clicado.
     - `EsconderImagemAtiva`: Remove a classe `.ativa` da imagem previamente exibida.
     - `MostrarImagemDeFundo`: Adiciona a classe `.ativa` à imagem correspondente ao botão clicado.

```javascript
function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function SelecionarBotaoCarossel(botao) {
    botao.classList.add('selecionado');
}

function MostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function EsconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}
```
