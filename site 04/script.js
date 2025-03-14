document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("comentario-form");
    const listaComentarios = document.getElementById("lista-comentarios");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const nome = document.getElementById("nome").value;
        const comentario = document.getElementById("comentario").value;
        
        if (nome && comentario) {
            const novoComentario = document.createElement("div");
            novoComentario.classList.add("comentario");
            novoComentario.innerHTML = `<strong>${nome}:</strong> <p>${comentario}</p>`;
            listaComentarios.appendChild(novoComentario);
            
            form.reset();
        }
    });
});
