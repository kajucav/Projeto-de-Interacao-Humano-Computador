document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const statusMessage = document.getElementById("status-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const cep = document.getElementById("cep").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (!nome || !email || !cep || !telefone || !mensagem) {
            statusMessage.textContent = "Por favor, preencha todos os campos.";
            statusMessage.style.color = "red";
            return;
        }

        if (!validateEmail(email)) {
            statusMessage.textContent = "Por favor, insira um e-mail válido.";
            statusMessage.style.color = "red";
            return;
        }

        statusMessage.textContent = "Mensagem enviada com sucesso!";
        statusMessage.style.color = "green";
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
