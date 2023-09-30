function acessoEntradasSaidas() {
    // Redirecionar para o link de Entradas / Saídas
    window.location.href = "https://docs.google.com/spreadsheets/d/1vEm83ZaHyXXXgpwoexTVqTpUbJuj7dVMqNOlP2tLbbg/edit#gid=0";
}

function acessoAcessoRestrito() {
    // Pedir senha ao usuário
    var senha = prompt("Digite a senha para Acesso Restrito:");

    // Verificar a senha
    if (senha === "studiom") {
        // Se a senha estiver correta, redirecionar para o link de Acesso Restrito
        window.location.href = "https://docs.google.com/spreadsheets/d/1wxmhY-LPj9WbGDRK_3YQsBIeYE9YnbWkV0L3_UVF5N8/edit#gid=0";
    } else {
        // Se a senha estiver incorreta, mostrar mensagem de erro
        alert("Senha incorreta. Acesso negado.");
    }
}
