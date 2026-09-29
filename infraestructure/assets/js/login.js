const form = document.getElementById('form-login');

form.addEventListener('submit', function (evento) {
    evento.preventDefault(); // impede o envio real, já que a autenticação aqui é fictícia

    let valido = true;

    const email = document.getElementById('email');
    const erroEmail = document.getElementById('erro-email');

    if (email.value.trim() === '') {
        erroEmail.textContent = 'O e-mail é obrigatório.';
        email.classList.add('invalido');
        valido = false;
    } else if (!email.checkValidity()) {
        erroEmail.textContent = 'Digite um e-mail em um formato válido.';
        email.classList.add('invalido');
        valido = false;
    } else {
        erroEmail.textContent = '';
        email.classList.remove('invalido');
    }

    const senha = document.getElementById('senha');
    const erroSenha = document.getElementById('erro-senha');

    if (senha.value.trim() === '') {
        erroSenha.textContent = 'A senha é obrigatória.';
        senha.classList.add('invalido');
        valido = false;
    } else if (senha.value.length < 6) {
        erroSenha.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        senha.classList.add('invalido');
        valido = false;
    } else {
        erroSenha.textContent = '';
        senha.classList.remove('invalido');
    }

    // Se passou nas validações, simula o login bem-sucedido e redireciona ao painel
    if (valido) {
        window.location.href = 'admin.html';
    }
});
