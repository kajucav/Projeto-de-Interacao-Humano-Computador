document.addEventListener("DOMContentLoaded", function () {
    console.log("Página de currículo carregada com sucesso!");
    
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.setAttribute("target", "_blank");
    });
});
