function acessoEntradasSaidas() {
    // Redirecionar para o link de Entradas / Saídas
    window.location.href = "https://docs.google.com/spreadsheets/d/1vEm83ZaHyXXXgpwoexTVqTpUbJuj7dVMqNOlP2tLbbg/edit#gid=0";
}

function acessoAcessoRestrito() {
    // Pedir senha ao usuário
    var senha = prompt("Digite a senha para Acesso Restrito:");

    // Verificar a senha
    if (senha === "15062003") {
        // Se a senha estiver correta, redirecionar para o link de Acesso Restrito
        window.location.href = "https://docs.google.com/spreadsheets/d/1T51HwazDE49zLuzqLeBH3egoXl_yb7tEI16VTKYga9k/edit#gid=0";
    } else {
        // Se a senha estiver incorreta, mostrar mensagem de erro
        alert("Senha incorreta. Acesso negado.");
    }
}
