/**
 * AluGames - Lógica de Aluguel de Jogos
 * 
 * Este arquivo controla a interatividade da página, permitindo alugar e devolver jogos,
 * além de manter uma contagem atualizada dos itens alugados no console.
 */

// Variável global para rastrear a quantidade total de jogos alugados no momento
let jogosAlugados = 0;

/**
 * Exibe no console a contagem total de jogos alugados.
 * Útil para fins de monitoramento do estado da aplicação.
 */
function contarExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

// Função para sortear números únicos dentro de um intervalo especificado
function alterarStatus(id) {
    // window.event captura o evento de clique que disparou a função
    // preventDefault() impede que o link '#' faça a página pular para o topo
    if (window.event) {
        window.event.preventDefault();
    }

    // Seleção dos elementos do DOM baseada no ID único de cada jogo (ex: game-1)
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name').textContent;

    // Log didático para confirmar qual botão foi clicado
    console.log(`Iniciando ação para o jogo: ${nomeJogo}`);

    // Verificamos se o botão já possui a classe de "devolver" para saber o estado atual
    if (botao.classList.contains('dashboard__item__button--return')) {

        /**
         * FLUXO DE DEVOLUÇÃO
         * Pedimos uma confirmação antes de realizar a ação (Boa prática de UX)
         */
        if (confirm(`Você realmente deseja devolver o jogo ${nomeJogo}?`)) {
            // Removemos os efeitos visuais de "alugado"
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');

            // Alteramos o texto para indicar que pode ser alugado novamente
            botao.textContent = 'Alugar';

            // Decrementamos a contagem global
            jogosAlugados--;
        }

    } else {

        /**
         * FLUXO DE ALUGUEL
         * Adicionamos os efeitos visuais e alteramos o estado do botão
         */
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');

        // Alteramos o texto para indicar que a próxima ação será devolver
        botao.textContent = 'Devolver';

        // Incrementamos a contagem global
        jogosAlugados++;
    }

    // Atualizamos o log no console após cada mudança
    contarExibirJogosAlugados();
}

/**
 * Evento executado assim que o HTML termina de carregar.
 * Garante que a contagem inicial de jogos já alugados (definidos no HTML) seja capturada.
 */
document.addEventListener('DOMContentLoaded', function () {
    // Busca todos os elementos que já começam com a classe de alugado
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;

    // Exibe a contagem inicial no console
    contarExibirJogosAlugados();
});