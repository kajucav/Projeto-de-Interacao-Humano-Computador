document.addEventListener('DOMContentLoaded', () => {
    const images = [
        {
            id: 1,
            name: "Pôr do Sol",
            description: "Pôr do sol sobre as montanhas",
            date: "2023-09-20",
            url: "https://via.placeholder.com/300x250/FF6B6B/FFFFFF?text=Sunset"
        },
        {
            id: 2,
            name: "Floresta Tropical",
            description: "Vista aérea de floresta densa",
            date: "2023-09-18",
            url: "https://via.placeholder.com/300x250/4ECDC4/FFFFFF?text=Forest"
        },
        {
            id: 3,
            name: "Arquitetura Urbana",
            description: "Arranha-céus modernos",
            date: "2023-09-15",
            url: "https://via.placeholder.com/300x250/45B7D1/FFFFFF?text=City"
        }
    ];

    const gallery = document.getElementById('imageGallery');
    images.forEach(image => {
        const imgContainer = document.createElement('div');
        imgContainer.innerHTML = `
            <img src="${image.url}" 
                 alt="${image.description}" 
                 class="gallery-image"
                 data-id="${image.id}">
        `;
        gallery.appendChild(imgContainer);
    });

    const tableBody = document.getElementById('tableBody');
    images.forEach(image => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${image.name}</td>
            <td>${image.description}</td>
            <td>${new Date(image.date).toLocaleDateString('pt-BR')}</td>
        `;
        tableBody.appendChild(row);
    });
});