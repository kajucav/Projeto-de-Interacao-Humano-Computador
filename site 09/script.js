document.addEventListener('DOMContentLoaded', () => {
    const episodes = [
        {
            title: "O Futuro da IA",
            date: "2023-10-01",
            duration: 1845,
            file: "episode1.mp3"
        },
        {
            title: "Segurança Cibernética",
            date: "2023-09-25",
            duration: 1560,
            file: "episode2.mp3"
        },
        {
            title: "Desenvolvimento Web Moderno",
            date: "2023-09-18",
            duration: 1720,
            file: "episode3.mp3"
        }
    ];

    // Configurar player com o último episódio
    const latestEpisode = episodes[0];
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');
    
    audioSource.src = latestEpisode.file;
    audioPlayer.load();

    // Popular tabela de episódios
    const episodesBody = document.getElementById('episodesBody');
    
    episodes.forEach(episode => {
        const row = document.createElement('tr');
        
        // Formatar duração (mm:ss)
        const duration = new Date(episode.duration * 1000)
                          .toISOString()
                          .substr(14, 5);

        row.innerHTML = `
            <td>${episode.title}</td>
            <td>${new Date(episode.date).toLocaleDateString('pt-BR')}</td>
            <td>${duration}</td>
        `;

        episodesBody.appendChild(row);
    });

    // Adicionar interatividade à tabela
    document.querySelectorAll('.episodes-table tr').forEach(row => {
        row.addEventListener('click', () => {
            const episodeIndex = row.rowIndex - 1; // Descontar header
            if(episodeIndex >= 0) {
                const selectedEpisode = episodes[episodeIndex];
                audioSource.src = selectedEpisode.file;
                audioPlayer.load();
                audioPlayer.play();
            }
        });
    });
});