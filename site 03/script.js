document.addEventListener("DOMContentLoaded", function () {
    const projetos = document.querySelectorAll(".projeto");
    
    projetos.forEach(projeto => {
        projeto.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "0.3s";
        });
        
        projeto.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});
