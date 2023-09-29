function acessoProprietario() {
    // Redirecione o usuário para a planilha com acesso total
    window.location.href = "https://docs.google.com/spreadsheets/d/1T51HwazDE49zLuzqLeBH3egoXl_yb7tEI16VTKYga9k/edit#gid=1940797459";
}

function acessoFuncionario() {
    var senhaDigitada = prompt("Digite a senha de funcionário:");
    if (senhaDigitada === "1234") {
        // Redirecione o usuário para a planilha com acesso restrito
        window.location.href = "https://docs.google.com/spreadsheets/d/1T51HwazDE49zLuzqLeBH3egoXl_yb7tEI16VTKYga9k/edit#gid=1940797459";
    } else {
        alert("Senha incorreta. Tente novamente.");
    }
}
