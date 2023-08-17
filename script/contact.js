document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;

    if (nome === "") {
        alert("Por favor, digite o seu nome.");
        return false;
    }

    if (telefone === "") {
        alert("Por favor, digite o seu telefone.");
        return false;
    }

    if (email === "") {
        alert("Por favor, digite o seu e-mail.");
        return false;
    } else if (!validateEmail(email)) {
        alert("Por favor, digite um e-mail válido.");
        return false;
    }

    if (assunto === "") {
        alert("Por favor, digite o assunto.");
        return false;
    }

    if (mensagem === "") {
        alert("Por favor, digite a mensagem.");
        return false;
    }

    // Se chegou até aqui, todos os campos estão preenchidos corretamente
    alert("Formulário enviado com sucesso!");
    // Código para enviar o formulário para o servidor, se necessário.
});

function validateEmail(email) {
    // Expressão regular para validar o formato do e-mail
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
