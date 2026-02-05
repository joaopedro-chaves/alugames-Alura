let jogosAlugados = 0;

// Função para contar e exibir o total de jogos alugados
function contarExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

// Função para sortear números únicos dentro de um intervalo especificado
function alterarStatus(id) {
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name').textContent;

    if (botao.classList.contains('dashboard__item__button--return')) {
        // Fluxo de Devolução
        if (confirm(`Você realmente deseja devolver o jogo ${nomeJogo}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
        }
    } else {
        // Fluxo de Aluguel
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }

    contarExibirJogosAlugados();
}

// Inicializa a contagem de jogos alugados ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarExibirJogosAlugados();
});