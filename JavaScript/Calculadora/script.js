// Variável para armazenar a operação selecionada
let operacaoSelecionada = null;
let ultimoBotaoSelecionado = null;

// Funções para realizar as operações
function Soma(n1, n2) {
    return n1 + n2;
}

function Subtracao(n1, n2) {
    return n1 - n2;
}

function Multiplicacao(n1, n2) {
    return n1 * n2;
}

function Divisao(n1, n2) {
    if (n2 !== 0) {
        return n1 / n2;
    } else {
        return 'Erro: Divisão por zero';
    }
}

function Potencia(n1, n2) {
    return Math.pow(n1, n2);
}

function Fatorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * Fatorial(n - 1);
    }
}

// Função para guardar valores e exibir o resultado
function executarOperacao() {
    var n1 = parseFloat(document.getElementById('primeiro_input').value);
    var n2 = parseFloat(document.getElementById('segundo_input').value);
    var resultado = 0;

    switch (operacaoSelecionada) {
        case 'soma':
            resultado = Soma(n1, n2);
            break;
        case 'sub':
            resultado = Subtracao(n1, n2);
            break;
        case 'multi':
            resultado = Multiplicacao(n1, n2);
            break;
        case 'divisao':
            resultado = Divisao(n1, n2);
            break;
        case 'poten':
            resultado = Potencia(n1, n2);
            break;
        case 'fatorial':
            resultado = Fatorial(n1);
            break;
        default:
            console.log('Operação não reconhecida');
            break;
    }

    console.log('Resultado:', resultado);
    var escrever = document.getElementById("Resultado");
    escrever.innerHTML = `<p style="flex-wrap: wrap">${resultado}</p>`;
}

// Adicionar event listeners aos botões de operação
document.querySelectorAll('.botao_operacao').forEach(button => {
    button.addEventListener('click', function() {
        // Restaurar a cor de fundo do último botão clicado, se houver
        if (ultimoBotaoSelecionado) {
            ultimoBotaoSelecionado.style.backgroundColor = ''; // Ou a cor original do botão
        }

        // Definir o botão atual como o último botão selecionado
        ultimoBotaoSelecionado = this;

        // Alterar a cor de fundo do botão de operação selecionado
        this.style.backgroundColor = '#db1e2ee1'; // Escolha a cor desejada

        // Obter a operação selecionada
        operacaoSelecionada = this.classList[1];
        console.log('Operação selecionada:', operacaoSelecionada); 
    });
});