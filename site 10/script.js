document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        {
            title: "O Senhor dos Anéis",
            description: "Uma jornada épica para destruir o Um Anel.",
            video: "lotr-intro.mp4",
            poster: "lotr-poster.jpg"
        },
        {
            title: "Matrix",
            description: "Um hacker descobre a verdadeira realidade.",
            video: "matrix-intro.mp4",
            poster: "matrix-poster.jpg"
        },
        {
            title: "Interestelar",
            description: "Viagem espacial em busca de um novo lar.",
            video: "interstellar-intro.mp4",
            poster: "interstellar-poster.jpg"
        }
    ];

    const moviesGrid = document.getElementById('moviesGrid');

    movies.forEach((movie, index) => {
        const movieCard = document.createElement('article');
        movieCard.className = 'movie-card';
        
        movieCard.innerHTML = `
            <video class="movie-video" controls poster="${movie.poster}">
                <source src="${movie.video}" type="video/mp4">
                Seu navegador não suporta vídeos.
            </video>
            <h2 class="movie-title">${movie.title}</h2>
            <p class="movie-description">${movie.description}</p>
            <div class="rating-container">
                ${Array.from({length: 5}, (_, i) => `
                    <input 
                        type="radio" 
                        id="movie${index}-star${5 - i}" 
                        name="movie${index}-rating" 
                        value="${5 - i}" 
                        class="rating-input">
                    <label 
                        for="movie${index}-star${5 - i}" 
                        class="rating-label">★</label>
                `).join('')}
            </div>
        `;

        moviesGrid.appendChild(movieCard);
    });
});