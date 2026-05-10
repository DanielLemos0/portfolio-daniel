// Função para troca de tema (claro e escuro)

function trocarTema() {
    const root = document.documentElement;
    const botao = document.getElementById('tema');

    root.classList.toggle('light');

    if (root.classList.contains('light')) {
        botao.textContent = '☀️';
        localStorage.setItem('tema', 'light');
    } else {
        botao.textContent = '🌙';
        localStorage.setItem('tema', 'dark');
    }
}

// Carrega o tema salvo ao abrir qualquer página

document.addEventListener('DOMContentLoaded', function() {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'light') {
        document.documentElement.classList.add('light');
        document.getElementById('tema').textContent = '☀️';
    }
});

// Validação do formulário de contato

document.addEventListener('DOMContentLoaded', function() {
    const btnEnviar = document.querySelector('.btn-enviar');
    
    if (btnEnviar) {
        btnEnviar.addEventListener('click', function(event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('texto-mensagem').value.trim();
            const emailValido = email.includes('@') && email.includes('.');

            if (!nome || !email || !mensagem) {
                const msgErroCampos = document.getElementById('mensagem-erro-campos');
                msgErroCampos.style.display = 'block';
                setTimeout(function() {
                    msgErroCampos.style.display = 'none';
                }, 4000);
                return;
            }

            if (!emailValido) {
                const msgErroEmail = document.getElementById('mensagem-erro-email');
                msgErroEmail.style.display = 'block';
                setTimeout(function() {
                    msgErroEmail.style.display = 'none';
                }, 4000);
                return;
            }

            // Limpa os campos
            document.getElementById('nome').value = '';
            document.getElementById('email').value = '';
            document.getElementById('texto-mensagem').value = '';

            // Mostra a mensagem de sucesso
            const msgSucesso = document.getElementById('mensagem-sucesso');
            msgSucesso.style.display = 'block';

            // Esconde a mensagem após 4 segundos
            setTimeout(function() {
                msgSucesso.style.display = 'none';
            }, 4000);
        });
    }
});