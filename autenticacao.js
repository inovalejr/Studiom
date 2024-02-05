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
        window.location.href = "https://docs.google.com/spreadsheets/d/13SxrZ4w-TCTKF4ggORiBEQAC75T_NXtqy_L0YK8RS5Y/edit#gid=1453687138";
    } else {
        // Se a senha estiver incorreta, mostrar mensagem de erro
        alert("Senha incorreta. Acesso negado.");
    }
}
