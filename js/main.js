document.addEventListener('DOMContentLoaded', () => {
    const noticiasContainer = document.getElementById('noticias-container');
    if (noticiasContainer) {
        fetch('data/noticias.json')
            .then(response => response.json())
            .then(data => {
                noticiasContainer.innerHTML = '';
                data.forEach(noticia => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `
                        <h3>${noticia.titulo}</h3>
                        <p>${noticia.contenido}</p>
                    `;
                    noticiasContainer.appendChild(card);
                });
            })
            .catch(() => {
                noticiasContainer.innerHTML = '<p>No se pudieron cargar las noticias.</p>';
            });
    }
});