let jogosAlugados = 0;

// Função para contar e exibir o total de jogos alugados
function contarExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

// Função para sortear números únicos dentro de um intervalo especificado
function alterarStatus(id){
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');

    imagem.classList.toggle('dashboard__item__img--rented'); // Alterna a classe de imagem alugada
    botao.classList.toggle('dashboard__item__button--return');

    if (botao.classList.contains('dashboard__item__button--return')) { // Verifica se o jogo está sendo alugado
        botao.textContent = 'Devolver';
        jogosAlugados++;
    } else {   // Jogo está sendo devolvido
        let nomeJogo = jogoClicado.innerText;
        let confirmacao = confirm(`Você quer mesmo devolver ${nomeJogo} ?`);
            if (confirmacao === true) {    // Usuário confirmou a devolução
                botao.textContent = 'Alugar';
                jogosAlugados--;
            } else { // Usuário cancelou a devolução
                botao.classList.toggle('dashboard__item__button--return');
            }
    }   
    contarExibirJogosAlugados();
};

// Inicializa a contagem de jogos alugados ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarExibirJogosAlugados();
});

//# Atividade extra - funções adicionais

// Verifica se uma string é palíndromo (ignora maiúsculas, espaços e caracteres não alfanuméricos)
function isPalindrome(str) {
    const s = String(str).toLowerCase().replace(/[^a-z0-9]/g, '');
    return s === s.split('').reverse().join('');
}

// Testes rápidos exibidos no console
console.log('isPalindrome("arara") ->', isPalindrome('arara'));
console.log('isPalindrome("A man, a plan, a canal: Panama") ->', isPalindrome('A man, a plan, a canal: Panama'));
console.log('isPalindrome("teste") ->', isPalindrome('teste'));

// Função para ordenar três números em ordem crescente
function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}
// Teste rápido exibido no console
ordenarNumeros(3, 6, 9);