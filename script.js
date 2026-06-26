// ==========================================
// 1. ALTERNADOR DE CORES (Roxo <-> Amarelo)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const btnMudarCor = document.getElementById('btn-mudar-cor');
    
    if (btnMudarCor) {
        btnMudarCor.addEventListener('click', () => {
            // Verifica se o atributo 'data-theme' já está como 'yellow'
            const temaAtual = document.documentElement.getAttribute('data-theme');
            
            if (temaAtual === 'yellow') {
                // Remove o atributo para voltar ao roxo padrão
                document.documentElement.removeAttribute('data-theme');
            } else {
                // Aplica o atributo para ativar o CSS do modo amarelo
                document.documentElement.setAttribute('data-theme', 'yellow');
            }
        });
    }
});

// ==========================================
// 2. CONTROLE DE ZOOM DO TEXTO (100% a 150%)
// ==========================================
function mudarZoom(porcentagem) {
    // Altera o valor da variável --tamanho-fonte no :root do CSS
    document.documentElement.style.setProperty('--tamanho-fonte', porcentagem + '%');
}

// ==========================================
// 3. SISTEMA DE CURTIDAS (SIMULADO)
// ==========================================
let contadorCurtidas = 42;
let postJaCurtido = false;

function curtirPost() {
    const botaoCurtir = document.getElementById('btn-curtir');
    const displayContador = document.getElementById('contador-curtidas');

    // Permite curtir apenas uma vez por sessão
    if (!postJaCurtido && botaoCurtir && displayContador) {
        contadorCurtidas++;
        displayContador.innerText = contadorCurtidas;
        
        // Aplica um estilo visual definitivo de "curtido" mudando a cor para a de destaque
        botaoCurtir.style.color = 'var(--cor-hover)';
        botaoCurtir.style.borderColor = 'var(--cor-hover)';
        
        postJaCurtido = true;
    }
}

// ==========================================
// 4. SISTEMA DE COMENTÁRIOS DINÂMICOS
// ==========================================
function adicionarComentario() {
    const nomeInput = document.getElementById('campo-nome');
    const textoInput = document.getElementById('campo-texto');
    const espacoComentarios = document.getElementById('espaco-comentarios');

    // Validação básica para não enviar campos vazios
    if (!nomeInput || !textoInput || !espacoComentarios) return;

    const nome = nomeInput.value.trim();
    const texto = textoInput.value.trim();

    if (nome === '' || texto === '') {
        alert('ERRO DO TERMINAL: Preencha todos os campos antes de transmitir!');
        return;
    }

    // Cria a estrutura HTML do novo comentário seguindo o padrão visual do CSS
    const novoComentario = document.createElement('div');
    novoComentario.className = 'comentario';
    novoComentario.innerHTML = `<strong>${nome}:</strong> ${texto}`;

    // Adiciona o comentário na lista
    espacoComentarios.appendChild(novoComentario);

    // Limpa os campos de texto do formulário
    nomeInput.value = '';
    textoInput.value = '';

    // Rola automaticamente a caixa de comentários para o final
    espacoComentarios.scrollTop = espacoComentarios.scrollHeight;
}
