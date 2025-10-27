function cadastrarCliente(){
    const nome = document.getElementById('nome').value.trim();

    if (nome === '') {
        alert('Preencher campo nome');
        document.getElementById('nome').focus();
        return;
    }

    window.location.href = "home.html";
}