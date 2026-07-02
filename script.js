/**
 * Sistema de Curtidas Individual por Post
 * @param {HTMLElement} botao - O botão que disparou o evento de clique
 */
function curtirPost(botao) {
    // Localiza a tag <span> dentro do botão que contém o número
    const contadorSpan = botao.querySelector('span');
    let curtidasAtuais = parseInt(contadorSpan.innerText);
    
    // Soma +1 ao contador
    curtidasAtuais++;
    contadorSpan.innerText = curtidasAtuais;
    
    // Feedback visual rápido de clique (pisca em lilás)
    botao.style.backgroundColor = '#b983ff';
    setTimeout(() => { 
        botao.style.backgroundColor = '#250938'; 
    }, 150);
}

/**
 * Alterna a visibilidade (Abrir/Fechar) da caixa de perfil
 */
function togglePerfil() {
    const perfil = document.getElementById('caixa-perfil');
    // Adiciona ou remove a classe 'hidden' configurada no CSS
    perfil.classList.toggle('hidden');
}

/**
 * Adiciona um comentário em tempo real na aba Guestbook
 */
function adicionarComentario() {
    const userInput = document.getElementById('comentario-user');
    const textoInput = document.getElementById('comentario-texto');
    const lista = document.getElementById('lista-comentarios');

    // Validação básica para não enviar campos vazios
    if (userInput.value.trim() === "" || textoInput.value.trim() === "") {
        alert("CRITICAL ERROR: Preencha o seu Username e o Comentário!");
        return;
    }

    // Cria os elementos HTML do novo comentário dinamicamente
    const novoComentario = document.createElement('div');
    novoComentario.className = 'comentario-item';
    
    const userDiv = document.createElement('div');
    userDiv.className = 'comentario-user';
    userDiv.innerText = userInput.value;
    
    const textoDiv = document.createElement('div');
    textoDiv.innerText = textoInput.value;

    // Monta o bloco do comentário
    novoComentario.appendChild(userDiv);
    novoComentario.appendChild(textoDiv);

    // Insere o comentário no topo da lista (estilo feed mais recente)
    lista.insertBefore(novoComentario, lista.firstChild);

    // Limpa os campos do formulário para o próximo envio
    userInput.value = "";
    textoInput.value = "";
}
