/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    - passo 1 - dar um jeito de pegar os elementos HTML dos botões

    - passo 2 - dar um jeito de identificar o clique do usuário no botão

    - passo 3 - desmarcar o botão selecionado anterior 

    - passo 4 - marcar o botão clicado como se estivesse selecionada

    - passo 5 - esconder a imagem de fundo anterior

    - passo 6 - fazer aparecer a imagem de fundo correspondnete ao botão clicado 
*/
// - passo 1 - dar um jeito de pegar os elementos HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// - passo 2 - dar um jeito de identificar o clique do usuário no botão
//forEach roda o html inteiro procurando uma classe
botoesCarrossel.forEach( (botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();

        SelecionarBotaoCarossel(botao);

        EsconderImagemAtiva();

        MostrarImagemDeFundo(indice);
    })
})

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

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
