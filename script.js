// --- SISTEMA DE INTERAÇÃO DO TERMINAL (BLOG) ---

/**
 * Alterna o estado do botão Curtir (Inverte entre roxo e amarelo)
 * e atualiza o contador numérico de curtidas.
 */
function toggleLike(btn) {
    const countSpan = document.getElementById('like-count');
    let currentLikes = parseInt(countSpan.innerText);
    
    if (btn.classList.contains('liked')) {
        btn.classList.remove('liked');
        countSpan.innerText = currentLikes - 1;
    } else {
        btn.classList.add('liked');
        countSpan.innerText = currentLikes + 1;
    }
}

/**
 * Captura o texto inserido no terminal de comentários,
 * valida se não está em branco e o adiciona dinamicamente ao topo da lista.
 */
function addComment() {
    const input = document.getElementById('newComment');
    const commentText = input.value.trim();
    
    // Validação básica anti-spam de string vazia
    if (commentText === "") {
        alert("[ERROR_404]: O terminal não aceita transmissões sem dados!");
        return;
    }

    const commentsList = document.getElementById('commentsList');
    
    // Construção do elemento de estrutura do novo comentário
    const newCommentDiv = document.createElement('div');
    newCommentDiv.className = 'comment-item';
    newCommentDiv.innerHTML = `<strong>Anon_Drone:</strong> ${commentText}`;
    
    // Insere o novo comentário no topo da caixa (estilo log de eventos)
    commentsList.insertBefore(newCommentDiv, commentsList.firstChild);
    
    // Reseta o campo de texto
    input.value = "";
}
