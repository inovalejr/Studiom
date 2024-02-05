function acessoEntradasSaidas() {
    // Redirecionar para o link de Entradas / Saídas
    window.location.href = "https://docs.google.com/spreadsheets/d/1d0dKLVbrl64l-N9KJHmXQWCYA_paHyKCHhX2QtR_GB0/edit#gid=0";
}

function acessoAcessoRestrito() {
    // Pedir senha ao usuário
    var senha = prompt("Digite a senha para Acesso Restrito:");

    // Verificar a senha
    if (senha === "15062003") {
        // Se a senha estiver correta, redirecionar para o link de Acesso Restrito
        window.location.href = "https://docs.google.com/spreadsheets/d/1d0dKLVbrl64l-N9KJHmXQWCYA_paHyKCHhX2QtR_GB0/edit#gid=0";
    } else {
        // Se a senha estiver incorreta, mostrar mensagem de erro
        alert("Senha incorreta. Acesso negado.");
    }
}
