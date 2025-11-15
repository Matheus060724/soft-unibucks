function cadastrarCliente() {
    const email = document.getElementById('email').value.trim();
    const nome = document.getElementById('nome').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    if (email === '') {
        alert('Preencher campo email');
        document.getElementById('email').focus();
        return;
    }

    fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, name: nome, CPF: cpf, telefone    })
    })
    .then(res => {
        if (!res.ok) {
            return res.json().then(err => Promise.reject(err.error || "Erro no cadastro"));
        }
        return res.json();
    })
    .then(response => {
        console.log("Resposta:", response);

        ['email', 'nome', 'cpf', 'telefone'].forEach(id => {
            document.getElementById(id).value = '';
        });

        window.location.href = "home.html";
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao cadastrar: ' + error);
    });
}