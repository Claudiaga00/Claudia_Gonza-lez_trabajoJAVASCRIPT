// Lógica principal: Carga dinámica de noticias mediante AJAX (Fetch API). 
// Desarrollado por Claudia González para cumplir con el requisito del Punto 1.
document.addEventListener('DOMContentLoaded', () => {
    const noticiasContainer = document.getElementById('noticias-container');
    if (noticiasContainer) {
        // Ruta correcta hacia el JSON desde la raíz
        fetch('data/noticias.json')
            .then(response => response.json())
            .then(data => {
                noticiasContainer.innerHTML = '';
                data.forEach(noticia => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `<h3>${noticia.titulo}</h3><p>${noticia.contenido}</p>`;
                    noticiasContainer.appendChild(card);
                });
            })
            .catch(() => {
                noticiasContainer.innerHTML = '<p>No se pudieron cargar las noticias.</p>';
            });
    }
});