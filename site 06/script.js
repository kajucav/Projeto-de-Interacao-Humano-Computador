// Função para separar eventos passados de futuros
window.onload = function() {
    let futuros = document.getElementById('futuros');
    let passados = document.getElementById('passados');
    
    // Criar uma função para verificar se o evento é futuro ou passado
    function verificarEventos() {
        let eventosFuturos = document.querySelectorAll('.evento');
        let hoje = new Date();

        eventosFuturos.forEach(evento => {
            let dataEvento = new Date(evento.querySelector('p').innerText.split('Data: ')[1]);

            if (dataEvento < hoje) {
                passados.appendChild(evento);
            } else {
                futuros.appendChild(evento);
            }
        });
    }

    verificarEventos();
};
